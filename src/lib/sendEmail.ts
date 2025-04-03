import nodemailer from "nodemailer";
import { profileData } from "../../constant";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: profileData.contact.email,
        pass: process.env.GMAIL_APP_PASSWORD
    }
})

interface messageData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const sendEmail = async ({ name, email, subject, message }: messageData) => {
    try {
        const emailTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #0ea5e9; color: white; padding: 10px; text-align: center; }
                .content { padding: 20px; }
                .joke { background-color: #f8f8f8; padding: 15px; border-left: 4px solid #0ea5e9; margin: 20px 0; }
                .footer { margin-top: 20px; font-size: 0.8em; text-align: center; color: #666; }
            </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                    <h2>New Contact Form Submission</h2>
                    </div>
                    
                    <div class="content">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong> ${message}</p>
                    </div>
                    
                    <div class="footer">
                    <p>This email was sent from your website's contact form.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        await transporter.sendMail({
            from: profileData.contact.email,
            to: profileData.contact.email,
            subject: `New Contact: ${subject}`,
            html: emailTemplate
        })
    } catch (error) {
        console.error(error)
        throw new Error("Failed to send email")
    }
}

export { sendEmail }