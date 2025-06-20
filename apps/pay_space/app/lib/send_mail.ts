import { Transporter } from 'nodemailer';
import { getOTPEmailTemplate } from './email_template';

export interface sendingFormat{
    receiverEmail:string,
    transporter:Transporter,
    otp:string,
    username:string
}

export async function sendMail({receiverEmail,transporter,otp,username}:sendingFormat){
    const { subject, html, text } = getOTPEmailTemplate(otp, username);

    const sentMail=await transporter.sendMail({
        from:process.env.APP_EMAIL_email,
        to:receiverEmail,
        subject:subject,
        html:html,
        text:text
    })

    return sentMail;
}