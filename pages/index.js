import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
        <p>Fast, simple, non-custodial USDC transfers on Base Network.</p>
        <p>RICE Pay enables users to send USDC directly from their own wallets.</p>
        <p>We do not hold or custody user funds.</p>

        <p>Contact: support@ricepay.app</p>

        <a href="/privacy">Privacy Policy</a>
        <a href="/terms"><br></br><br></br>Terms of Service</a>
        <a href="/support"><br></br><br></br>Support</a>

        <SpeedInsights />
        <Analytics />
      </main>
    </>
  );
}