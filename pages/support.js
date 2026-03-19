import Head from "next/head";

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support | RICE Pay</title>
        <meta
          name="description"
          content="Support information for RICE Pay."
        />
      </Head>

      <main className="legal-page">
        <div className="legal-container">
          <h1>Support</h1>
          <p className="legal-updated">RICE Pay Support Information</p>

          <p>
            For support inquiries related to RICE Pay, please contact us at:
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@ricepay.app">support@ricepay.app</a>
          </p>

          <h2>Company</h2>
          <p>
            Unitas Atlas Global LLC
            <br />
            30 N Gould St Ste R, Sheridan, WY 82801, USA
          </p>

          <h2>Typical Support Topics</h2>
          <ul>
            <li>Transaction status</li>
            <li>Failed transfers</li>
            <li>Fee questions</li>
            <li>Technical issues</li>
          </ul>

          <h2>Important Notice</h2>
          <p>
            RICE Pay is a non-custodial service. We do not hold user funds,
            private keys, or seed phrases.
          </p>
        </div>
      </main>
    </>
  );
}