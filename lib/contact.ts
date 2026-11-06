/** Shared contact-form validation — used by both the client form and the API route. */
export type ContactPayload = {
  name: string;
  email: string;
  inquiry: string;
  company: string;
  budget: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(data: Partial<ContactPayload>): ContactErrors {
  const errors: ContactErrors = {};
  if (!data.name?.trim()) errors.name = "Please enter your name";
  if (!data.email?.trim()) errors.email = "Please enter your email";
  else if (!EMAIL_RE.test(data.email.trim())) errors.email = "Please enter a valid email";
  if (!data.message?.trim() || data.message.trim().length < 10)
    errors.message = "Tell me a little more (at least 10 characters)";
  return errors;
}
