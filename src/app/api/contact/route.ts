import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, number, subject, massage } = await request.json();

        await resend.emails.send({
            from: 'The Attic Studio <onboarding@resend.dev>',
            to: 'theatticstudiodublin@gmail.com',
            subject: `New contact form message: ${subject}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${number || 'Not provided'}\n\nMessage:\n${massage}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}