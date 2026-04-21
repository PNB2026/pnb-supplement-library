import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supplement Intelligence™',
  description: 'Precision Neurobiology™ Supplement Library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: '#f7f7f5',
        }}
      >
        {/* 🔝 TOP NAV (GLOBAL) */}
        <div
          style={{
            width: '100%',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#ffffff',
            borderBottom: '1px solid #e5e5e5',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}
        >
          {/* LEFT: Brand */}
          <div
            style={{
              fontWeight: 600,
              fontSize: 14,
              color: '#111827',
            }}
          >
            Supplement Intelligence™
          </div>

          {/* RIGHT: Back to Main Site */}
          <a
            href="https://www.precisionneurobiology.org"
            style={{
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 600,
              padding: '10px 16px',
              borderRadius: 999,
              background:
                'linear-gradient(90deg, #1f7a4c 0%, #6b46c1 100%)',
              color: '#ffffff',
            }}
          >
            ← Back to Precision Neurobiology™
          </a>
        </div>

        {/* PAGE CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  )
}