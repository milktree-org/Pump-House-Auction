import React, { useState } from 'react';
import { CONTACT } from '../constants/site.ts';
import { submitEnquiry, SubmitResult } from '../constants/forms.ts';
import Button from './Button.tsx';

interface EnquiryFormProps {
  /** Adds the "Interested in" department select. */
  showInterest?: boolean;
  /** Adds the image upload area for valuation requests. */
  showUpload?: boolean;
  submitLabel?: string;
  idPrefix?: string;
}

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>;

const INTERESTS = [
  'Fine Art & Paintings',
  'Jewellery & Watches',
  'Antiques & Furniture',
  'Silver, Coins & Collectables',
  'Probate Valuation',
  'House Clearance',
];

const EnquiryForm: React.FC<EnquiryFormProps> = ({
  showInterest = false,
  showUpload = false,
  submitLabel = 'Send Message',
  idPrefix = 'enquiry',
}) => {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '', interest: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);

  const set = (field: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email address.';
    if (!values.phone.trim()) next.phone = 'Please enter a contact number.';
    if (!values.message.trim()) next.message = 'Please tell us how we can help.';
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(`${idPrefix}-${Object.keys(found)[0]}`);
      first?.focus();
      return;
    }
    setPending(true);
    setResult(await submitEnquiry({ ...values, files }));
    setPending(false);
  };

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)].slice(0, 8));
  };

  const fieldClass = (invalid?: string) =>
    `w-full bg-transparent border-b py-3 outline-none transition-colors placeholder:text-gray-300 font-light ${
      invalid ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-pumphouse-gold'
    }`;

  const labelClass = 'block text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2';

  const errorFor = (field: keyof Errors) =>
    errors[field] ? (
      <p id={`${idPrefix}-${field}-error`} className="mt-2 text-[12px] text-red-500 font-light">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form className="space-y-10" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-name`}>Name *</label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            value={values.name}
            onChange={set('name')}
            placeholder="Full Name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
            className={fieldClass(errors.name)}
          />
          {errorFor('name')}
        </div>

        <div>
          <label className={labelClass} htmlFor={`${idPrefix}-email`}>Email *</label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            value={values.email}
            onChange={set('email')}
            placeholder="Email Address"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
            className={fieldClass(errors.email)}
          />
          {errorFor('email')}
        </div>

        <div className={showInterest ? '' : 'md:col-span-2'}>
          <label className={labelClass} htmlFor={`${idPrefix}-phone`}>Contact No *</label>
          <input
            id={`${idPrefix}-phone`}
            type="tel"
            value={values.phone}
            onChange={set('phone')}
            placeholder="Phone Number"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
            className={fieldClass(errors.phone)}
          />
          {errorFor('phone')}
        </div>

        {showInterest && (
          <div>
            <label className={labelClass} htmlFor={`${idPrefix}-interest`}>Interested in</label>
            <div className="relative">
              <select
                id={`${idPrefix}-interest`}
                value={values.interest}
                onChange={set('interest')}
                className={`${fieldClass()} appearance-none cursor-pointer text-pumphouse-charcoal`}
              >
                <option value="">Select a department</option>
                {INTERESTS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <div className="absolute right-0 bottom-3 pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        )}

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor={`${idPrefix}-message`}>Message *</label>
          <textarea
            id={`${idPrefix}-message`}
            rows={4}
            value={values.message}
            onChange={set('message')}
            placeholder="How can we assist you?"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? `${idPrefix}-message-error` : undefined}
            className={`${fieldClass(errors.message)} resize-none`}
          />
          {errorFor('message')}
        </div>
      </div>

      {showUpload && (
        <div className="pt-2">
          <label className={`${labelClass} mb-4`} htmlFor={`${idPrefix}-files`}>
            Upload pictures for valuation
          </label>
          <div
            onDragEnter={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={(e) => { e.preventDefault(); setDragActive(false); }}
            onDrop={(e) => { e.preventDefault(); setDragActive(false); addFiles(e.dataTransfer.files); }}
            className={`w-full border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center py-12 px-6 ${
              dragActive ? 'border-pumphouse-gold bg-pumphouse-bg' : 'border-gray-200 bg-[#FAFAFA]'
            }`}
          >
            <svg className="w-8 h-8 text-pumphouse-gold/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-[12px] text-gray-500 uppercase tracking-widest font-medium mb-1">
              Drag and drop images here
            </p>
            <p className="text-[10px] text-gray-400">Supporting JPG and PNG, up to 10MB each</p>
            <input
              id={`${idPrefix}-files`}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => addFiles(e.target.files)}
              className="sr-only"
            />
            <label
              htmlFor={`${idPrefix}-files`}
              className="mt-6 cursor-pointer text-[11px] uppercase tracking-[0.2em] font-bold text-pumphouse-charcoal border-b border-pumphouse-charcoal pb-1 hover:text-pumphouse-gold hover:border-pumphouse-gold transition-all"
            >
              Or select files
            </label>
          </div>

          {files.length > 0 && (
            <ul className="mt-5 space-y-2">
              {files.map((file, i) => (
                <li key={`${file.name}-${i}`} className="flex items-center justify-between text-[12px] text-gray-500 border-b border-gray-100 pb-2">
                  <span className="truncate pr-4">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => setFiles((prev) => prev.filter((_, index) => index !== i))}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-red-500 transition-colors shrink-0"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="pt-4 flex flex-col gap-6">
        <Button type="submit" disabled={pending} variant="primary" className="self-start">
          {pending ? 'Sending…' : submitLabel}
        </Button>

        <div aria-live="polite">
          {result?.status === 'sent' && (
            <p className="text-[14px] text-pumphouse-charcoal font-light">
              Thank you — your enquiry has been sent. We will be in touch shortly.
            </p>
          )}
          {result?.status === 'unconfigured' && (
            <div className="border-l-2 border-pumphouse-gold pl-5 py-1 text-[14px] font-light text-[#666] max-w-xl">
              <p className="text-pumphouse-charcoal font-medium mb-1">This form is not connected yet.</p>
              <p>
                Please call{' '}
                <a href={CONTACT.phoneHref} className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
                  {CONTACT.phone}
                </a>{' '}
                or email{' '}
                <a href={CONTACT.emailHref} className="text-pumphouse-charcoal border-b border-pumphouse-gold hover:text-pumphouse-gold transition-colors">
                  {CONTACT.email}
                </a>{' '}
                and we will respond right away.
              </p>
            </div>
          )}
          {result?.status === 'error' && (
            <p className="text-[14px] text-red-500 font-light">{result.message}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default EnquiryForm;
