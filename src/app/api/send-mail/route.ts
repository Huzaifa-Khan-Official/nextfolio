import { sendEmail } from "@/lib/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();
        await sendEmail({ name, email, subject, message });
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error("Error in sendMail route", error);
        return NextResponse.json({ error: 'An error occurred while sending the email.' }, { status: 500 })
    }
}