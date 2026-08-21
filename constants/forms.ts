// ---------------------------------------------------------------------------
// Form submission — Formspree
//
// Each form posts to its own endpoint so submissions land in separate
// Formspree inboxes and can be exported independently.
//
// Formspree conventions used here:
//   email     — Formspree uses this field as the reply-to address
//   _subject  — sets the notification email subject line
//   _gotcha   — honeypot; a bot filling it in gets the submission discarded
//
// Requests with attachments must be multipart/form-data (FormData); the
// browser sets the boundary, so Content-Type is deliberately not set.
// ---------------------------------------------------------------------------

export const FORM_ENDPOINTS = {
  /** Homepage "Get in Touch" section */
  getInTouch: 'https://formspree.io/f/mbgrwpap',
  /** /contact-us/ enquiry form */
  contact: 'https://formspree.io/f/xdenbplj',
  /** /free-valuation/ valuation request */
  valuation: 'https://formspree.io/f/xaewvldz',
  /** Footer newsletter signup, present on every page */
  newsletter: 'https://formspree.io/f/mzepokjb',
} as const;

export type SubmitResult =
  | { status: 'sent' }
  | { status: 'error'; message: string };

interface FormspreeError {
  field?: string;
  message?: string;
  code?: string;
}

// The UI appends phone and email beneath this, so don't repeat them here.
const GENERIC_ERROR = 'Sorry — we could not send your message. Please try again.';

export const submitForm = async (
  endpoint: string,
  fields: Record<string, string | undefined>,
  files: File[] = []
): Promise<SubmitResult> => {
  try {
    let response: Response;

    if (files.length > 0) {
      const body = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        if (value) body.append(key, value);
      });
      files.forEach((file) => body.append('photos', file));
      response = await fetch(endpoint, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      });
    } else {
      const body: Record<string, string> = {};
      Object.entries(fields).forEach(([key, value]) => {
        if (value) body[key] = value;
      });
      response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });
    }

    if (response.ok) return { status: 'sent' };

    const data = (await response.json().catch(() => null)) as { errors?: FormspreeError[] } | null;
    const detail = data?.errors?.map((e) => e.message).filter(Boolean).join(' ');
    return { status: 'error', message: detail || GENERIC_ERROR };
  } catch {
    // Network failure, offline, or the request was blocked.
    return { status: 'error', message: GENERIC_ERROR };
  }
};
