import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
    const { firstName, lastName, email, phone, selectedTreatments, preferredDate, preferredTime, message } = await request.json();

    const msg = {
        from: process.env.EMAIL!, // Sender email address
        to: process.env.SENDER_EMAIL!, // Email address to receive notifications
        subject: `Contact Form Submission from ${firstName} ${lastName}`,
        text: `
            Name: ${firstName} ${lastName}
            Email: ${email}
            Phone: ${phone}
            Treatments Interested In: ${selectedTreatments.join(', ')}
            Preferred Date: ${preferredDate}
            Preferred Time: ${preferredTime}
            Message: ${message}
        `,
        html: `
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Treatments Interested In:</strong> ${selectedTreatments.join(', ')}</p>
            <p><strong>Preferred Date:</strong> ${preferredDate}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    try {
        await resend.emails.send(msg);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: 'Failed to send email' });
    }
}