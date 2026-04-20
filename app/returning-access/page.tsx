'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function ReturningAccessPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [messageType, setMessageType] = useState<'error' | 'success' | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    setMessageType(null)

    const normalizedEmail = email.trim().toLowerCase()

    if (!normalizedEmail) {
      setMessage('Please enter the email used for your purchase.')
      setMessageType('error')
      setLoading(false)
      return
    }

    const { data, error } = await supabase
      .from('library_access')
      .select('*')
      .ilike('email', normalizedEmail)
      .eq('access_status', 'active')
      .limit(1)

    if (error) {
      setMessage('Something went wrong while checking access. Please try again.')
      setMessageType('error')
      setLoading(false)
      return
    }

    if (!data || data.length === 0) {
      setMessage(
        'No active access was found for that email. Please double-check your purchase email or use the purchase button.'
      )
      setMessageType('error')
      setLoading(false)
      return
    }

    document.cookie = 'library_access_granted=true; path=/; max-age=2592000; SameSite=Lax'

    await supabase
      .from('library_access')
      .update({
        last_accessed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .ilike('email', normalizedEmail)

    setMessage('Access confirmed. Redirecting you into the library...')
    setMessageType('success')

    setTimeout(() => {
      router.push('/')
      router.refresh()
    }, 900)
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(180deg, #f4f7f5 0%, #eef3f0 45%, #ffffff 100%)',
        color: '#14251f',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <section
        style={{
          borderBottom: '1px solid #d9e3de',
          background:
            'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(244,247,245,1) 55%, rgba(242,237,255,0.55) 100%)',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '34px 24px 54px 24px',
          }}
        >
          <div style={{ maxWidth: 820 }}>
            <div style={{ marginBottom: 10 }}>
              <Link
                href="/locked"
                style={{
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                <Image
                  src="/pnb-logo.png"
                  alt="Precision Neurobiology"
                  width={320}
                  height={82}
                  priority
                  style={{
                    width: '100%',
                    maxWidth: 240,
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </Link>
            </div>

            <div
              style={{
                display: 'inline-flex',
                border: '1px solid #d9e3de',
                background: 'rgba(255,255,255,0.9)',
                borderRadius: 999,
                padding: '6px 10px',
                fontSize: 12,
                fontWeight: 700,
                color: '#1b5e3b',
                marginBottom: 12,
              }}
            >
              Returning customer access
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(34px, 5vw, 52px)',
                lineHeight: 1.06,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#1b5e3b',
                maxWidth: 900,
              }}
            >
              Re-enter the library using the email tied to your purchase
            </h1>

            <p
              style={{
                marginTop: 18,
                fontSize: 18,
                lineHeight: 1.75,
                color: '#5c6f68',
                maxWidth: 760,
              }}
            >
              Enter the email associated with your Supplement Intelligence™ purchase.
              If active access is found, you will be returned directly into the library.
            </p>

            <div
              style={{
                marginTop: 16,
                height: 3,
                width: '100%',
                maxWidth: 380,
                borderRadius: 999,
                background:
                  'linear-gradient(90deg, #1b5e3b 0%, #5b3fa3 100%)',
              }}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '44px 24px 72px 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(320px, 0.95fr)',
            gap: 24,
            alignItems: 'start',
          }}
        >
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #d9e3de',
              borderRadius: 24,
              padding: 26,
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 700,
                color: '#1b5e3b',
              }}
            >
              Before you continue
            </h2>

            <div
              style={{
                marginTop: 18,
                display: 'grid',
                gap: 14,
              }}
            >
              {[
                'Use the email that was tied to your purchase',
                'If access is found, you will be redirected into the library automatically',
                'If no access is found, you can return to the purchase page',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '18px 1fr',
                    gap: 12,
                    alignItems: 'start',
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background:
                        'linear-gradient(180deg, #1b5e3b 0%, #5b3fa3 100%)',
                      marginTop: 7,
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: '#5c6f68',
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1px solid #d9e3de',
              borderRadius: 24,
              padding: 26,
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: 0,
                fontSize: 26,
                fontWeight: 700,
                color: '#1b5e3b',
              }}
            >
              Confirm your email
            </h2>

            <form onSubmit={handleSubmit} style={{ marginTop: 18 }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#1b5e3b',
                  marginBottom: 8,
                }}
              >
                Purchase email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  border: '1px solid #d9e3de',
                  borderRadius: 14,
                  padding: '14px 16px',
                  fontSize: 15,
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  marginTop: 16,
                  width: '100%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  background:
                    'linear-gradient(90deg, #1b5e3b 0%, #5b3fa3 100%)',
                  color: '#ffffff',
                  borderRadius: 14,
                  padding: '14px 18px',
                  fontSize: 15,
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(27, 94, 59, 0.18)',
                  border: 'none',
                  cursor: loading ? 'default' : 'pointer',
                  opacity: loading ? 0.8 : 1,
                }}
              >
                {loading ? 'Checking access...' : 'Enter library'}
              </button>
            </form>

            {message && (
              <div
                style={{
                  marginTop: 16,
                  border: `1px solid ${
                    messageType === 'error' ? '#efd0d0' : '#d9e3de'
                  }`,
                  background: messageType === 'error' ? '#fff7f7' : '#f7faf8',
                  color: messageType === 'error' ? '#8a3b3b' : '#1b5e3b',
                  borderRadius: 14,
                  padding: '14px 16px',
                  fontSize: 14,
                  lineHeight: 1.7,
                }}
              >
                {message}
              </div>
            )}

            <p
              style={{
                marginTop: 16,
                marginBottom: 0,
                fontSize: 12,
                lineHeight: 1.75,
                color: '#6b7d76',
              }}
            >
              This is a temporary V1 returning-access flow based on your purchase email.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 28 }}>
          <Link
            href="/locked"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#1b5e3b',
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            ← Back to locked page
          </Link>
        </div>
      </section>
    </main>
  )
}