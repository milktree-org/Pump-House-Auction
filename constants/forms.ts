// ---------------------------------------------------------------------------
// FORM SUBMISSION — NOT YET CONNECTED
//
// The live site posts every enquiry into LeadConnector / GoHighLevel via
// embedded iframes on link.milktreeagency.com:
//
//   Contact / valuation   eHculIu8Wztxd6pjYhmU
//   Newsletter signup     CuqWYVKuAyAAct6TKyT1
//   Footer newsletter     3VOscSaYNB4CxFqZuqSb
//
// To go live, replace the body of submitEnquiry() with a POST to the
// LeadConnector form/webhook endpoint. Until then it deliberately reports
// "unconfigured" so the UI can tell people to call or email instead of
// silently swallowing an enquiry.
// ---------------------------------------------------------------------------

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  interest?: string;
  files?: File[];
}

export type SubmitResult =
  | { status: 'sent' }
  | { status: 'unconfigured' }
  | { status: 'error'; message: string };

export const submitEnquiry = async (_payload: EnquiryPayload): Promise<SubmitResult> => {
  // TODO: POST to the LeadConnector endpoint, then return { status: 'sent' }.
  return { status: 'unconfigured' };
};
