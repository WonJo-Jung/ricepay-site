import { COMPANY_NAME, COMPANY_ADDRESS, SUPPORT_EMAIL } from "../constants";

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <div className="legal-container glass-card">
        <h1 className="text-white font-extrabold text-3xl mb-2">Privacy Policy</h1>
        <p className="text-green-500 text-sm font-medium mb-8">Last updated: March 19, 2026</p>

        <div className="space-y-6 text-gray-400">
          <p>
          {COMPANY_NAME} (&quot;we&quot;, &quot;our&quot;,
          &quot;us&quot;) operates the RICE Pay application and website.
          </p>

          <p>
          We respect your privacy and are committed to protecting your
          information.
          </p>

          <h2 className="text-white text-xl font-bold mt-8">1. Information We Collect</h2>
          <p>We collect the following information:</p>
          <ul className="list-disc pl-5 space-y-2">
          <li>Transaction ID</li>
          <li>Transaction hash</li>
          <li>Sender wallet address</li>
          <li>Recipient wallet address</li>
          <li>Push notification token</li>
          <li>Platform type</li>
          </ul>

          <p>We do not collect:</p>
          <ul className="list-disc pl-5 space-y-2 text-red-400/80">
          <li>Private keys</li>
          <li>Seed phrases</li>
          <li>Custodial wallet credentials</li>
          </ul>

          <h2 className="text-white text-xl font-bold mt-8">2. How We Use Information</h2>
          <p>We use collected data to:</p>
          <ul className="list-disc pl-5 space-y-2">
          <li>Process and display transaction records</li>
          <li>Provide transaction status updates</li>
          <li>Send service-related notifications</li>
          <li>Improve service reliability, fraud prevention, and security</li>
          </ul>

          <h2 className="text-white text-xl font-bold mt-8">3. Data Storage</h2>
          <p>
          We store transaction-related and operational data securely. We do
          not store private keys or seed phrases.
          </p>

          <h2 className="text-white text-xl font-bold mt-8">4. Third-Party Services</h2>
          <p>We may use third-party services for:</p>
          <ul className="list-disc pl-5 space-y-2">
          <li>Blockchain infrastructure</li>
          <li>Push notification delivery</li>
          <li>Error monitoring and analytics</li>
          <li>Hosting and website delivery</li>
          </ul>

          <p>
          These providers may process limited data strictly as needed to
          operate the service.
          </p>

          <h2 className="text-white text-xl font-bold mt-8">5. Security</h2>
          <p>
          We implement reasonable administrative, technical, and
          organizational safeguards. However, no platform can guarantee
          absolute security.
          </p>

          <h2 className="text-white text-xl font-bold mt-8">6. Your Responsibility</h2>
          <ul className="list-disc pl-5 space-y-2">
          <li>Securing your wallet</li>
          <li>Verifying recipient wallet addresses</li>
          <li>Reviewing transaction details before approval</li>
          </ul>

          <h2 className="text-white text-xl font-bold mt-8">7. Children</h2>
          <p>
          RICE Pay is not directed to children under the age required by
          applicable law.
          </p>

          <h2 className="text-white text-xl font-bold mt-8">8. Changes</h2>
          <p>
          We may update this Privacy Policy from time to time. The updated
          version will be posted with a revised &quot;Last updated&quot; date.
          </p>

          <h2 className="text-white text-xl font-bold mt-8">9. Contact</h2>
          <p>
          {COMPANY_NAME}
          <br />
          {COMPANY_ADDRESS}
          <br />
          Email: <a href={`mailto:${SUPPORT_EMAIL}`} className="text-green-500 hover:underline">{SUPPORT_EMAIL}</a>
          </p>
        </div>
      </div>
    </div>
  );
}