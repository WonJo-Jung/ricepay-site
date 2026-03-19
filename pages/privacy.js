import Head from "next/head";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | RICE Pay</title>
        <meta
          name="description"
          content="Privacy Policy for RICE Pay operated by Unitas Atlas Global LLC."
        />
      </Head>

      <main className="legal-page">
        <div className="legal-container">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: March 19, 2026</p>

          <p>
            Unitas Atlas Global LLC (&quot;we&quot;, &quot;our&quot;,
            &quot;us&quot;) operates the RICE Pay application and website.
          </p>

          <p>
            We respect your privacy and are committed to protecting your
            information.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect the following information:</p>
          <ul>
            <li>Transaction ID</li>
            <li>Transaction hash</li>
            <li>Sender wallet address</li>
            <li>Recipient wallet address</li>
            <li>Push notification token</li>
            <li>Platform type</li>
          </ul>

          <p>We do not collect:</p>
          <ul>
            <li>Private keys</li>
            <li>Seed phrases</li>
            <li>Custodial wallet credentials</li>
          </ul>

          <h2>2. How We Use Information</h2>
          <p>We use collected data to:</p>
          <ul>
            <li>Process and display transaction records</li>
            <li>Provide transaction status updates</li>
            <li>Send service-related notifications</li>
            <li>Improve service reliability, fraud prevention, and security</li>
          </ul>

          <h2>3. Data Storage</h2>
          <p>
            We store transaction-related and operational data securely. We do
            not store private keys or seed phrases.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>We may use third-party services for:</p>
          <ul>
            <li>Blockchain infrastructure</li>
            <li>Push notification delivery</li>
            <li>Error monitoring and analytics</li>
            <li>Hosting and website delivery</li>
          </ul>

          <p>
            These providers may process limited data strictly as needed to
            operate the service.
          </p>

          <h2>5. Security</h2>
          <p>
            We implement reasonable administrative, technical, and
            organizational safeguards. However, no platform can guarantee
            absolute security.
          </p>

          <h2>6. Your Responsibility</h2>
          <ul>
            <li>Securing your wallet</li>
            <li>Verifying recipient wallet addresses</li>
            <li>Reviewing transaction details before approval</li>
          </ul>

          <h2>7. Children</h2>
          <p>
            RICE Pay is not directed to children under the age required by
            applicable law.
          </p>

          <h2>8. Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated
            version will be posted with a revised &quot;Last updated&quot; date.
          </p>

          <h2>9. Contact</h2>
          <p>
            Unitas Atlas Global LLC
            <br />
            30 N Gould St Ste R, Sheridan, WY 82801, USA
            <br />
            Email: support@ricepay.app
          </p>
        </div>
      </main>
    </>
  );
}