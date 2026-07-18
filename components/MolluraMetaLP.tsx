'use client'
import { Suspense } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// Recreation of start.mollurahairtransplant.com/meta/ and /meta-retargeting/
// (paid-social consult LPs) on the fleet. Consult-first, Mollura brand tokens.
// NO Meta pixel on these pages — medical form pages, H-26; attribution rides
// server-side CAPI. fbclid/gclid/UTM passthrough via the shared GhlForm.
// Copy reproduced verbatim from source (medical wording intentionally not softened).

// ── BRAND TOKENS ─────────────────────────────────────────────────────────────
const TEAL_DARK = '#175566'   // primary CTA + dark bands
const TEAL = '#337b8f'
const TEAL_DEEP = '#125064'   // icon strokes
const PANEL = '#eef4f8'
const INK = '#1a1a1a'
const BODY = '#4a5560'
const WHITE = '#ffffff'
const SERIF = "'Judson', Georgia, 'Times New Roman', serif"
const SANS = "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
const POPPINS = "'Poppins', sans-serif"

const PHONE = '516-219-9738'
const PHONE_HREF = 'tel:5162199738'
const EMAIL = 'Hairsurg@mollurahairtransplant.com'
const ADDRESS = '393 Franklin Avenue Suite 105, Franklin Square, NY, 11010'
const LOGO = '/logo-mollura.png'

// ── SHARED PIECES ────────────────────────────────────────────────────────────

function Nav({ ctaLabel }: { ctaLabel: string }) {
  return (
    <header className="mol-mnav" style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 48px',
    }}>
      <img
        src={LOGO}
        alt="Mollura Medical Hair Restoration"
        className="mol-mnav-logo"
        style={{ height: 64, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
      />
      <div className="mol-mnav-btns" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <a href="#hero-form" className="mol-mnav-btn" style={{
          background: TEAL_DARK, color: WHITE, fontFamily: "'Roboto', sans-serif", fontWeight: 500,
          fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.04em', borderRadius: 62,
          padding: '13px 22px', textDecoration: 'none', whiteSpace: 'nowrap',
        }}>{ctaLabel}</a>
        <a href={PHONE_HREF} className="mol-mnav-btn" style={{
          background: 'transparent', color: WHITE, fontFamily: "'Roboto', sans-serif", fontWeight: 500,
          fontSize: 14, borderRadius: 62, padding: '13px 20px', textDecoration: 'none',
          whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,0.6)',
        }}>{PHONE}</a>
      </div>
    </header>
  )
}

function Check() {
  return (
    <span style={{
      flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 26, height: 26, background: TEAL_DARK, borderRadius: '50%',
    }}>
      <svg width="13" height="10" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L5 9L1 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function Arrow() {
  return (
    <span style={{ color: TEAL, fontWeight: 700, marginRight: 8, flexShrink: 0 }}>&#62;</span>
  )
}

function Footer() {
  return (
    <footer style={{ background: '#0f2028', color: 'rgba(255,255,255,0.7)', padding: '40px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 22 }}>
          <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, textDecoration: 'none' }}>Cookie Policy</a>
        </div>
        <p style={{ fontSize: 12, lineHeight: 1.7, margin: '0 0 16px', textAlign: 'center', maxWidth: 820, marginLeft: 'auto', marginRight: 'auto' }}>
          <strong style={{ color: '#fff' }}>Medical Disclaimer:</strong> This website provides general information
          about hair restoration procedures. It is not intended to be a substitute for professional medical advice,
          diagnosis, or treatment. Individual results may vary. Not all candidates are eligible for treatment. A
          medical consultation is required to determine candidacy.
        </p>
        <p style={{ fontSize: 12, margin: 0, textAlign: 'center' }}>&copy; 2026 Mollura Medical Hair Restoration. All rights reserved.</p>
      </div>
    </footer>
  )
}

function SectionHeading({ children, color = INK, align = 'center', max = 760 }: { children: React.ReactNode; color?: string; align?: 'center' | 'left'; max?: number }) {
  return (
    <h2 className="mol-m-h2" style={{
      fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 40px)', color,
      lineHeight: 1.18, margin: align === 'center' ? '0 auto 14px' : '0 0 14px',
      textAlign: align, maxWidth: max,
    }}>{children}</h2>
  )
}

function ctaBtn(label: string, href = '#hero-form', dark = false) {
  return (
    <a href={href} style={{
      display: 'inline-block', background: dark ? WHITE : TEAL_DARK, color: dark ? TEAL_DARK : WHITE,
      fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: 14, textTransform: 'uppercase',
      letterSpacing: '0.04em', borderRadius: 62, padding: '15px 30px', textDecoration: 'none', whiteSpace: 'nowrap',
    }}>{label}</a>
  )
}

// Simple card feature icons (source used custom line icons; brand-consistent line set)
const FeatureIcon = ({ path }: { path: React.ReactNode }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 12, background: PANEL, flexShrink: 0 }}>
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={TEAL_DEEP} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{path}</svg>
  </span>
)

