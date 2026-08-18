import React from 'react';
import LegalPage from '../components/LegalPage.tsx';

// Ported verbatim from pumphouseauctions.co.uk/terms-conditions/.
// On the live site clauses 1-24 are run together inside a single paragraph;
// they are split out here for legibility. The wording is unchanged.
const VENDOR_CLAUSES: { n: number; title?: string; body: string }[] = [
  {
    n: 1,
    title: 'Confirmation of ownership',
    body: 'The vendor confirms that they are the true owner of the property being offered for sale, and that they are not liable to any third party in respect of said goods. The vendor must also confirm that he is willing to accept any liability in respect of this clause being broken.',
  },
  {
    n: 2,
    title: 'Entry form',
    body: 'No lot will be accepted unless an entry form has been completed. Entries accepted does not guarantee space in the subsequent auction, all lots are subject to Auctioneers discretion. PHSA reserve the right to refuse any item deemed unsalable or unfit for purpose.',
  },
  {
    n: 3,
    title: 'Reserves',
    body: 'The vendor is free to place prior to auction a figure at which they are not willing to sell for less, this constitutes the reserve (We are always willing to assist potential vendors in finding the right reserve for their item(s) PHSA, shall not change this figure without the express consent of the vendor. No reserves below £40 will be accepted for entry to our general sale. All goods accepted without reserve unless discussed and agreed with Auctioneer prior to sale. All reserves are subject to 10% discretion. No reserves will be accepted for any lots entered into our general sale.',
  },
  {
    n: 4,
    title: 'Lotting',
    body: 'The Auctioneer reserves the right to withdraw from sale any of the items listed or to sell at this auction items not listed, and also reserves the right to group one or more lots into one or more selling lots or to subdivide into two or more selling lots. Whenever the best interest of the seller will be served, the auctioneer reserves the right to sell all of the items listed in bulk.',
  },
  {
    n: 5,
    title: 'Fees',
    body: 'Commission rate of 17.5% + VAT applied to all lots upon sale.',
  },
  {
    n: 6,
    title: 'Lotting Fee',
    body: 'All lots entered to our general sale are subject to £5 + VAT lotting fee per lot. All lots entered into our Fine art Sale will be subject to a lotting fee of £5 + VAT. To which sale the items will be sold in will be decided by and only by Pump House Specialist Auctions.',
  },
  {
    n: 7,
    title: 'Indemnity',
    body: 'All items are insured whilst in the care of PHSA at a rate of 2.5% + VAT deducted from net sale. PHSA will not be responsible for accidental breakage, loss or damage caused unless by the negligence of their employees. In the event of an unsold lot indemnity will be charged at the lower estimate.',
  },
  {
    n: 8,
    title: 'PAT Testing',
    body: 'All electrical items will be subject to a PAT testing charge at the rate of £3 + VAT per item as this is required by law in order for PHSA to be able to sell safe electrical goods.',
  },
  {
    n: 9,
    title: 'Returned items',
    body: 'PHSA is free to rescind any sale in respect of the vendor, if the item is returned by the buyer if the claim is justified. PHSA are authorised to refund buyer in full and reclaim net proceeds from vendor if paid.',
  },
  {
    n: 10,
    title: 'Description',
    body: 'PHSA have the sole right as to the description of any article offered to sale and to its grouping with any other belonging to the vendor. Any representation or statement made by PHSA either orally by any of their employees or printed in any catalogue, valuation, brochure, or advertisement concerning authorship, attribution, genuineness, origin date, provenance, condition or value is a statement of opinion only and is not to be taken as being, or implying, any warranty or representation of fact by PHSA.',
  },
  {
    n: 11,
    title: 'Withdrawal of lots',
    body: 'the vendor is entitled to withdraw any lot(s) prior to advertisement and sale. Pump House Specialist Auctions reserve the right to charge a 15% +VAT withdrawal fee based on the mid estimate figure. This withdrawal fee is to be paid in advance of collection of withdrawn lots. The lotting fee and insurance fee will still apply to withdrawn lots.',
  },
  {
    n: 12,
    title: 'Sale by private treaty',
    body: 'In the event of a lot remaining unsold PHSA are authorised to sell after auction at low estimate (or reserve price) with 10% discretion unless re offered in another sale, all terms and commissions apply.',
  },
  {
    n: 13,
    title: 'Unsold Lots',
    body: 'Unsold lots may be re offered at auction in next sale, with no reserve, unless the vendor has mutually agreed reserve/estimate with Auctioneer. If the items has been unsold twice and not collected Pump House Specialist Auctions will dispose the items and a charge will be applied to the vendor account.',
  },
  {
    n: 14,
    title: 'Collection or disposal of unsold lots',
    body: 'The vendor must collect unsold item promptly after sale once contacted by PHSA, or may incur a disposal charge/storage charge. Storage charges are currently set at £10 per day, per item, this charge starts 4 days after the sale date.',
  },
  {
    n: 15,
    title: 'Authority to deduct commission and relevant charges',
    body: 'the vendor agrees and authorises PHSA to deduct commission rate and relevant expenses directly from hammer price and acknowledges PHSA to retain premium paid by buyer on purchase.',
  },
  {
    n: 16,
    title: 'Photography',
    body: 'no charge will be incurred for photography, the vendor authorises PHSA to photograph items and use in catalogues, advertisements, and promotional literature, which may be used at any time before or after sale. In the event of PHSA advertising lots and the item then withdrawn from sale PHSA has the right to deduct payment for advertising or directly forward cost onto client.',
  },
  {
    n: 17,
    title: 'Third Party Liability',
    body: 'Any person attending an auction conducted by PHSA or visiting the premises, of the auctioneers affirms that he/she is there at his/her own risk and shall have no claim against PHSA in respect of any accident, injury, loss or damage unless caused by the negligence of PHSA employees. PHSA reserve the right to charge for damage caused by visitors or their pets to the premises.',
  },
  {
    n: 18,
    title: 'Payment of sale proceeds',
    body: 'PHSA will pay Vendors 28 working days after the close of the auction, except in the case of invoices not being paid, any outstanding invoices will be settled up to a maximum of 60 days at which point, the sale is nullified. If PHSA shall pay out the vendor on an item which has not been paid for after 60 days, ownership of said item will transfer to PHSA. Payment will be made once all lot(s) have been sold by Bank Transfer. Bank details will only be used by PHSA and remain confidential.',
  },
  {
    n: 19,
    title: 'Collection/delivery',
    body: 'Any collection or delivery fee becomes payable at the time of booking. In the event of client cancellations PHSA reserves the right to invoice the collection/delivery fee in full. To avoid payment of related fees 48 hours notice is required for cancellation. Our current delivery/collection charge is set at £100 plus VAT per hour',
  },
  {
    n: 20,
    title: 'Uncollected item(s)',
    body: 'In the circumstances where PHSA request a vendor’s unsold item(s) to be collected. Item(s) that remain uncollected in the specified time may be subject to a storage charge of a minimum £10.00 per day. PHSA Ltd reserve the right to dispose or remove uncollected item(s) from the premises. PHSA will not be held accountable of items lost/damage after arranged date. Storage fees begin after 4 working days from sale date. If PHSA disposes of items after sale we will automatically charge the account',
  },
  {
    n: 21,
    body: 'We reserve the right to charge any costs relating to late payments and pursue outstanding payments and breaches our terms and conditions. These costs may be deducted from final payments.',
  },
  {
    n: 22,
    title: 'GDPR',
    body: 'by completing and signing this form, the vendor agrees to PHSA retaining the personal information noted on the front of this form. The vendor understands that this information will be retained by PHSA until or unless the vendor requests that it is deleted from their system. Please see our website for our GDPR Privacy Notice.',
  },
  {
    n: 23,
    title: 'Personal details',
    body: 'PHSA accepts no responsibility for errors in personal and bank details noted on the front of this form which must be completed in block capitals by the vendor.',
  },
  {
    n: 24,
    body: 'PHSA reserves the right to authenticate, research and hold any items which requires further information before sale, PHSA will forward any incurred charges for these checks onto the vendors account and deduct from sale proceeds before settlement.',
  },
];

