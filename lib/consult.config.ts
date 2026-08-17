/* ============================================================================
   CONSULT FUNNEL — CLIENT CONFIG: Mollura Medical Hair Restoration

   THIS IS THE ONLY FILE IN THE CONSULT SURFACE THAT DIFFERS PER CLIENT.
   lib/consult.ts, the three API routes, ConsultFunnel, Wordmark, GaTag,
   BookingSummary, both pages and consult.css are byte-identical across every
   repo on the fleet. If you are about to edit one of those for this client,
   the value belongs here instead.

   Every fact below was read from a live system on 2026-08-17, not typed from a
   document. Provenance is on each line. HARD, paid for on RHRLI: a GHL location
   record can be WRONG — its address said Jericho when the practice is in
   Woodbury — so where the practice's own schema.org markup disagrees with GHL,
   schema.org wins.

   NOTE FOR THIS CLIENT:
   The canonical 60min consult pair did NOT exist on this sub-account and was CREATED on 2026-08-17 at Joe's direction, mirroring this practice's OWN published days and hours from their existing 'Consultation Request' / 'Virtual Consultation' calendars — only the name and the duration changed. Both verified returning live 60min slots. The original 30min calendars were left untouched and still exist; nothing that already books on them was changed.
   ========================================================================== */

export const CONSULT = {
  clientId: 'mollura',
  practice: 'Mollura Medical Hair Restoration',

  /* GoHighLevel sub-account. The container must carry GHL_PIT_ZKBx0w3cto7qSpBiUtt7
     or every booking call 500s while the page still renders. */
  locationId: 'ZKBx0w3cto7qSpBiUtt7',
  timezone: 'America/New_York',

  /* Verified live on 2026-08-17 by reading this sub-account's /calendars/ and
     confirming both return free slots. These already existed; nothing was
     created in the client's account. */
  calendars: {
    'in-person': 'usY9WLyDqBMGdbDOZHyx',
    virtual: 'Oe87pWCX7MPukHz6AztP',
  },

  /* Read from the calendar's own slotDuration — never asserted. Saying "one
     hour" over a calendar that books 30 minutes is a promise the system of
     record does not keep. */
  durationMinutes: 60,
  durationLabel: '60 minutes',

  address: '393 Franklin Avenue, Suite 105',
  city: 'Franklin Square, NY 11010',
  officeShort: 'Franklin Square',
  inPersonWhere: 'At the Franklin Square office, 393 Franklin Avenue, Suite 105.',
  openDays: 'Times shown are the practice’s published availability',
  hoursLine: 'Only times the practice has actually published are shown.',

  /* DNI pool default. DniSwap rewrites ONLY the digits it owns, so this must be
     the app's DEFAULT_DIGITS — putting the practice's static GHL line here
     instead means the swap never fires and every call arrives unattributed. */
  phoneDisplay: '(516) 354-3876',
  phoneRaw: '+15163543876',
  phonePlaceholder: '(516) 555-0142',

  siteUrl: 'https://mollurahairtransplant.com',
  privacyUrl: '/privacy-policy',
  cookieUrl: '/cookie-policy',
  /* null means NO REACHABLE TERMS PAGE for this practice. The consent notice
     omits the Terms clause rather than linking to a 404, and the footer omits
     the link. A terms page on this subdomain is wanted before ads point here. */
  termsUrl: 'https://mollurahairtransplant.com/terms-of-service/',
  /* null means the feed could not be read. The confirmation page renders no
     "while you wait" section at all rather than inventing one. */
  postsApi: 'https://mollurahairtransplant.com/wp-json/wp/v2/posts?per_page=3&_fields=id,link,date,title',

  headline: 'Book your consultation.',
  subhead: '60 minutes with Mollura Medical Hair Restoration, in person in Franklin Square or by video. Choose a time below and it is confirmed on the practice calendar straight away.',
  metaDescription: 'Book a 60 minutes consultation with Mollura Medical Hair Restoration. In person in Franklin Square or by video.',

  /* EMPTY BY DESIGN, awaiting the practice's own photographs.
     No before/after and no identifiable patient — before/after imagery is a
     Meta Account Quality suspension risk across this whole fleet. A stock photo
     of a clinic that is not theirs is a misrepresentation, and a sibling
     client's photo is worse. An empty array renders no photo block at all.
     Add as: ['file-basename', 'alt text'] with the file at public/consult/. */
  photos: [] as [string, string][],

  wordmarkSrc: '/logo-mollura.png',
  wordmarkText: null as string | null,

  /* NO browser analytics or advertising tag on this page. This is not a
     preference: the page collects a Norwood/Ludwig selection and prior-procedure
     answer, which is health-intent input in a form, and H-26 / §6 failure mode 7
     make a tag here non-waivable at the skill layer. Server-side delivery does
     not launder it (H-32). Set this ONLY on Joe's explicit, recorded direction
     for this specific client — RHRLI's is the only such override on the fleet. */
  ga4Id: null as string | null,

  consentVersion: '2026-08-17-v1',
} as const

/* Attribution write-through to the CRM.

   HARD (H-41): match on fieldKey, never on the display name. Names drift per
   sub-account while fieldKey stays byte-identical; matching on names is what
   made 11 of 28 custom values unreachable across the whole fleet.

   SEEDED FROM THE LIVE API on 2026-08-17, after this sub-account's token was given
   locations/customFields.readonly. 46 fields were read and matched by
   fieldKey. Regenerate from the API if the sub-account changes; never retype it and
   never copy another client's map.

   writeCustomFields() therefore returns {written: 0, reason} — a reported
   no-op, never a silent one. The click id is still captured on the page and
   still posted to /api/consult/book; it just cannot be written onto the contact
   record until the PIT gains the scope. RHRLI's PIT already has it, which is
   the proof this is a per-token gap and not a platform limit.

   TO FIX: mint a PIT for this sub-account with locations/customFields readonly,
   then regenerate this map FROM THE API — never by copying RHRLI's. */
export const CONSULT_FIELD_MAP: Record<string, string> = {
  /* This field did NOT exist on this sub-account and was CREATED in the RootLogic UI
     on 2026-08-17 (Joe's direction): name 'Gclid-Of', Single line, on the Contact
     object, in the Contact folder — replicated field-for-field from a client that
     already had a working one, then verified by API to resolve to contact.gclidof. */
  gclid: 'contact.gclidof',
  utm_source: 'contact.utm_source',
  utm_medium: 'contact.utm_medium',
  utm_campaign: 'contact.utm_campaign',
  utm_term: 'contact.utm_term',
  utm_content: 'contact.utm_content',

  /* NOT MAPPED, because no field with these keys exists on this sub-account:
     wbraid, gbraid, keyword, matchtype, fbclid, msclkid, campaignid, adgroupid.
     Captured on the page and dropped at the CRM boundary rather than written to a
     guessed key — a PUT with an unresolvable fieldKey returns 200 and silently
     discards the value, which reads as working (H-41). */
}
