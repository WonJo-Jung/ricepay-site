import SocialLinks from "../components/SocialLinks";

const riceMeaning = [
  ["Reliable", "Dependable and trustworthy"],
  ["Instant", "Fast and efficient"],
  ["Crypto", "Built for digital assets"],
  ["Engine", "Infrastructure designed to power payments"],
];

const missionItems = ["Simple", "Fast", "Transparent", "Practical"];

const values = [
  {
    title: "Safety First",
    description: "RICE Pay is non-custodial. Users remain in control of their own wallets and assets.",
  },
  {
    title: "Transparency",
    description: "Fees and transaction flows should be clearly visible and understandable.",
  },
  {
    title: "Simplicity",
    description: "Crypto products should reduce friction instead of increasing complexity.",
  },
  {
    title: "User-Driven Development",
    description: "We build features based on practical user feedback and real usage patterns.",
  },
  {
    title: "Long-Term Thinking",
    description: "We are focused on sustainable infrastructure rather than short-term hype.",
  },
];

const roadmap = [
  ["Phase 1", "USDC transfers and payment-related features"],
  ["Phase 2", "Soft redirects to external on-ramp and off-ramp providers"],
  ["Phase 3", "A more Web2-friendly wallet experience designed for mainstream users"],
  ["Phase 4", "Integrated on-ramp and off-ramp features, where legally and operationally feasible"],
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-32 text-white">
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]"></div>
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-green-400">About RICE Pay</p>
            <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl">
              Simple, fast, and transparent USDC transfers on Base.
            </h1>
            <div className="space-y-5 text-lg leading-relaxed text-gray-300 md:text-xl">
              <p>RICE Pay is a non-custodial USDC transfer app built for Base.</p>
              <p>Our goal is to make crypto transfers simpler, more practical, and easier to understand for everyday users.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-green-400">What is RICE?</p>
            <h2 className="text-4xl font-bold tracking-tight">A name for practical crypto payment infrastructure.</h2>
          </div>
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {riceMeaning.map(([term, meaning]) => (
                <div key={term} className="glass-card rounded-2xl p-6">
                  <h3 className="mb-2 text-2xl font-black text-white">{term}</h3>
                  <p className="text-gray-400">{meaning}</p>
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed text-gray-300">
              RICE is not just the name of an app. It represents our broader vision of building practical crypto payment infrastructure.
              RICE Pay is the first product under that vision.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-green-400">Builder&apos;s Story</p>
            <h2 className="text-4xl font-bold tracking-tight">Built from a belief in dollar-backed stablecoin payments.</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>Hello, I&apos;m WonJo Jung, the builder and developer of RICE Pay.</p>
            <p>RICE Pay was not created because of a single personal inconvenience or a short-term trend. It was built because I believe dollar-backed stablecoins will become an important part of future global payment infrastructure.</p>
            <p>My interest in this area grew after watching the regulatory environment around dollar-backed stablecoins evolve in the United States, including the emergence of frameworks such as the GENIUS Act.</p>
            <p>To me, this shift signals that dollar-backed stablecoins are moving closer to mainstream financial systems and global digital commerce.</p>
            <p>Rather than starting with complex financial products, I decided to focus on a simpler and more practical problem first: making USDC transfers easier to use.</p>
            <p>RICE Pay combines ideas and features commonly found across existing crypto services, while trying to reduce unnecessary complexity and provide a cleaner user experience.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-neutral-950 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-green-400">Our Mission</p>
            <h2 className="mb-5 text-4xl font-bold tracking-tight">Making digital dollar transfers feel understandable and accessible.</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              RICE Pay is focused on building real-world infrastructure for the next generation of internet-based payments.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {missionItems.map((item) => (
              <div key={item} className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6 text-center text-xl font-black text-green-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-green-400">Our Values</p>
          <h2 className="mb-12 max-w-3xl text-4xl font-bold tracking-tight">The principles behind how we build.</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="glass-card rounded-2xl p-7">
                <h3 className="mb-3 text-xl font-bold text-white">{value.title}</h3>
                <p className="leading-relaxed text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-green-400">Roadmap</p>
            <h2 className="text-4xl font-bold tracking-tight">A phase-by-phase path for the broader RICE vision.</h2>
          </div>
          <div className="space-y-4">
            {roadmap.map(([phase, description]) => (
              <div key={phase} className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-[120px_1fr]">
                <div className="font-black text-green-400">{phase}</div>
                <div className="text-gray-300">{description}</div>
              </div>
            ))}
            <p className="pt-5 leading-relaxed text-gray-400">
              RICE Pay is the first step in the broader RICE vision. Future products may include additional payment infrastructure and dollar-backed stablecoin-related services, subject to regulation and licensing requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="glass-card rounded-3xl p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-green-400">Who We Are</p>
            <dl className="space-y-5 text-gray-300">
              <div>
                <dt className="text-sm uppercase tracking-[0.18em] text-gray-500">Company</dt>
                <dd className="mt-1 text-lg text-white">Unitas Atlas Global LLC (Wyoming, USA)</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.18em] text-gray-500">Founder & Builder & Developer</dt>
                <dd className="mt-1 flex items-center gap-3 text-lg text-white">
                  <span>WonJo Jung</span>
                  <a
                    href="https://www.linkedin.com/in/won-jo-jung-9662ba250/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition hover:text-white"
                  >
                    <i className="fa-brands fa-linkedin text-xl"></i>
                    <span className="sr-only">WonJo Jung on LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/WonJo-Jung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition hover:text-white"
                  >
                    <i className="fa-brands fa-github text-xl"></i>
                    <span className="sr-only">WonJo Jung on GitHub</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.18em] text-gray-500">Location</dt>
                <dd className="mt-1 text-lg text-white">Seoul & Remote</dd>
              </div>
              <div>
                <dt className="text-sm uppercase tracking-[0.18em] text-gray-500">Founded</dt>
                <dd className="mt-1 text-lg text-white">2025</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-orange-300">Important Notice</p>
            <div className="space-y-4 leading-relaxed text-orange-100/85">
              <p>RICE Pay is a non-custodial service.</p>
              <p>We do not hold or request user funds, private keys, or seed phrases.</p>
              <p>We never ask for funds, private keys, seed phrases, wallet passwords, or other sensitive information.</p>
              <p>If anyone claiming to be RICE Pay support team requests this information, please do not respond.</p>
            </div>
          </div>
        </div>
      </section>

      <SocialLinks />
    </>
  );
}
