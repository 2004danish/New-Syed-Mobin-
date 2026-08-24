import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, name, email, phone, message, role, portfolio } = body;

    // 1. Configure the SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let subject = '';
    let htmlContent = '';
    let targetEmail = '';

    // 2. Dynamically route the email based on the form submitted
    if (type === 'inquiry') {
      subject = `New Project Inquiry from ${name}`;
      targetEmail = process.env.EMAIL_INQUIRY as string;
      htmlContent = `
        <div style="font-family: sans-serif; max-w: 600px;">
          <h2 style="color: #000; border-bottom: 1px solid #ccc; padding-bottom: 10px;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 3px solid #000;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
    } else if (type === 'career') {
      subject = `Career Application: ${name} - ${role}`;
      targetEmail = process.env.EMAIL_CAREERS as string;
      htmlContent = `
        <div style="font-family: sans-serif; max-w: 600px;">
          <h2 style="color: #000; border-bottom: 1px solid #ccc; padding-bottom: 10px;">New Career Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Desired Role:</strong> ${role}</p>
          <p><strong>Portfolio:</strong> <a href="${portfolio}">${portfolio}</a></p>
          <p><strong>Cover Letter:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 3px solid #000;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
    }

    // 3. Send the email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // Sent via your authenticated server
      replyTo: email, // If you click "reply" in your inbox, it goes to the user
      to: targetEmail, // Routes to either sma.hello.ngp@gmail.com or sma.jobs.ngp@gmail.com
      subject: subject,
      html: htmlContent,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}