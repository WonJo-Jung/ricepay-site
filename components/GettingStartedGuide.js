import Link from "next/link";
import { APP_STORE_LINK } from "../constants";
import SocialLinks from "./SocialLinks";

const requirements = [
  {
    title: "1. A personal crypto wallet",
    body: [
      "You need a compatible personal wallet that supports Base, USDC, and ETH on Base.",
      "Common examples include MetaMask and Trust Wallet. These are examples only. RICE Pay does not recommend, endorse, or guarantee any specific wallet provider.",
    ],
  },
  {
    title: "2. Prepare USDC and ETH on Base",
    body: [
      "RICE Pay is designed for USDC transfers on Base.",
      "USDC can exist on multiple networks, such as Ethereum, Base, Polygon, Arbitrum, Solana, and others. For RICE Pay, make sure your USDC is on Base.",
      "Even when you send USDC, your wallet may need a small amount of ETH on Base to pay the blockchain network fee, also known as a gas fee.",
      "Think of this fee like a small digital stamp. It helps the blockchain network deliver your USDC transaction to its destination.",
      "Base network fees are usually very small, often only a few cents per transfer. Having just $1 to $2 worth of ETH in your wallet is usually more than enough to cover multiple transfers. However, network fees can change depending on network conditions.",
    ],
  },
  {
    title: "3. The recipient's wallet address",
    body: [
      "To send USDC, you need the recipient's wallet address.",
      "Make sure the recipient can receive USDC on Base. If the recipient gives you an exchange deposit address, confirm that the exchange supports USDC deposits on Base.",
    ],
  },
];

const safetyNotes = [
  "RICE Pay will never ask for your seed phrase, recovery phrase, or private key.",
  "Do not enter your seed phrase or private key into RICE Pay.",
  "Always download wallet apps from official sources.",
  "Always check that your USDC is on Base.",
  "Always keep a small amount of ETH on Base for blockchain network fees.",
  "Consider sending a small test transfer first.",
];

const walletSetup = [
  "Use official app stores or official wallet websites.",
  "Be careful of fake apps, search ads, phishing links, and impersonation accounts.",
  "Back up your recovery phrase safely.",
  "Never store your recovery phrase in screenshots, cloud storage, email, or messaging apps.",
  "Never share your recovery phrase with anyone.",
  "Confirm that the wallet supports Base, USDC, and ETH on Base.",
];

const baseChecks = [
  "Your selected network is Base.",
  "The token you want to send is USDC on Base.",
  "You have a small amount of ETH on Base for blockchain network fees.",
  "Your wallet can send and receive assets on Base.",
  "The recipient can receive USDC on Base.",
];

const fundingOptions = [
  {
    title: "Option A - Receive USDC or ETH from another wallet",
    intro: "You may receive USDC on Base or ETH on Base from another personal wallet.",
    bullets: [
      "Confirm your wallet address.",
      "Confirm that the sender is using the Base network.",
      "Confirm that your wallet can display and manage USDC and ETH on Base.",
      "Consider receiving a small test amount first.",
    ],
  },
  {
    title: "Option B - Withdraw from a crypto exchange",
    intro: "Some crypto exchanges may allow users to buy or withdraw USDC and ETH to a personal wallet.",
    bullets: [
      "Check whether the exchange supports withdrawals on Base.",
      "Select Base as the withdrawal network if available.",
      "Confirm the withdrawal fee.",
      "Confirm the minimum withdrawal amount.",
      "Confirm the destination address is your personal wallet address.",
      "Consider sending a small test amount first.",
    ],
    note: "Exchange support for Base, USDC, ETH, withdrawal fees, and minimum withdrawal amounts can change. Always confirm the latest details inside the exchange before making a transfer.",
  },
  {
    title: "Option C - Use an on-ramp provider",
    intro: "Some wallets or third-party providers may allow users to buy USDC or ETH using local payment methods such as card, bank transfer, or other supported payment rails.",
    bullets: [
      "Check whether it supports Base.",
      "Check whether it supports USDC on Base or ETH on Base.",
      "Check whether it supports your country or region.",
      "Review all fees before confirming.",
      "Confirm the destination wallet address.",
      "Confirm the network before purchasing.",
      "Review the provider's terms, limits, and verification requirements.",
    ],
    note: "Availability, fees, limits, identity verification requirements, payment methods, and supported networks may vary by provider and region. RICE Pay does not control third-party exchanges, wallets, bridges, or on-ramp services.",
  },
  {
    title: "Option D - Bridge assets to Base",
    intro: "Some users may already have USDC or ETH on another blockchain network. In that case, they may need to move assets to Base through a supported bridge, wallet, exchange, or other third-party service before using RICE Pay.",
    bullets: [
      "Confirm that the bridge or service supports Base.",
      "Confirm the asset and network on both sides of the bridge.",
      "Review all fees before confirming.",
      "Confirm the destination wallet address.",
      "Consider testing with a small amount first.",
      "Understand that bridge transactions may involve third-party risks.",
    ],
    note: "RICE Pay does not operate or control third-party bridges.",
  },
];

