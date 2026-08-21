import React, { useState } from 'react';
import { FORM_ENDPOINTS, submitForm, SubmitResult } from '../constants/forms.ts';

/** Footer auction-alerts signup. Appears on every page. */
const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setPending(true);
    const outcome = await submitForm(FORM_ENDPOINTS.newsletter, {
      email,
      _subject: 'Auction alerts signup - pumphouseauctions.co.uk',
      _gotcha: honeypot,
    });
    setResult(outcome);
    setPending(false);
    if (outcome.status === 'sent') setEmail('');
  };

  if (result?.status === 'sent') {
    return (
      <p className="border-l-2 border-pumphouse-gold pl-5 py-2 text-[14px] text-gray-300 font-light max-w-xl">
        Thank you — you are subscribed to our auction alerts.
      </p>
    );
  }

  return (
    <>
      <form className="relative group max-w-xl" onSubmit={handleSubmit} noValidate>
        <label htmlFor="footer-email" className="sr-only">Email address</label>
        <input
          id="footer-email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          placeholder="Enter your email"
          aria-invalid={!!error}
          aria-describedby={error ? 'footer-email-error' : undefined}
          className={`w-full bg-transparent border-b py-4 pr-28 text-sm outline-none transition-all placeholder:text-gray-600 font-light ${
            error ? 'border-red-400 focus:border-red-500' : 'border-gray-700 focus:border-pumphouse-gold'
          }`}
        />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
        <button
          type="submit"
          disabled={pending}
          className="absolute right-0 bottom-4 text-[11px] uppercase tracking-[0.3em] font-bold text-pumphouse-gold hover:text-white transition-colors disabled:opacity-60"
        >
          {pending ? 'Sending…' : 'Subscribe'}
        </button>
      </form>

      <div aria-live="polite">
        {error && (
          <p id="footer-email-error" className="mt-3 text-[12px] text-red-400 font-light">{error}</p>
        )}
        {result?.status === 'error' && (
          <p className="mt-3 text-[12px] text-red-400 font-light">{result.message}</p>
        )}
      </div>
    </>
  );
};

export default NewsletterForm;
