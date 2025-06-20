export const getOTPEmailTemplate = (otp: string, userName?: string) => {
    return {
      subject: 'Your Verification Code',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verification Code</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Verification Required</h1>
            </div>
            
            <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; text-align: center;">
              ${userName ? `<p style="font-size: 16px; margin-bottom: 20px;">Hi ${userName},</p>` : ''}
              <p style="font-size: 16px; margin-bottom: 30px;">Please use the following code to verify your account:</p>
              
              <div style="background: white; border: 2px dashed #667eea; border-radius: 10px; padding: 20px; margin: 30px 0;">
                <span style="font-size: 32px; font-weight: bold; color: #667eea; letter-spacing: 5px;">${otp}</span>
              </div>
              
              <p style="color: #666; font-size: 14px; margin-top: 30px;">
                This code will expire in 5 minutes for security reasons.
              </p>
              <p style="color: #666; font-size: 14px;">
                If you didn't request this code, please ignore this email.
              </p>
            </div>
          </body>
        </html>
      `,
      text: `
        ${userName ? `Hi ${userName},\n\n` : ''}Your verification code is: ${otp}
        
        This code will expire in 5 minutes.
        
        If you didn't request this code, please ignore this email.
      `
    };
  };