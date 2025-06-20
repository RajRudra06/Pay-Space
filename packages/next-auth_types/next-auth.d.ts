declare module "next-auth"{
    interface User{
        username:string,
        number:string
    }

    interface Session{
        user:{
            id:string,
            username:string,
            number: string;
            // @ts-ignore
        } & DefaultSession["user"]
    }
}