const BUYER_CLAUSES: string[] = [
  'PHSA reserves the right to refuse any bid without reason, any bid received after 9am on sale day may not be applied to the auction.',
  'PLEASE NOTE: All bidders at Pump House Specialist Auctions Ltd acknowledge that they have read these terms and conditions of sale and agree to be bound Thereby. If you do not understand any of these terms or conditions, please ask a staff member for clarification before registering.',
  'Identification – All purchasers are required to have a Bidder’s Number to bid and shall supply Pump House Specialist Auctions Ltd with their full name, address and telephone number. All bidders must register or be registered before sale and bid is placed. The bidder may be required to pay 50p in the £1 or more, in part payment of the purchase money, in default of which the lot or lots purchased, may be immediately put up again and re sold.',
  'The auctioneer has the right at his absolute discretion to refuse any bid. The highest bidder shall be the buyer at the hammer price. All condition reports are to be considered “a valuers opinion” and should not be considered fact or relied upon. Condition reports are only provided by email. Conversations regarding the condition of forth coming Lots via phone or at our premises are not to be considered a condition report.',
  'Pump House Specialist Auctions Ltd acting as agents, reserve the right to withdraw any lot or lots from the sale without giving reasons. The lots to be taken away at the buyers risk and expense, not later than 3 days from the close of the auction, in default of which Pump House Specialist Auctions Ltd will not hold themselves responsible if the same lots are stolen, damaged or otherwise destroyed, but they will be left at the sole risk of the purchaser and subject to a charge for warehousing. If at the expiration of 2 days after the conclusion of the sale unless otherwise agreed the lots are not cleared or paid for they may be sold immediately either publicly or by private treaty, without notice being given to the defaulters.',
  'Upon failure of the buyer to comply with any of the above conditions, the money deposited in part-payment shall be forfeited and the defaulter at the sale shall make good any loss arising from the pre-sale, together with the charges and expenses in respect of both sales. All lots are put for sale subject a) to any reserve price imposed by the seller and b) to the right of the seller to bid either personally or else by any one person who may be the auctioneer',
  'Dispute between bidders – If any dispute arises between two or more bidders, the auctioneer may decide the same or may immediately put the lot up for sale again, and resell to the highest bidder. The decision of the auctioneer shall be final and absolute.',
  'Condition of items sold – The auctioneer shall not be responsible for the correct description, authenticity, genuineness of, estimated selling price of, or defect in any lot, and makes no warranty in connection therewith. No allowance will be made or sale set aside on account of any incorrectness, error in cataloguing, or any imperfection not noted. No deduction will be allowed on damaged articles as all goods being exposed for public exhibition are sold “as seen” and without recourse',
  'Description – care is taken to ensure that any statement as to the authorship, attribution, origin, date, age, provenance and condition is reliable and accurate, but all such statements are statements of opinion and are not to be taken as statements or representation of fact. The auctioneers reserve the right in forming their opinion to consult and rely upon any expert or authority reasonably considered by them to be reliable. it is the buyers responsibility to satisfy themselves before purchase of any lot, no refunds will be given once an items has left the premises.',
  'Manner of payment – All lots are to be paid in full by cash, MasterCard, Visa, or Debit Card (onsite only) within 3 days of the auction. PHSA does not accept cheque.',
  'All purchased lots must be collected and paid within 5 days of the sale, all uncollected lots after 5 days will be left at the sole risk of the purchaser and subject to a charge for warehousing at a cost of £10 per lot per day.',
];

