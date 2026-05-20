import { NextResponse } from "next/server";
import { ContactFormSchema } from "@/app/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = ContactFormSchema.safeParse(body);

    if (!result.success) {
      if (body.website) {
        // Honeypot triggered - likely spam
        return NextResponse.json({ message: "Message sent!" }, { status: 200 });
      }
      return NextResponse.json({ error: "Invalid input data" }, { status: 422 });
    }

    const { name, email, subject, message } = result.data;

    // EmailJS configuration
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration missing");
      // Fallback: still return success for user experience
      return NextResponse.json(
        { message: "Thank you for your message. I'll be in touch soon!" },
        { status: 200 }
      );
    }

    // Send email using EmailJS
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: process.env.CONTACT_EMAIL || "futurestack59@gmail.com",
      },
    };

    const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!emailResponse.ok) {
      console.error("EmailJS error:", await emailResponse.text());
      // Still return success to user - don't expose internal errors
    }

    return NextResponse.json(
      { message: "Thank you for your message. I'll be in touch soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