const ricePayFlow = [
  "Open RICE Pay.",
  "Use the wallet connection flow supported by the RICE Pay app.",
  "Select or enter the recipient's wallet address.",
  "Enter the USDC amount.",
  "Review the transfer details, RICE Pay fee, and blockchain network fee.",
  "Confirm the transaction through your own wallet.",
  "Check your activity history after completion.",
];

const testTransferChecks = [
  "The recipient address is correct.",
  "The recipient can receive USDC on Base.",
  "Your wallet is connected correctly.",
  "You have enough ETH on Base to pay the blockchain network fee.",
  "The transaction flow works as expected.",
  "You understand the total fee before sending more.",
];

const finalChecklist = [
  {
    title: "Wallet and network",
    bullets: [
      "Is your wallet connected correctly?",
      "Is your selected network Base?",
      "Is your USDC on Base?",
      "Do you have enough ETH on Base for the blockchain network fee?",
      "Are you using official wallet apps or official wallet websites?",
    ],
  },
  {
    title: "Recipient and amount",
    bullets: [
      "Is the recipient address correct?",
      "Can the recipient receive USDC on Base?",
      "If the recipient uses an exchange address, does that exchange support USDC deposits on Base?",
      "Have you reviewed the USDC amount?",
      "Are you sending a small test transfer first?",
    ],
  },
  {
    title: "Fees and third-party services",
    bullets: [
      "Have you reviewed the RICE Pay fee?",
      "Have you reviewed the blockchain network fee?",
      "Have you checked any exchange, on-ramp, bridge, or wallet fees?",
      "Have you checked minimum withdrawal or transfer limits?",
    ],
  },
  {
    title: "Security",
    bullets: [
      "Did anyone ask for your seed phrase, recovery phrase, or private key?",
      "Are you sure you are not using a fake wallet app, fake website, or impersonation account?",
      "Did you stop and double-check if something looked unusual?",
    ],
  },
];

const faqs = [
  ["Do I need a crypto wallet to use RICE Pay?", "Yes. RICE Pay is non-custodial, so you use your own personal crypto wallet."],
  ["Does RICE Pay hold my money?", "No. RICE Pay does not custody user funds. Your assets remain in your own wallet."],
  ["Will RICE Pay ask for my seed phrase or private key?", "No. RICE Pay will never ask for your seed phrase, recovery phrase, or private key. Do not enter your seed phrase or private key into RICE Pay or any website claiming to be RICE Pay."],
  ["What network does RICE Pay use?", "RICE Pay is designed for USDC transfers on Base."],
  ["Can I send USDC without ETH?", "Usually, no. Even if you are sending USDC, your wallet may need a small amount of ETH on Base to pay the blockchain network fee. Because RICE Pay is non-custodial, the transaction is confirmed through your own wallet. Your wallet needs ETH on Base to pay the network fee required by the Base network."],
  ["How much ETH on Base do I need for network fees?", "Base network fees are usually very small, often only a few cents per transfer. In many cases, keeping about $1-2 worth of ETH on Base may be enough for multiple transfers. However, fees can change depending on network conditions, so always check the fee shown in your wallet before confirming."],
  ["Can I use ETH from Ethereum mainnet to pay Base network fees?", "Not directly. ETH used for Base network fees must be available on the Base network. ETH on Ethereum mainnet is not automatically the same as ETH on Base for paying Base blockchain network fees."],
  ["Can I use USDC on Ethereum, Polygon, Arbitrum, Solana, or another network?", "For RICE Pay's Base transfer flow, you need USDC on Base. USDC on other networks may not work for this flow."],
  ["What happens if I send funds to the wrong address?", "Blockchain transactions are usually not reversible. Once it goes to the wrong destination, it may be difficult or impossible to recover. Always double-check the recipient address before confirming."],
  ["Can RICE Pay recover funds sent to the wrong address?", "Generally, no. Since RICE Pay is non-custodial and blockchain transactions are usually not reversible, RICE Pay may not be able to recover funds sent to the wrong address."],
  ["What is the minimum test transfer?", "Current RICE Pay minimum transfer amount is 1 USDC."],
  ["Does RICE Pay control Base network fees?", "No. Network fees are determined by the Base network and may vary depending on network conditions. RICE Pay does not control Base blockchain network fees."],
  ["Does RICE Pay recommend a specific wallet, exchange, bridge, or on-ramp provider?", "No. RICE Pay may mention common examples for educational purposes, but users should review each provider's availability, fees, risks, supported networks, and terms before using it."],
  ["Can I buy USDC directly through RICE Pay?", "This depends on the current features available in the RICE Pay app and the region where you are using it. If third-party on-ramp options are available, review the provider's fees, limits, verification requirements, and supported networks before using them."],
  ["Why does my country or payment method matter?", "Wallets, exchanges, bridges, and on-ramp providers may support different countries, currencies, payment methods, identity verification requirements, and networks. A method that works in one country may not work in another."],
  ["Is this guide investment advice?", "No. This guide is not investment advice. It is only a preparation guide for users who want to use RICE Pay."],
];