const TermsPage: React.FC = () => (
  <LegalPage
    eyebrow="Legal"
    title="Terms & Conditions"
    standfirst="The terms on which Pump House Specialist Auctions Limited (PHSA) accepts entries for sale and takes bids."
  >
    <h2>Vendors — Terms and Conditions</h2>

    <ol className="space-y-7 list-none pl-0">
      {VENDOR_CLAUSES.map((clause) => (
        <li key={clause.n} className="border-t border-pumphouse-taupe pt-6">
          {clause.title ? (
            <>
              <h3 className="flex gap-4">
                <span className="font-serif text-pumphouse-gold shrink-0">{clause.n}.</span>
                <span>{clause.title}</span>
              </h3>
              <p className="pl-9">{clause.body}</p>
            </>
          ) : (
            /* Clauses 21 and 24 carry no heading in the original wording. */
            <p className="flex gap-4">
              <span className="font-serif text-pumphouse-gold shrink-0">{clause.n}.</span>
              <span>{clause.body}</span>
            </p>
          )}
        </li>
      ))}
    </ol>

    <div className="mt-12 border border-pumphouse-taupe bg-pumphouse-bg p-8">
      <p className="!mb-4">
        These Terms and Conditions are subject to change and additional terms and conditions may be detailed on
        our website – which are binding once this document is signed.
      </p>
      <p className="!mb-4">
        <strong>Vendors commission is 17.5% + VAT</strong> – Indemnity 2.5% plus VAT – Lotting fee £5 per lot
        plus VAT (per sale even if unsold). PAT testing £3 per electrical item. All plus VAT.
      </p>
      <p className="!mb-0">
        Payment to be made by bank transfer within 28 days of all lots entered being sold. There will be a
        charge of £2.00 for a cheque. No charge for direct bank transfers.
      </p>
    </div>

    <h2>Buyers — Terms and Conditions</h2>

    <div className="space-y-5">
      {BUYER_CLAUSES.map((clause, i) => (
        <p key={i}>{clause}</p>
      ))}
    </div>

    <p className="mt-10 border-t border-pumphouse-taupe pt-8 !text-pumphouse-charcoal font-medium uppercase tracking-[0.15em] text-[13px]">
      All lots subject to buyers premium 22% + VAT
    </p>
  </LegalPage>
);

export default TermsPage;
