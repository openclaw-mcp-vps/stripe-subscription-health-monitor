import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Subscription Health Monitor',
  description: 'Monitor Stripe subscription metrics health. Track failed payments, dunning success rates, and identify at-risk subscriptions to reduce involuntary churn.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5ed48e9e-2495-4a87-92f9-beee856b7b48"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
