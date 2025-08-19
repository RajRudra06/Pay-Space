import prisma_Medium from "@repo/db_medium/prisma";
import Fuse from "fuse.js";

type RunCheckOutput = {
    flagSanction: boolean;
    matchedRecord?: {
      id: number;
      fullName: string;
      DOB: Date | null;
      nationalCountry: string;
      sanctionCountry: string;
      sanctionReason: string;
      sourceList: string;
    };
    matchDetails?: any[];
    score?: number;
    reason?: string;
    sourceList?: string;
  };

export async function runCheck({fullName,DOB,nationalCountry}:{fullName:String,DOB:Date,nationalCountry:String}):Promise<RunCheckOutput>{

    const sanctionsList = await prisma_Medium.sanctionsList.findMany();
  
    const options = {
        keys: ["fullName", "DOB", "nationalCountry"],
        threshold: 0.3,
        includeMatches: true, 
      };
  
    const fuse = new Fuse(
    sanctionsList.map((s) => ({
        ...s,
        DOB: s.DOB ? s.DOB.toISOString().split("T")[0] : null, 
    })),
    options
    );  

    const query = {
        fullName,
        DOB: DOB.toISOString().split("T")[0],
        nationalCountry,
    };  

    const results = fuse.search(query.fullName + " " + query.DOB + " " + query.nationalCountry);

    if (results.length > 0) {
        const bestMatch = results[0];
    
        return {
          flagSanction: true,
          // @ts-ignore
          matchedRecord: bestMatch!.item, 
          matchDetails: bestMatch!.matches?.map((m) => ({
            field: m.key,
            value: m.value,
          })), 
          score: bestMatch!.score, 
          reason: bestMatch!.item.sanctionReason, 
          sourceList: bestMatch!.item.sourceList, 
        };
      } 

    else {
    return {
        flagSanction: false,
    };
    }  
    
  }
  