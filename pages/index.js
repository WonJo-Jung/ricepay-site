import { APP_STORE_LINK } from "../constants";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-900/20 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white">
            Simple USDC Transfers <br /><span className="accent-gradient">on Base</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            A non-custodial app for sending USDC on Base with clearer recipient confirmation, transparent capped fees, and no custodial balance held by the app.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-500 text-black px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition" onClick={() => window.open(APP_STORE_LINK)}>
              <i className="fab fa-apple"></i> Download on App Store
            </button>
            <a href="#how-it-works" className="glass-card px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition flex items-center justify-center text-white">
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-8 rounded-3xl">
            <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center mb-6"><i className="fas fa-paper-plane text-white"></i></div>
            <h3 className="text-xl font-bold mb-3 text-white">Send USDC</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Simple transfer flow designed for clarity on the Base network.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl">
            <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center mb-6"><i className="fas fa-address-book text-white"></i></div>
            <h3 className="text-xl font-bold mb-3 text-white">Save Recipients</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Reduce repeated copy-and-paste. Confirm exactly who you are sending to.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl">
            <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center mb-6"><i className="fas fa-receipt text-white"></i></div>
            <h3 className="text-xl font-bold mb-3 text-white">Capped Fees</h3>
            <p className="text-gray-400 text-sm leading-relaxed">0.39% transfer fee. Min 0.25 USDC, Max 3.9 USDC. No surprises.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl">
            <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center mb-6"><i className="fas fa-shield text-white"></i></div>
            <h3 className="text-xl font-bold mb-3 text-white">Non-Custodial</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Design that puts you in control. We never hold your balances.</p>
          </div>
        </div>
      </section>

      {/* Fee & Security Deep Dive */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center text-white">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Non-Custodial by Design</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              RICE Pay does not hold your funds. Your assets are not stored inside the app. We provide a simpler transfer experience while you stay in full control.
            </p>
            <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
              <p className="text-sm text-red-400">⚠️ You remain responsible for verifying recipient details and confirming transactions before sending.</p>
            </div>
          </div>
          <div className="glass-card p-10 rounded-[3rem] border-green-500/20">
            <h2 className="text-3xl font-bold mb-8">Transparent Fees</h2>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">Transfer Fee</span>
                <span className="font-bold">0.39%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-gray-400">Minimum Fee</span>
                <span className="font-bold">0.25 USDC</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4 text-green-400">
                <span className="">Maximum Fee (Cap)</span>
                <span className="font-bold">3.9 USDC</span>
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-500">* Network fees may apply depending on the transaction.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 max-w-5xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-16">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="text-5xl font-black text-white/10">01</div>
            <h3 className="text-xl font-bold text-green-400">Connect Wallet</h3>
            <p className="text-gray-400">Accept the connection request from RICE Pay to link your hot wallet. Once connected, you can manage and save recipient details.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-black text-white/10">02</div>
            <h3 className="text-xl font-bold text-green-400">Select Recipient</h3>
            <p className="text-gray-400">Save information to reduce repeated address copy-and-paste.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-black text-white/10">03</div>
            <h3 className="text-xl font-bold text-green-400">Review Fees</h3>
            <p className="text-gray-400">See amount and fees clearly before you confirm the transfer.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-black text-white/10">04</div>
            <h3 className="text-xl font-bold text-green-400">Send on Base</h3>
            <p className="text-gray-400">Confirm the transaction and complete the transfer instantly.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-neutral-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">FAQ</h2>
          <div className="space-y-4">
            <details className="glass-card rounded-2xl group text-white">
              <summary className="p-6 cursor-pointer font-bold list-none flex justify-between items-center">
                Does RICE Pay hold my funds?
                <span className="group-open:rotate-180 transition-transform font-normal text-green-500">▼</span>
              </summary>
              <p className="p-6 pt-0 text-gray-400">No. RICE Pay is designed as a non-custodial app and does not hold user balances.</p>
            </details>
            <details className="glass-card rounded-2xl group text-white">
              <summary className="p-6 cursor-pointer font-bold list-none flex justify-between items-center">
                Which network does RICE Pay support?
                <span className="group-open:rotate-180 transition-transform font-normal text-green-500">▼</span>
              </summary>
              <p className="p-6 pt-0 text-gray-400">RICE Pay currently supports USDC transfers on Base.</p>
            </details>
            <details className="glass-card rounded-2xl group text-white">
              <summary className="p-6 cursor-pointer font-bold list-none flex justify-between items-center">
                Is RICE Pay audited?
                <span className="group-open:rotate-180 transition-transform font-normal text-green-500">▼</span>
              </summary>
              <p className="p-6 pt-0 text-gray-400">RICE Pay is an early-stage app and has not completed a third-party security audit yet. Users should start with small amounts.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto glass-card p-16 rounded-[3rem] border-green-500/30 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to simplify your transfers?</h2>
          <p className="text-gray-400 mb-10 text-lg">Start with simple non-custodial USDC transfers on Base today.</p>
          <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-500 transition" onClick={() => window.open(APP_STORE_LINK)}>
            Download on the App Store
          </button>
        </div>
      </section>

      <SocialLinks />
    </>
  );
}