// ═══════════════════════════════════════════════════════════════════════════
// META (cold) PAGE
// ═══════════════════════════════════════════════════════════════════════════
export default function MolluraMetaLP({ heroFormId, bottomFormId }: { heroFormId: string; bottomFormId: string }) {
  return (
    <div style={{ fontFamily: SANS, color: INK }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* ── HERO ── */}
      <section className="mol-m-hero" style={{ position: 'relative', overflow: 'hidden', background: TEAL_DARK }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="/hero-bg-room.png" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,32,40,0.82) 0%, rgba(15,32,40,0.88) 100%)' }} />
        </div>
        <Nav ctaLabel="Book a Consult" />
        <div className="mol-m-hero-inner two-col" style={{ position: 'relative', zIndex: 10, maxWidth: 1180, margin: '0 auto', padding: '150px 48px 72px', gap: 48, alignItems: 'center' }}>
          <div>
            <h1 className="mol-m-h1" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(32px, 4.2vw, 52px)', color: WHITE, lineHeight: 1.14, margin: '0 0 20px' }}>
              See If Hair Restoration Is Right For You&mdash;Before You Commit to Surgery
            </h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, margin: 0, maxWidth: 540 }}>
              A private, personalized consultation to evaluate your hair loss, treatment options, and expected results&mdash;guided by experienced medical professionals.
            </p>
          </div>
          <div id="hero-form" style={{ background: WHITE, borderRadius: 12, padding: '26px 24px 22px', boxShadow: '0 20px 50px rgba(0,0,0,0.35)' }}>
            <GhlForm formId={heroFormId} height={430} formName="Meta Hero - Mollura Consult" />
          </div>
        </div>
      </section>

      {/* ── SUB-CTA BAND ── */}
      <section style={{ background: WHITE, padding: '48px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 18, color: INK, margin: '0 0 22px' }}>
          Every treatment plan is customized&mdash;no templates, no shortcuts.
        </p>
        {ctaBtn('Book a Consult')}
      </section>

      {/* ── THIS IS NOT A SALES APPOINTMENT ── */}
      <section style={{ background: TEAL_DARK, padding: '64px 24px', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', color: 'rgba(255,255,255,0.85)', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>
          Medical Consultation
        </span>
        <SectionHeading color={WHITE}>This Is Not a Sales Appointment</SectionHeading>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', margin: '0 auto', maxWidth: 620, lineHeight: 1.65 }}>
          A comprehensive medical consultation focused on your health, eligibility, and long-term success.
        </p>
      </section>

      {/* ── 4 FEATURE CARDS ── */}
      <section style={{ background: WHITE, padding: '56px 24px' }}>
        <div className="two-col" style={{ maxWidth: 900, margin: '0 auto', gap: 24 }}>
          {[
            ['Medical Eligibility', "Determine whether you're medically eligible", <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M12 8v6M9 11h6" /></>],
            ['Review Options', 'Review surgical and non-surgical options', <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>],
            ['Realistic Outcomes', 'Understand realistic outcomes and timelines', <><path d="M4 18l5-5 3 3 7-8" /><path d="M4 4v16h16" /></>],
            ['Safety & Planning', 'Safety & Planning', <><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>],
          ].map(([t, d, icon]) => (
            <div key={t as string} style={{ display: 'flex', gap: 16, background: WHITE, border: '1px solid #e3ebf0', borderRadius: 12, padding: '22px 22px' }}>
              <FeatureIcon path={icon} />
              <div>
                <h3 style={{ fontFamily: POPPINS, fontSize: 18, fontWeight: 600, color: INK, margin: '0 0 5px' }}>{t}</h3>
                <p style={{ fontSize: 14, color: BODY, margin: 0, lineHeight: 1.55 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST STRIP (image cards) ── */}
      <section style={{ background: PANEL, padding: '56px 24px' }}>
        <div className="features-grid" style={{ maxWidth: 1180, margin: '0 auto', gap: 22 }}>
          {[
            ['/img/m/results-1.webp', 'Real procedures', 'Authentic hair restoration procedures performed by certified specialists'],
            ['/img/m/consult.webp', 'Personalized care', 'Tailored treatment plans designed specifically for your needs'],
            ['/img/m/results-2.webp', 'Real patients', 'See genuine results from our satisfied patients'],
            ['/img/m/results-3.webp', 'Performed in-clinic', 'Authentic hair restoration procedures performed by certified specialists'],
          ].map(([img, t, d]) => (
            <div key={t} style={{ background: WHITE, borderRadius: 14, overflow: 'hidden', boxShadow: '0 6px 20px rgba(15,32,40,0.08)' }}>
              <img src={img} alt="" style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '18px 18px 22px' }}>
                <h3 style={{ fontFamily: POPPINS, fontSize: 17, fontWeight: 600, color: INK, margin: '0 0 6px' }}>{t}</h3>
                <p style={{ fontSize: 13.5, color: BODY, margin: 0, lineHeight: 1.55 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PERMANENT ── */}
      <section style={{ background: WHITE, padding: '68px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading>Hair Restoration Is Permanent&mdash;Mistakes Are, Too</SectionHeading>
          <p style={{ fontSize: 16, color: BODY, margin: '16px auto 16px', lineHeight: 1.75, maxWidth: 720 }}>
            Hair restoration isn&rsquo;t like a hair style that&rsquo;s easily changed. It&rsquo;s a permanent medical procedure that requires careful consideration and planning, as well as skillful implementation.
          </p>
          <p style={{ fontSize: 16, color: INK, fontWeight: 600, margin: '0 auto 32px', lineHeight: 1.75, maxWidth: 720 }}>
            Your consultation will help you make a thoughtful decision that avoids over-harvesting, and unnatural results&mdash;and to determine whether treatment makes sense for you at all.
          </p>
          <div className="three-col" style={{ maxWidth: 760, margin: '0 auto', gap: 20 }}>
            {['Expert Analysis', 'Safe & Permanent', 'No Rush Decisions'].map(chip => (
              <div key={chip} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: PANEL, borderRadius: 40, padding: '14px 18px' }}>
                <Check />
                <span style={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 15, color: TEAL_DEEP }}>{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: PANEL, padding: '68px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading>How It Works</SectionHeading>
          <div className="three-col" style={{ margin: '40px 0 26px' }}>
            {[
              ['1', 'Request a Consultation', 'Submit a short, private form.'],
              ['2', 'Speak With a Patient Advisor', 'Review your goals and next steps.'],
              ['3', 'In-Clinic Evaluation', 'Confirm candidacy and personalized options.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ width: 58, height: 58, margin: '0 auto 16px', borderRadius: '50%', background: TEAL_DARK, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, fontFamily: POPPINS }}>{n}</div>
                <h3 style={{ fontFamily: POPPINS, fontSize: 19, fontWeight: 600, color: INK, margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.55 }}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 18 }}>{ctaBtn('Book a Consultation')}</div>
            <p style={{ fontSize: 14, color: BODY, fontStyle: 'italic', margin: '0 0 18px' }}>No obligation. Private and confidential.</p>
            {ctaBtn("See If I'm a Candidate", '#final-form')}
          </div>
        </div>
      </section>

      {/* ── INCENTIVE ── */}
      <section style={{ background: TEAL_DARK, padding: '52px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <SectionHeading color={WHITE} max={640}>Limited Consultation Incentive Available</SectionHeading>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.88)', margin: 0, lineHeight: 1.7 }}>
            Qualified candidates may be eligible for preferred pricing during their consultation.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section style={{ background: WHITE, padding: '68px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <SectionHeading align="left" max={480}>If You&rsquo;re Going to Do This, Do It Informed</SectionHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
              <a href={PHONE_HREF} style={{ color: INK, fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>{PHONE}</a>
              <a href={`mailto:${EMAIL}`} style={{ color: INK, fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>{EMAIL}</a>
              <span style={{ color: BODY, fontSize: 15 }}>{ADDRESS}</span>
            </div>
          </div>
          <div id="final-form" style={{ background: PANEL, borderRadius: 14, padding: '26px 24px' }}>
            <p style={{ fontFamily: POPPINS, fontWeight: 600, fontSize: 17, color: INK, margin: '0 0 14px' }}>Check My Eligibility</p>
            <GhlForm formId={bottomFormId} height={440} formName="Meta Bottom - Mollura Consult" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// META RETARGETING PAGE
// ═══════════════════════════════════════════════════════════════════════════
export function MolluraMetaRetargetingLP({ heroFormId, bottomFormId }: { heroFormId: string; bottomFormId: string }) {
  const CTA = "See If I'm a Candidate"
  return (
    <div style={{ fontFamily: SANS, color: INK }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* ── HERO ── */}
      <section className="mol-m-hero" style={{ position: 'relative', overflow: 'hidden', background: TEAL_DARK }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="/img/m/hairline.webp" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(15,32,40,0.94) 0%, rgba(23,85,102,0.86) 60%, rgba(23,85,102,0.7) 100%)' }} />
        </div>
        <Nav ctaLabel={CTA} />
        <div className="mol-m-hero-inner two-col" style={{ position: 'relative', zIndex: 10, maxWidth: 1180, margin: '0 auto', padding: '150px 48px 72px', gap: 48, alignItems: 'center' }}>
          <div>
            <h1 className="mol-m-h1" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(32px, 4.2vw, 50px)', color: WHITE, lineHeight: 1.14, margin: '0 0 20px' }}>
              Worried about surgery or shaving? Get clarity in 60 seconds.
            </h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, margin: '0 0 26px', maxWidth: 540 }}>
              Precision hair restoration protects your donor area and plans for natural-looking results&mdash;based on your hair loss pattern.
            </p>
            <img src="/img/m/results-1.webp" alt="" style={{ width: '100%', maxWidth: 460, borderRadius: 12, display: 'block' }} />
          </div>
          <div id="hero-form" style={{ background: WHITE, borderRadius: 12, padding: '26px 24px 22px', boxShadow: '0 20px 50px rgba(0,0,0,0.35)' }}>
            <GhlForm formId={heroFormId} height={430} formName="Meta RT Hero - Mollura" />
            <div style={{ textAlign: 'center', marginTop: 14 }}>{ctaBtn('Check Eligibility')}</div>
          </div>
        </div>
      </section>

      {/* ── IS THIS RIGHT FOR YOU ── */}
      <section style={{ background: PANEL, padding: '64px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <SectionHeading>Is This Right For You?</SectionHeading>
          <p style={{ fontSize: 16, color: BODY, margin: '0 auto 34px', maxWidth: 560 }}>Understand who benefits most from this treatment</p>
          <div className="two-col" style={{ gap: 24, textAlign: 'left' }}>
            <div style={{ background: WHITE, borderRadius: 14, padding: '26px 26px', boxShadow: '0 6px 20px rgba(15,32,40,0.06)' }}>
              <h3 style={{ fontFamily: POPPINS, fontSize: 18, fontWeight: 600, color: TEAL_DEEP, margin: '0 0 16px' }}>Best For</h3>
              {['Early to moderate loss', 'Want natural density', 'Prefer physician planning'].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <Check /><span style={{ fontSize: 15, color: INK }}>{i}</span>
                </div>
              ))}
            </div>
            <div style={{ background: WHITE, borderRadius: 14, padding: '26px 26px', boxShadow: '0 6px 20px rgba(15,32,40,0.06)' }}>
              <h3 style={{ fontFamily: POPPINS, fontSize: 18, fontWeight: 600, color: '#8a5a3a', margin: '0 0 16px' }}>Not ideal if:</h3>
              {['Seeking the cheapest option', 'Expect guaranteed density', 'Unwilling to follow long-term plan'].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: '#efe2d6', color: '#8a5a3a', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>&times;</span>
                  <span style={{ fontSize: 15, color: INK }}>{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 15, color: BODY }}>Still have questions about your candidacy?</span>
            {ctaBtn(CTA)}
          </div>
        </div>
      </section>

      {/* ── WAITING / THIS IS WHY ── */}
      <section style={{ background: WHITE, padding: '68px 24px' }}>
        <div style={{ maxWidth: 1050, margin: '0 auto' }}>
          <SectionHeading>If You&rsquo;ve Been Waiting to &ldquo;Think About It&rdquo;&mdash;This Is Why</SectionHeading>
          <div className="features-grid" style={{ margin: '44px 0 36px', gap: 24 }}>
            {[
              ['Hair Loss', 'Doesn’t Pause While You Decide', <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>],
              ['Donor Hair Quality', 'Declines Over Time', <><path d="M4 18l5-6 3 3 8-9" /><path d="M4 4v16h16" /></>],
              ['Earlier Intervention =', 'More Natural Outcomes', <><path d="M12 3v18M5 10l7-7 7 7" /></>],
              ['Waiting', 'Limits Future Options', <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>],
            ].map(([t, d, icon]) => (
              <div key={t as string} style={{ textAlign: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: '50%', background: TEAL_DARK, marginBottom: 16 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </span>
                <h3 style={{ fontFamily: POPPINS, fontSize: 17, fontWeight: 600, color: INK, margin: '0 0 4px' }}>{t}</h3>
                <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.5 }}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>{ctaBtn(CTA)}</div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: PANEL, padding: '68px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading>Real Patients. Real Results. Real Experiences.</SectionHeading>
          <p style={{ fontSize: 14, color: BODY, margin: '0 auto 40px', textAlign: 'center', maxWidth: 640, fontStyle: 'italic' }}>
            Feedback may be collected to improve educational communication. Individual experiences vary.
          </p>
          <div className="reviews-grid">
            {[
              ['I want to thank Dr. Mollura and the staff for their professionalism and the respectful way my concerns were handled. The team was attentive, supportive, and communicated clearly throughout my experience.', '– James A.'],
              ['Thank you for the time, support, and personal approach shown to my family. We appreciated the encouragement, clear communication, and professionalism throughout the process', '– Linda C.'],
              ['I appreciated the professionalism and efficiency of everyone in the office. Dr. Mollura took time to listen and made me feel cared for throughout my visit.', '– Jonathan S.'],
            ].map(([quote, name]) => (
              <div key={name} style={{ background: WHITE, borderRadius: 14, padding: '28px 26px', boxShadow: '0 6px 20px rgba(15,32,40,0.06)' }}>
                <div style={{ color: '#f0b429', fontSize: 18, letterSpacing: 2, marginBottom: 14 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p style={{ fontSize: 15, color: BODY, lineHeight: 1.65, margin: '0 0 18px' }}>{quote}</p>
                <p style={{ fontFamily: POPPINS, fontWeight: 600, fontSize: 15, color: INK, margin: 0 }}>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHEAPER SOMEWHERE ELSE ── */}
      <section style={{ background: TEAL_DARK, padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 40, alignItems: 'center' }}>
          <SectionHeading color={WHITE} align="left" max={440}>Isn&rsquo;t It Cheaper Somewhere Else?&rdquo;</SectionHeading>
          <div>
            <p style={{ fontFamily: POPPINS, fontWeight: 600, fontSize: 20, color: WHITE, borderLeft: `4px solid ${TEAL}`, paddingLeft: 16, margin: '0 0 22px' }}>
              Hair restoration is not a commodity
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', fontWeight: 600, margin: '0 0 10px' }}>Cost reflects:</p>
            {['The surgeon’s experience', 'Technique selection (FUE vs FUT)', 'Planning and long-term outcome'].map(i => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 4, marginBottom: 8 }}>
                <Arrow /><span style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)' }}>{i}</span>
              </div>
            ))}
            <div style={{ marginTop: 22, display: 'inline-block', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 10, padding: '14px 20px', fontSize: 15, color: WHITE, fontWeight: 500 }}>
              One procedure done right &gt; multiple corrections later
            </div>
          </div>
        </div>
      </section>

      {/* ── SHAVING / DOWNTIME ── */}
      <section style={{ background: WHITE, padding: '68px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 44, alignItems: 'center' }}>
          <div>
            <SectionHeading align="left" max={480}>Concerned about shaving or downtime?</SectionHeading>
            <p style={{ fontFamily: POPPINS, fontWeight: 600, fontSize: 17, color: INK, margin: '18px 0 18px' }}>Not every procedure requires full shaving</p>
            <p style={{ fontSize: 15, color: INK, fontWeight: 600, margin: '0 0 8px' }}>Modern techniques prioritize:</p>
            <ol style={{ margin: '0 0 22px', paddingLeft: 20, color: BODY, fontSize: 15, lineHeight: 1.7 }}>
              <li>Precise graft selection consistency (when appropriate)</li>
              <li>Donor preservation-focused planning</li>
              <li>Natural growth pattern placement strategy</li>
            </ol>
            <p style={{ fontSize: 15, color: INK, fontWeight: 600, margin: '0 0 8px' }}>Consultation determines:</p>
            <ul style={{ margin: '0 0 22px', paddingLeft: 20, color: BODY, fontSize: 15, lineHeight: 1.7 }}>
              <li>Technique</li>
              <li>Shaving requirements</li>
              <li>Expected outcome</li>
            </ul>
            <p style={{ fontSize: 15, color: BODY, lineHeight: 1.7, margin: '0 0 24px' }}>
              Your consultation determines the best type of hair restoration procedure for your needs and whether a hybrid approach combining a surgical procedure with a non-surgical treatment would be best, all designed specifically for your hair loss pattern.
            </p>
            {ctaBtn(CTA)}
          </div>
          <img src="/img/m/rt-photo-1.webp" alt="" style={{ width: '100%', borderRadius: 14, display: 'block' }} />
        </div>
      </section>

      {/* ── ARE YOU A CANDIDATE ── */}
      <section style={{ background: PANEL, padding: '68px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 44, alignItems: 'center' }}>
          <img src="/img/m/rt-photo-2.webp" alt="" className="mol-m-order2" style={{ width: '100%', borderRadius: 14, display: 'block' }} />
          <div>
            <SectionHeading align="left" max={480}>Are You a Candidate For Hair Restoration?</SectionHeading>
            <div style={{ margin: '22px 0 18px' }}>
              {['Your specific type of hair loss will be diagnosed', 'The extent of your current hair loss', 'The amount and quality of your donor hair region'].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 4, marginBottom: 10 }}>
                  <Arrow /><span style={{ fontSize: 15, color: INK }}>{i}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 15, color: BODY, lineHeight: 1.7, margin: '0 0 24px' }}>
              Hair restoration isn&rsquo;t for everyone&mdash;your candidacy determines the best method.
            </p>
            {ctaBtn(CTA)}
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section style={{ background: WHITE, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading>What happens next</SectionHeading>
          <div className="three-col" style={{ margin: '40px 0 24px' }}>
            {[
              ['1', 'A thorough consultation and hair evaluation'],
              ['2', 'Confirm the treatment method, alone or hybrid, for your needs'],
              ['3', 'Leave with a realistic plan + timeline (no commitment)'],
            ].map(([n, d]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ width: 54, height: 54, margin: '0 auto 16px', borderRadius: '50%', background: TEAL_DARK, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, fontFamily: POPPINS }}>{n}</div>
                <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.6, maxWidth: 260, marginLeft: 'auto', marginRight: 'auto' }}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontFamily: POPPINS, fontWeight: 500, fontSize: 15, color: TEAL_DEEP, margin: 0 }}>Consult: ~30 minutes &bull; Plan delivered same day</p>
        </div>
      </section>

      {/* ── MEDICAL DECISION ── */}
      <section style={{ background: PANEL, padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 44, alignItems: 'center' }}>
          <img src="/img/m/rt-photo-3.webp" alt="" className="mol-m-order2" style={{ width: '100%', borderRadius: 14, display: 'block' }} />
          <div>
            <SectionHeading align="left" max={440}>Hair Restoration Is a Medical Decision</SectionHeading>
            <p style={{ fontSize: 15, color: INK, fontWeight: 600, margin: '20px 0 8px' }}>Results depend on:</p>
            <div style={{ marginBottom: 18 }}>
              {['Proper diagnosis', 'Long-term planning', 'Ethical candidacy screening'].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <Check /><span style={{ fontSize: 15, color: INK }}>{i}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 15, color: BODY, lineHeight: 1.7, margin: '0 0 24px' }}>
              Not everyone is an ideal candidate for hair restoration treatment. Consultations exist to protect the patient first.
            </p>
            {ctaBtn(CTA)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section style={{ background: TEAL_DARK, padding: '68px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1080, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <SectionHeading color={WHITE} align="left" max={480}>Hair loss changes over time&mdash;planning earlier preserves options.</SectionHeading>
            <div style={{ margin: '22px 0 26px' }}>
              {['Donor supply is finite', 'Earlier planning can improve natural coverage strategy', 'A consult clarifies what’s realistic now'].map(i => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, background: 'rgba(255,255,255,0.15)', borderRadius: '50%' }}>
                    <svg width="12" height="9" viewBox="0 0 14 11" fill="none"><path d="M13 1L5 9L1 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.92)' }}>{i}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={PHONE_HREF} style={{ color: WHITE, fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>{PHONE}</a>
              <a href={`mailto:${EMAIL}`} style={{ color: WHITE, fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>{EMAIL}</a>
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15 }}>{ADDRESS}</span>
            </div>
          </div>
          <div id="final-form" style={{ background: WHITE, borderRadius: 14, padding: '26px 24px 22px' }}>
            <p style={{ fontFamily: POPPINS, fontWeight: 600, fontSize: 18, color: INK, margin: '0 0 6px', textAlign: 'center' }}>Schedule your Consultation Today</p>
            <p style={{ fontSize: 13, color: BODY, margin: '0 0 16px', textAlign: 'center' }}>Confidential &bull; No obligation &bull; Personalized</p>
            <GhlForm formId={bottomFormId} height={440} formName="Meta RT Bottom - Mollura" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