export const guideChapters = [
  {
    slug: "before-you-start",
    label: "Before You Start",
    eyebrow: "Before You Start",
    title: "What You Need Before You Start",
    summary: "Wallet, USDC, ETH, and recipient address.",
  },
  {
    slug: "safety",
    label: "Safety",
    eyebrow: "Safety",
    title: "Important Safety Note",
    summary: "Key rules before confirming any transfer.",
  },
  {
    slug: "wallet",
    label: "Step 1",
    eyebrow: "Step 1",
    title: "Install a Compatible Personal Wallet",
    summary: "Choose a personal wallet that supports Base, USDC, and ETH on Base.",
  },
  {
    slug: "base",
    label: "Step 2",
    eyebrow: "Step 2",
    title: "Make Sure Your Wallet Uses Base",
    summary: "Confirm your wallet is using the Base network.",
  },
  {
    slug: "funding",
    label: "Step 3",
    eyebrow: "Step 3",
    title: "Prepare USDC and a Small Network Fee Balance on Base",
    summary: "Prepare USDC on Base and ETH on Base for network fees.",
  },
  {
    slug: "send",
    label: "Step 4",
    eyebrow: "Step 4",
    title: "Send with RICE Pay",
    summary: "Review the transfer flow before confirming in your wallet.",
  },
  {
    slug: "test-transfer",
    label: "Step 5",
    eyebrow: "Step 5",
    title: "Send a Small Test Transfer First",
    summary: "Use a small transfer to confirm the address, network, and flow.",
  },
  {
    slug: "checklist",
    label: "Final Checklist",
    eyebrow: "Final Checklist",
    title: "Avoid These Common Mistakes",
    summary: "Run through these checks before confirming a USDC transfer.",
  },
  {
    slug: "faq",
    label: "FAQ",
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    summary: "Common questions about wallets, Base, USDC, ETH fees, and RICE Pay.",
  },
];

export function getGuideChapter(slug) {
  return guideChapters.find((chapter) => chapter.slug === slug);
}

export function getAdjacentChapters(slug) {
  const index = guideChapters.findIndex((chapter) => chapter.slug === slug);
  return {
    previous: index > 0 ? guideChapters[index - 1] : null,
    next: index >= 0 && index < guideChapters.length - 1 ? guideChapters[index + 1] : null,
  };
}

export function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-green-400">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {children && <div className="mt-5 space-y-4 text-lg leading-relaxed text-gray-300">{children}</div>}
    </div>
  );
}

