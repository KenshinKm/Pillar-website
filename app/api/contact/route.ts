import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "kenshin@pillarwebagency.com";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "Email service is not configured." }, { status: 500 });
  }

  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "PILLAR Website <onboarding@resend.dev>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `New project inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message || "(no message provided)"}`,
  });

  if (error) {
    return Response.json({ error: "Failed to send email." }, { status: 502 });
  }

  return Response.json({ success: true });
}
