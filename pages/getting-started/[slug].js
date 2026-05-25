import Head from "next/head";
import Link from "next/link";
import {
  ChapterContent,
  ChapterPager,
  getAdjacentChapters,
  getGuideChapter,
  guideChapters,
} from "../../components/GettingStartedGuide";

export default function GettingStartedChapterPage({ slug }) {
  const chapter = getGuideChapter(slug);
  const { previous, next } = getAdjacentChapters(slug);

  return (
    <>
      <Head>
        <title>{chapter.title} | Getting Started with RICE Pay</title>
        <meta name="description" content={chapter.summary} />
      </Head>

      <section className="bg-neutral-950 px-6 pb-20 pt-32 text-white">
        <article className="mx-auto max-w-6xl">
          <Link href="/getting-started" className="mb-8 inline-flex text-sm font-bold text-green-400 hover:text-green-300">
            Back to Getting Started
          </Link>

          <div className="glass-card rounded-3xl p-6 md:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-green-400">{chapter.eyebrow}</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">{chapter.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">{chapter.summary}</p>
            <div className="mt-8 border-t border-white/10 pt-8">
              <ChapterContent slug={slug} />
            </div>
          </div>

          <ChapterPager previous={previous} next={next} />
        </article>
      </section>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: guideChapters.map((chapter) => ({
      params: { slug: chapter.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
