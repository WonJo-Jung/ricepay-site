import Head from "next/head";
import Link from "next/link";
import {
  GettingStartedCTA,
  GettingStartedHero,
  SectionHeader,
  guideChapters,
} from "../components/GettingStartedGuide";

export default function GettingStartedPage() {
  return (
    <>
      <Head>
        <title>Getting Started with RICE Pay | RICE Pay</title>
        <meta
          name="description"
          content="Prepare your wallet, USDC, and network fee balance on Base before using RICE Pay."
        />
      </Head>

      <GettingStartedHero />

      <section className="bg-neutral-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Guide Chapters" title="Read the guide one part at a time">
            <p>Choose the section you need now. Each chapter opens as its own page with previous and next navigation.</p>
          </SectionHeader>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guideChapters.map((chapter) => (
              <Link
                key={chapter.slug}
                href={`/getting-started/${chapter.slug}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-green-500/40 hover:bg-green-500/10"
              >
                <p className="font-black text-green-400">{chapter.label}</p>
                <h2 className="mt-3 text-xl font-bold text-white">{chapter.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{chapter.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GettingStartedCTA />
    </>
  );
}
