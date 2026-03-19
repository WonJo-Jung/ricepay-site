import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RICE Pay</title>
        <meta
          name="description"
          content="RICE Pay official website."
        />
      </Head>

      <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
        <h1>RICE Pay</h1>
        <p>Fast and simple USDC transfers on Base.</p>

        <p><a href="/privacy">Privacy Policy</a></p>
        <p><a href="/terms">Terms of Service</a></p>
        <p><a href="/support">Support</a></p>
      </main>
    </>
  );
}