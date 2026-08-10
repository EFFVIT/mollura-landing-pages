'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Manrope } from 'next/font/google'

// Manrope isn't in globals.css's font @import (Judson, Jost, Poppins, Roboto,
// Lato, Montserrat, Open Sans only) — loaded here via next/font/google for
// the headline per the Figma spec.
const manrope = Manrope({ subsets: ['latin'], weight: ['700'] })

// ── DESIGN TOKENS ──────────────────────────────────────────────────────────
const DARK_NAVY   = '#04435D'
const CORAL       = '#E76F51'
const GRAY        = '#5a677c'
const LIGHT_GRAY  = '#98a0ab'
const FINE_PRINT  = 'rgba(28,90,104,0.75)'
const WHITE       = '#ffffff'
const OVERLAY     = 'rgba(4,67,93,0.55)'

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
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [excluded])

  if (excluded || !visible) return null

  function dismiss() {
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
          borderRadius: 24,
          boxShadow: '0 25px 70px rgba(0,0,0,0.35)',
          maxWidth: 748,
          width: '100%',
          padding: 'clamp(32px, 9vw, 56px) clamp(20px, 6vw, 48px) clamp(24px, 6vw, 40px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(14px, 3vw, 20px)',
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
          width: '100%',
          fontFamily: "'Jost', sans-serif",
          fontWeight: 700,
          fontSize: 13,
          lineHeight: 1,
          letterSpacing: '0.12em',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: CORAL,
        }}>
          Limited Time
        </p>

        <h2 style={{
          width: '100%',
          fontFamily: manrope.style.fontFamily,
          fontWeight: 700,
          fontSize: 'clamp(24px, 6vw, 32px)',
          lineHeight: 1.12,
          letterSpacing: 'normal',
          textAlign: 'center',
          color: DARK_NAVY,
        }}>
          $1,000 Consultation Credit
        </h2>

        <p style={{
          width: '100%',
          fontFamily: "'Jost', sans-serif",
          fontWeight: 600,
          fontSize: 15,
          lineHeight: 1.3,
          letterSpacing: '0.06em',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: CORAL,
        }}>
          Toward Your Hair Restoration Treatment Plan
        </p>

        <div style={{ width: 56, height: 3, borderRadius: 2, background: CORAL, flexShrink: 0 }} />

        <p style={{
          width: '100%',
          fontFamily: "'Jost', sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.5,
          letterSpacing: 'normal',
          textAlign: 'center',
          color: GRAY,
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
            padding: '18px 32px',
            cursor: 'pointer',
          }}
        >
          Schedule Your Free Consultation
        </button>

        <p style={{
          width: '100%',
          fontFamily: "'Jost', sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: 1.45,
          letterSpacing: 'normal',
          textAlign: 'center',
          color: FINE_PRINT,
          margin: 0,
        }}>
          $1,000 credit applies to a treatment plan following your consultation. Consultation must be booked on or before September 7, 2026. Candidacy and treatment plan determined at consultation. Cannot be combined with other offers.
        </p>
      </div>
    </div>
  )
}
