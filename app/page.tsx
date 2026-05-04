export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Stripe Health Monitor
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Losing Revenue to{' '}
          <span className="text-[#58a6ff]">Failed Payments</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Stripe account and instantly see which subscriptions are at risk, track dunning success rates, and get actionable retention suggestions — all in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Metrics preview */}
        <div className="mt-14 grid grid-cols-3 gap-4 text-left">
          {[
            { label: 'Failed Payments', value: '3', sub: 'last 30 days' },
            { label: 'Dunning Success', value: '78%', sub: 'recovery rate' },
            { label: 'At-Risk MRR', value: '$940', sub: 'needs attention' }
          ].map((m) => (
            <div key={m.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-xs text-[#6e7681] mb-1">{m.label}</p>
              <p className="text-2xl font-bold text-[#58a6ff]">{m.value}</p>
              <p className="text-xs text-[#6e7681] mt-1">{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to protect MRR</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Real-time failed payment alerts',
              'Dunning success rate tracking',
              'At-risk subscription identification',
              'Retention action recommendations',
              'Stripe webhook integration',
              'Unlimited subscriptions monitored'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does it connect to Stripe?',
              a: 'You provide your Stripe secret key and configure a webhook endpoint. The dashboard pulls subscription data via the Stripe API and receives real-time events through webhooks.'
            },
            {
              q: 'What counts as an at-risk subscription?',
              a: 'Subscriptions with a past-due status, recent failed payment attempts, or cards expiring within 30 days are flagged as at-risk so you can act before they churn.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel your subscription at any time from your billing portal. You keep access until the end of your billing period with no questions asked.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Stripe Subscription Health Monitor. All rights reserved.
      </footer>
    </main>
  )
}
