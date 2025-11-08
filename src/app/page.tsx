export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-900 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_55%)]" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-purple-200 ring-1 ring-white/15 backdrop-blur">
              Super Heavy Grok Advantage
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Compound your intuition with a battle-tested cognitive co-pilot.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              Super Heavy Grok Advantage is an intelligence operations layer for
              small teams chasing outsized bets. It blends deep semantic search,
              executive briefings on demand, and adaptive simulation rails that
              keep your strategy in permanent beta.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#stack"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-purple-300 via-purple-200 to-amber-200 transition-all duration-300 group-hover:translate-y-0" />
                <span className="relative group-hover:text-slate-900">
                  Explore the stack
                </span>
              </a>
              <a
                href="#cadence"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Observe the cadence
              </a>
            </div>
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-4 text-sm font-medium text-slate-300 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                  <span className="block text-xs uppercase tracking-widest text-white/50">
                    Comprehension delta
                  </span>
                  <span className="mt-2 block text-2xl font-semibold text-white">
                    42%
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                  <span className="block text-xs uppercase tracking-widest text-white/50">
                    Clarity time-to-signal
                  </span>
                  <span className="mt-2 block text-2xl font-semibold text-white">
                    12m
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                  <span className="block text-xs uppercase tracking-widest text-white/50">
                    Strategy throughput
                  </span>
                  <span className="mt-2 block text-2xl font-semibold text-white">
                    7.3x
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                  <span className="block text-xs uppercase tracking-widest text-white/50">
                    Decision drift
                  </span>
                  <span className="mt-2 block text-2xl font-semibold text-white">
                    ↓18%
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Metrics are sampled from teams running the SHGA loop across
                product, GTM, and capital strategies over the last 90 days.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-3xl bg-purple-500/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-lg shadow-xl shadow-purple-500/20">
              <header className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                <span>SHGA Neural Loop</span>
                <span>v3.7</span>
              </header>
              <div className="mt-8 space-y-6">
                {[
                  {
                    label: "Sense",
                    detail:
                      "Adaptive crawlers distill raw market entropy into crisp signal tapes.",
                  },
                  {
                    label: "Grok",
                    detail:
                      "Contextual cognition engine fuses signal tapes with mission priors.",
                  },
                  {
                    label: "Sim",
                    detail:
                      "Scenario lattice projects movesets, stress-tests assumptions, surfaces asymmetric edges.",
                  },
                  {
                    label: "Act",
                    detail:
                      "Auto-generated command briefs prime teams with ready-to-run plays.",
                  },
                ].map((phase) => (
                  <div
                    key={phase.label}
                    className="group relative rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-purple-300/40"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-200/80">
                      {phase.label}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200">
                      {phase.detail}
                    </p>
                    <div className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full border border-purple-200/40 bg-purple-500/70 text-[10px] font-semibold text-white shadow shadow-purple-500/40">
                      •
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="stack"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 px-8 py-14 backdrop-blur-xl"
        >
          <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-purple-400/40 blur-3xl" />
          <div className="absolute -right-12 bottom-10 h-48 w-48 rounded-full bg-emerald-400/30 blur-3xl" />

          <div className="relative mx-auto max-w-4xl space-y-12">
            <header className="space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                The compounding stack
              </h2>
              <p className="max-w-2xl text-base text-slate-300">
                Each layer is modular, but the advantage compounds when the
                stack is deployed as a synchronized loop. Below is the current
                reference implementation teams are shipping with.
              </p>
            </header>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Signal Forensics",
                  subtitle: "Entropy filters",
                  copy:
                    "Vector digests autocalibrate on your operating market. Noise is collapsed, emergent anomalies are tagged in under four minutes.",
                  result: "Stacks with existing BI dashboards.",
                },
                {
                  title: "Context Reactor",
                  subtitle: "Narrative weaving",
                  copy:
                    "Language models tuned on your battle logs weave inputs into a living narrative spine. The more you ship, the smarter it becomes.",
                  result: "Outputs stay human-editable.",
                },
                {
                  title: "Scenario Lattice",
                  subtitle: "Pathfinding",
                  copy:
                    "Generates asymmetric playbooks from millions of micro-simulations. Prioritizes moves with max upside / minimal burn.",
                  result: "Keeps you ahead of copycat clones.",
                },
                {
                  title: "Command Briefs",
                  subtitle: "Operate on rhythm",
                  copy:
                    "Compressed action scripts drop into Slack, Linear, and Notion. Everyone moves with the same pulse, zero drift.",
                  result: "Measured by weekly momentum review.",
                },
              ].map((layer) => (
                <article
                  key={layer.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-200/50 hover:bg-white/10"
                >
                  <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl transition group-hover:bg-purple-300/30" />
                  <span className="text-xs uppercase tracking-[0.3em] text-purple-200/80">
                    {layer.subtitle}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {layer.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-200">
                    {layer.copy}
                  </p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200/80">
                    {layer.result}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cadence" className="space-y-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Cadence map
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-300">
                The Super Heavy Grok Advantage cadence loops every seven days.
                The map below outlines how the loop compresses discovery,
                alignment, and execution into one compound rhythm.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Download playbook
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
            <div className="grid divide-y divide-white/10 text-sm text-slate-200 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
              {[
                {
                  day: "Day 0",
                  label: "Prime",
                  detail:
                    "Load new telemetry, refresh priors, calibrate narrative risk.",
                },
                {
                  day: "Day 1-2",
                  label: "Pulse",
                  detail:
                    "Run micro-sims, rank asymmetric moves, trigger hypothesis sprints.",
                },
                {
                  day: "Day 3-4",
                  label: "Run",
                  detail:
                    "Deploy briefs, instrument auto-scorecards, observe field signal.",
                },
                {
                  day: "Day 5-6",
                  label: "Loop",
                  detail:
                    "Review drift, merge learnings, spin new sequences. Ship summary on Day 7.",
                },
              ].map((item) => (
                <div key={item.day} className="space-y-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200/80">
                    {item.day}
                  </p>
                  <p className="text-lg font-semibold text-white">{item.label}</p>
                  <p className="text-sm leading-6 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
              <h3 className="text-xl font-semibold text-white">
                Signal hygiene doctrine
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                <li>
                  <span className="font-semibold text-white">Limit dashboards:</span>{" "}
                  ship one canonical board per loop; anything else is drift.
                </li>
                <li>
                  <span className="font-semibold text-white">Bias to shipping:</span>{" "}
                  sims without deployment are archived within 72 hours.
                </li>
                <li>
                  <span className="font-semibold text-white">Ground in humans:</span>{" "}
                  every auto-brief closes with who owns the next move and when.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-8 text-sm text-slate-200">
              <h3 className="text-xl font-semibold text-white">
                Access tiers
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                <li>
                  <span className="font-semibold text-white">Arc Teams:</span>{" "}
                  72-hour onboarding, unlimited sims, concierge analysts.
                </li>
                <li>
                  <span className="font-semibold text-white">Strike Cells:</span>{" "}
                  Targeted campaigns, battlefield dashboards, red-team pods.
                </li>
                <li>
                  <span className="font-semibold text-white">Skunk Labs:</span>{" "}
                  Early schema access, experimental operators, roadmap influence.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-black/40 px-8 py-10 text-sm text-slate-300 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-semibold text-white">
              Ready to stack Super Heavy Grok Advantage?
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6">
              Book a deep-dive with an operator. We run through your current
              loop, surface asymmetries, and drop a pilot playbook in under 48
              hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-purple-200"
            >
              Initiate pilot
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              View operator brief
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
