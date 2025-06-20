import prisma from "@repo/db/prisma";
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

export const authOptions:AuthOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "text", placeholder: "payspace368@abc.com" },
            password: { label: "Password", type: "password" }
          },

          async authorize(credentials:any) {
            try{
                const validationResult = loginSchema.safeParse(credentials);

                if(!validationResult.success){
                    return null;
                }

                const existingUser = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                
                if(!existingUser){  
                    throw new Error("UserNotFound")
                }

                if(!existingUser.isVerified){
                    throw new Error("NotVerified")
                }

                const passwordValidation=await bcrypt.compare(credentials.password, existingUser.password)

                if(passwordValidation){
                    return {
                        id: existingUser.id.toString(), 
                        username: existingUser.username,   
                        email: existingUser.email,      
                        number: existingUser.number     
                      };
                      
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
                
                return customSession;
            }
            return session;
        }
    },
    pages:{
        signIn:''
    }
  }
 