function BulletList({ items, accent = "text-gray-300" }) {
  return (
    <ul className={`list-disc space-y-2 pl-5 leading-relaxed ${accent}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function GettingStartedHero() {
  return (
    <section className={`relative overflow-hidden px-6 pb-20 pt-32 text-white`}>
      <div className="absolute left-1/2 top-0 -z-10 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-green-900/20 blur-[120px]"></div>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-green-400">Getting Started</p>
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl">Getting Started with RICE Pay</h1>
          <div className="space-y-5 text-lg leading-relaxed text-gray-300 md:text-xl">
            <p>Prepare your wallet, USDC, and network fee balance on Base.</p>
            <p>RICE Pay is built for simple, practical USDC transfers on Base.</p>
            <p>
              RICE Pay is non-custodial. This means RICE Pay does not hold your funds. Your assets stay in your own
              wallet, and your wallet is responsible for confirming blockchain transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GettingStartedCTA() {
  return (
    <>
      <section className="px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl rounded-[3rem] border border-green-500/30 bg-green-500/10 p-10 md:p-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-green-300">Ready to Use RICE Pay?</p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight">Use RICE Pay for non-custodial USDC transfers.</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-300">
            Once your wallet is ready, your USDC is on Base, and you have a small amount of ETH on Base for blockchain
            network fees, RICE Pay is built to make crypto payments feel simple, practical, and transparent.
          </p>
          <a
            href={APP_STORE_LINK}
            className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-xl font-bold text-black transition hover:bg-green-500"
          >
            Download on the App Store
          </a>
          <p className="mt-8 text-sm text-gray-400">Reliable Instant Crypto Engine for everyday crypto payments.</p>
        </div>
      </section>
      <SocialLinks />
    </>
  );
}

export function ChapterContent({ slug }) {
  if (slug === "before-you-start") {
    return (
      <>
        <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white p-2">
          <img
            src="/images/getting-started-before-you-start.png"
            alt="Getting Started with RICE Pay summary showing the three things to prepare before a USDC transfer: a personal wallet, USDC and ETH on Base, and the recipient address."
            className="h-auto w-full rounded-[1.25rem]"
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {requirements.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
              <div className="space-y-4 leading-relaxed text-gray-400">
                {item.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (slug === "safety") {
    return (
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4 text-lg leading-relaxed text-gray-300">
          <p>
            Crypto transfers are different from bank transfers. A helpful way to think about blockchain transfers is like
            sending physical cash. Once it is sent to the wrong person or address, it may be difficult or impossible to
            reverse.
          </p>
          <p>If you follow the basic checks in this guide, using RICE Pay can be much easier and safer.</p>
        </div>
        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-orange-300">Always Remember</p>
          <BulletList items={safetyNotes} accent="text-orange-100/85" />
          <p className="mt-6 text-sm leading-relaxed text-orange-100/70">
            RICE Pay does not provide investment, financial, legal, or tax advice. This guide is only intended to help
            users prepare a wallet, USDC, and network fee balance for using RICE Pay.
          </p>
        </div>
      </div>
    );
  }

  if (slug === "wallet") {
    return (
      <>
        <div className="mb-7 space-y-4 text-lg leading-relaxed text-gray-300">
          <p>To use RICE Pay, you need a compatible personal crypto wallet that supports Base.</p>
          <p>Common wallet examples include MetaMask and Trust Wallet. These are mentioned for general educational purposes only.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="mb-4 text-xl font-bold text-white">When choosing or installing a wallet</h3>
            <BulletList items={walletSetup} />
          </div>
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-red-100/85">
            <p className="text-lg font-bold text-red-200">Your recovery phrase is the key to your wallet.</p>
            <p className="mt-4 leading-relaxed">
              Anyone with access to it may be able to control your assets. RICE Pay will never ask for your recovery
              phrase, seed phrase, or private key.
            </p>
          </div>
        </div>
      </>
    );
  }

  if (slug === "base") {
    return (
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4 text-lg leading-relaxed text-gray-300">
          <p>Base is the blockchain network used by RICE Pay for USDC transfers.</p>
          <p>Most widely used crypto wallets support Base, but the exact steps may vary by wallet, device, region, and app version.</p>
          <p>Always follow the latest official instructions from your wallet provider.</p>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="mb-4 text-xl font-bold text-white">Before using RICE Pay, check that</h3>
            <BulletList items={baseChecks} />
          </div>
          <p className="rounded-2xl border border-white/10 bg-black/20 p-6 leading-relaxed text-gray-300">
            Do not assume that all USDC or ETH is the same across networks. USDC or ETH on Ethereum, Polygon, Arbitrum,
            Solana, or another network may not be usable in RICE Pay's Base transfer flow unless it is moved or bridged
            to Base through a supported method.
          </p>
        </div>
      </div>
    );
  }

  if (slug === "funding") {
    return (
      <>
        <div className="mb-7 space-y-4 text-lg leading-relaxed text-gray-300">
          <p>
            To use RICE Pay, you need USDC on Base in your personal wallet. You may also need a small amount of ETH on
            Base to pay the blockchain network fee.
          </p>
          <p>There are several ways users may prepare USDC and ETH on Base.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {fundingOptions.map((option) => (
            <details key={option.title} className="group rounded-2xl border border-white/10 bg-white/[0.03]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{option.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{option.intro}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 px-3 py-2 text-green-400 transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="border-t border-white/10 px-6 pb-6 pt-5">
                <BulletList items={option.bullets} />
                {option.note && <p className="mt-5 text-sm leading-relaxed text-gray-500">{option.note}</p>}
              </div>
            </details>
          ))}
        </div>
      </>
    );
  }

  if (slug === "send") {
    return (
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="space-y-4 text-lg leading-relaxed text-gray-300">
          <p>Once your wallet is ready and you have USDC on Base, you can use RICE Pay to prepare a transfer.</p>
          <p>
            RICE Pay is designed to make USDC transfers more practical by helping users manage transfer details,
            recipients, fees, activity history, and notifications.
          </p>
          <p>Because RICE Pay is non-custodial, the final transaction confirmation happens through your own wallet.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="mb-5 text-xl font-bold text-white">A typical RICE Pay transfer flow may include</h3>
          <ol className="space-y-3">
            {ricePayFlow.map((step, index) => (
              <li key={step} className="grid grid-cols-[42px_1fr] gap-4 text-gray-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-sm font-black text-black">
                  {index + 1}
                </span>
                <span className="pt-1.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-sm leading-relaxed text-red-100/80">
            RICE Pay does not require you to enter your seed phrase, recovery phrase, or private key. If any website,
            app, or account asks for those details, do not provide them.
          </p>
        </div>
      </div>
    );
  }

  if (slug === "test-transfer") {
    return (
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4 text-lg leading-relaxed text-gray-300">
          <p>Before sending a larger amount, consider sending a small test transfer first.</p>
          <p className="font-bold text-green-300">Current RICE Pay minimum transfer amount: 1 USDC.</p>
          <p>After the test transfer is completed and confirmed by the recipient, you can decide whether to send a larger amount.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="mb-4 text-xl font-bold text-white">A small test transfer can help you confirm that</h3>
          <BulletList items={testTransferChecks} />
        </div>
      </div>
    );
  }

  if (slug === "checklist") {
    return (
      <>
        <div className="grid gap-5 md:grid-cols-2">
          {finalChecklist.map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-4 text-xl font-bold text-white">{group.title}</h3>
              <BulletList items={group.bullets} />
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6 text-orange-100/85">
          If something looks wrong, stop and check before confirming the transaction.
        </p>
      </>
    );
  }

  if (slug === "faq") {
    return (
      <div className="space-y-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="rounded-2xl border border-white/10 bg-black/20">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-5 font-bold text-white">
              {question}
              <span className="font-normal text-green-500">▼</span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-gray-400">{answer}</p>
          </details>
        ))}
      </div>
    );
  }

  return null;
}

export function ChapterPager({ previous, next }) {
  return (
    <nav className="mt-12 grid gap-4 sm:grid-cols-2">
      {previous ? (
        <Link
          href={`/getting-started/${previous.slug}`}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:border-green-500/40 hover:bg-green-500/10"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500">Previous</p>
          <p className="mt-2 text-lg font-bold text-white">{previous.label}</p>
          <p className="mt-1 text-sm text-gray-400">{previous.title}</p>
        </Link>
      ) : (
        <Link
          href="/getting-started"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:border-green-500/40 hover:bg-green-500/10"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500">Back</p>
          <p className="mt-2 text-lg font-bold text-white">Guide Overview</p>
          <p className="mt-1 text-sm text-gray-400">Return to all getting started chapters.</p>
        </Link>
      )}

      {next ? (
        <Link
          href={`/getting-started/${next.slug}`}
          className="rounded-2xl border border-green-500/30 bg-green-500/10 p-5 text-right transition hover:bg-green-500/20"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-300">Next</p>
          <p className="mt-2 text-lg font-bold text-white">{next.label}</p>
          <p className="mt-1 text-sm text-gray-300">{next.title}</p>
        </Link>
      ) : (
        <Link
          href="/getting-started"
          className="rounded-2xl border border-green-500/30 bg-green-500/10 p-5 text-right transition hover:bg-green-500/20"
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-300">Done</p>
          <p className="mt-2 text-lg font-bold text-white">Back to Overview</p>
          <p className="mt-1 text-sm text-gray-300">Review all chapters again.</p>
        </Link>
      )}
    </nav>
  );
}
