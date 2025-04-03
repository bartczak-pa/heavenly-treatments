import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
    const { name, message } = await request.json();

    const msg = {
        from: process.env.FROM_EMAIL!, // Sender's email address
        to: 'bartczak.pa@gmail.com', // Your email address
        subject: `Contact Form Submission from ${name}`,
        html: `<strong>${message}</strong>`,
    };

    try {
        await resend.emails.send(msg);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Failed to send email' });
    }
}