import prisma_Bank from "@repo/db_banks/prisma_client";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { z } from "zod"
import { JWT } from "next-auth/jwt";
import { AuthOptions, Session } from "next-auth";
import {CustomUser,CustomToken,CustomSession} from "@repo/next-auth_types"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
  });

export const authOptionsBankSys:AuthOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "text", placeholder: "useremail@abc.com" },
            password: { label: "Password", type: "password" }
          },

          async authorize(credentials:any) {
            const lowercaseBank = credentials.bankname.toLowerCase();

            try{
                const validationResult = loginSchema.safeParse(credentials);

                if(!validationResult.success){
                    return null;
                }

                // const existingUser = await prisma_Bank.user.findUnique({
                //     where: {
                //         email: credentials.email,
                //         bankName:lowercaseBank
                //     }
                // });
                
                const existingUser = await prisma_Bank.user.findUnique({
                    where: {
                      email_bankName: {
                        email: credentials.email,
                        bankName: lowercaseBank
                      }
                    }
                  });


                if(!existingUser){  
                    throw new Error("UserNotFound")
                }

                const passwordValidation=await bcrypt.compare(credentials.password, existingUser.password)

                if(passwordValidation){

                    return {
                        id: existingUser.id.toString(), 
                        username: existingUser.username,   
                        email: existingUser.email,      
                        number: existingUser.number ,
                        loggedBank: credentials.bankname
                      }   
                   
                }
                
                throw new Error("InvalidCredentials")
            }
            catch(err){
                if (err instanceof Error) throw err; 
                throw new Error("Unknown error");            }
            
          },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "default-dev-secret",
    session:{
        strategy:"jwt"
    },
    callbacks: { 
        
        async jwt({ token, user }) {
            if (user) {
                const customUser = user as CustomUser;
                
                token.id = customUser.id;           
                token.email = customUser.email;    
                token.username = customUser.username; 
                token.number = customUser.number;   
                token.loggedBank = customUser.loggedBank;


            }
            return token;
      },
        async session({ token, session }:{token:JWT,session:Session}) {
            if (session.user) {
                const customToken = token as CustomToken;
                const customSession = session as CustomSession;
                
                customSession.user.id = customToken.id!;         
                customSession.user.email = customToken.email!;
                customSession.user.username = customToken.username!;
                customSession.user.number = customToken.number!;
                customSession.user.role = customToken.role;
                customSession.user.loggedBank = customToken.loggedBank!
                
                return customSession;
            }
            return session;
        }
    },
    pages:{
        signIn:''
    }
  }
 