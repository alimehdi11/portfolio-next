import { validateContact, type ContactPayload } from "@/lib/contact";

const MAX_LEN = 5000;

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Normalise + cap field lengths
  const data = Object.fromEntries(
    (["name", "email", "inquiry", "company", "budget", "message"] as const).map((k) => [
      k,
      String(body[k] ?? "").slice(0, MAX_LEN).trim(),
    ]),
  ) as ContactPayload;

  const errors = validateContact(data);
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  // TODO: deliver the message — e.g. send an email with Resend / Nodemailer,
  // or save it to MongoDB. Until then it is only logged on the server.
  console.log("[contact] new message", { ...data, receivedAt: new Date().toISOString() });

  return Response.json({ ok: true });
}
