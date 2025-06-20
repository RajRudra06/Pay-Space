import nodemailer from 'nodemailer';

export const transporter=nodemailer.createTransport(
    {
        service:"gmail",
        secure:true,
        port:465,
        auth:{
            user:process.env.APP_EMAIL_email as string,
            pass:process.env.APP_EMAIL_PASS as string
        }
    }
);


