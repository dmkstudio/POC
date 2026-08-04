export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  locale: string;
  /** Hidden field — real people leave it empty, most bots fill it in. */
  company?: string;
};

export type FieldErrors = Partial<Record<'name' | 'email' | 'message', true>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export const LIMITS = {
  name: 120,
  email: 200,
  phone: 40,
  subject: 80,
  message: 4000
} as const;

/**
 * Shared by the browser and the API route, so a request can never pass on the
 * client and then fail silently on the server.
 */
export function validateContact(input: Partial<ContactPayload>): FieldErrors {
  const errors: FieldErrors = {};

  const name = (input.name ?? '').trim();
  const email = (input.email ?? '').trim();
  const message = (input.message ?? '').trim();

  if (name.length < 2 || name.length > LIMITS.name) errors.name = true;
  if (!EMAIL.test(email) || email.length > LIMITS.email) errors.email = true;
  if (message.length < 10 || message.length > LIMITS.message) errors.message = true;

  return errors;
}

export const hasErrors = (errors: FieldErrors) => Object.keys(errors).length > 0;
