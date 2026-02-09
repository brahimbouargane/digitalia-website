import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  projectTypes: string[];
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, phone, email, message, projectTypes } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Format project types
    const projectTypesText =
      projectTypes.length > 0
        ? projectTypes.join(", ")
        : "Not specified";

    // Email HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #0040c1; padding: 40px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">New Contact Request</h1>
                      <p style="margin: 10px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">From Digitalia Website</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <!-- Project Types -->
                      <div style="margin-bottom: 30px;">
                        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Project Type</p>
                        <p style="margin: 0; font-size: 16px; color: #0040c1; font-weight: 600;">${projectTypesText}</p>
                      </div>

                      <!-- Contact Info Grid -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td width="50%" style="padding-right: 15px; vertical-align: top;">
                            <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Name</p>
                            <p style="margin: 0; font-size: 16px; color: #111827;">${name}</p>
                          </td>
                          <td width="50%" style="padding-left: 15px; vertical-align: top;">
                            <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Phone</p>
                            <p style="margin: 0; font-size: 16px; color: #111827;">${phone}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Email -->
                      <div style="margin-bottom: 30px;">
                        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Email</p>
                        <p style="margin: 0; font-size: 16px; color: #111827;">
                          <a href="mailto:${email}" style="color: #0040c1; text-decoration: none;">${email}</a>
                        </p>
                      </div>

                      <!-- Message -->
                      <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                        <p style="margin: 0 0 12px; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                        <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; font-size: 13px; color: #6b7280;">
                        This email was sent from the contact form at <a href="https://digitalia.agency" style="color: #0040c1; text-decoration: none;">digitalia.agency</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Plain text version
    const textContent = `
New Contact Form Submission
===========================

Project Type: ${projectTypesText}

Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}

---
This email was sent from the contact form at digitalia.agency
    `;

    // Send email
    await transporter.sendMail({
      from: `"Digitalia Website" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
