import Layout from "../components/Layout";
import "../styles/legal.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </Layout>
  );
}