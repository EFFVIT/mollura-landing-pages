'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

// ── DESIGN TOKENS ──────────────────────────────────────────────────────────
const DARK_NAVY = '#2a2a34'
const CORAL     = '#e8623a'
const GRAY      = '#5a677c'
const LIGHT_GRAY = '#98a0ab'
const WHITE     = '#ffffff'
const OVERLAY   = 'rgba(20,20,28,0.65)'

const SESSION_KEY = 'consultCreditPopupSeen'
const EXCLUDED_PATHS = ['/privacy-policy', '/cookie-policy']

// Different LP variants use different hero-form section ids: MolluraMetaLP
// (the /m/ paid-social pages) uses "hero-form", MolluraLP (the /c/ pages)
// uses "form". Try both so the CTA scrolls correctly on every route.
const HERO_FORM_IDS = ['hero-form', 'form']

function CloseIcon({ hovered }: { hovered: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M1 1L15 15M15 1L1 15" stroke={hovered ? DARK_NAVY : LIGHT_GRAY} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function ConsultCreditPopup() {
  const pathname = usePathname() || ''
  const excluded = EXCLUDED_PATHS.includes(pathname)

  const [visible, setVisible] = useState(false)
  const [closeHovered, setCloseHovered] = useState(false)

  useEffect(() => {
    if (excluded) return
    if (sessionStorage.getItem(SESSION_KEY)) return
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [excluded])

  if (excluded || !visible) return null

  function dismiss() {
    try { sessionStorage.setItem(SESSION_KEY, '1') } catch { /* private mode */ }
    setVisible(false)
  }

  function handleCta() {
    dismiss()
    requestAnimationFrame(() => {
      for (const id of HERO_FORM_IDS) {
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          break
        }
      }
    })
  }

  return (
    <div
      onClick={dismiss}
      style={{
        position: 'fixed',
        inset: 0,
        background: OVERLAY,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          background: WHITE,
          borderRadius: 16,
          boxShadow: '0 25px 70px rgba(0,0,0,0.35)',
          maxWidth: 440,
          width: '100%',
          padding: '40px 36px 32px',
          textAlign: 'center',
          fontFamily: "'Jost', 'Open Sans', sans-serif",
        }}
      >
        <button
          onClick={dismiss}
          onMouseEnter={() => setCloseHovered(true)}
          onMouseLeave={() => setCloseHovered(false)}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            width: 32,
            height: 32,
            border: 'none',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <CloseIcon hovered={closeHovered} />
        </button>

        <p style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: CORAL,
          marginBottom: 10,
        }}>
          Limited Time
        </p>

        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 32,
          lineHeight: 1.15,
          color: DARK_NAVY,
          marginBottom: 12,
        }}>
          $1,000 Consultation Credit
        </h2>

        <p style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          fontSize: 15,
          textTransform: 'uppercase',
          color: CORAL,
          marginBottom: 14,
          lineHeight: 1.4,
        }}>
          Toward Your Hair Restoration Treatment Plan
        </p>

        <div style={{ height: 2, width: 64, background: CORAL, margin: '0 auto 20px' }} />

        <p style={{
          fontSize: 15,
          color: GRAY,
          lineHeight: 1.6,
          marginBottom: 24,
        }}>
          Book your consultation and receive a $1,000 credit toward the treatment plan you and your physician build together. Consultations booked on or before Labor Day qualify.
        </p>

        <button
          onClick={handleCta}
          style={{
            width: '100%',
            background: CORAL,
            color: WHITE,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            textTransform: 'uppercase',
            border: 'none',
            borderRadius: 62,
            padding: '16px 24px',
            cursor: 'pointer',
            marginBottom: 18,
          }}
        >
          Schedule Your Free Consultation
        </button>

        <p style={{
          fontSize: 12,
          color: LIGHT_GRAY,
          lineHeight: 1.5,
          margin: 0,
        }}>
          $1,000 credit applies to a treatment plan following your consultation. Consultation must be booked on or before September 7, 2026. Candidacy and treatment plan determined at consultation. Cannot be combined with other offers.
        </p>
      </div>
    </div>
  )
}
