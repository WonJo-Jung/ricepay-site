import { COMPANY_NAME, COMPANY_ADDRESS, SUPPORT_EMAIL } from "../constants";
import SocialLinks from "../components/SocialLinks";

export default function SupportPage() {
  return (
    <>
      <div className="legal-page">
        <div className="legal-container glass-card">
          <h1 className="text-white font-extrabold text-3xl mb-2">Support</h1>
          <p className="text-green-500 text-sm font-medium mb-8">RICE Pay Support Information</p>

          <div className="space-y-6 text-gray-400">
            <p>
            For support inquiries related to RICE Pay, please contact us at:
            </p>

            <p className="bg-white/5 p-4 rounded-2xl border border-white/10 inline-block">
            <strong>Email:</strong>{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-green-500 hover:underline">{SUPPORT_EMAIL}</a>
            </p>

            <h2 className="text-white text-xl font-bold mt-8">Company</h2>
            <p>
            {COMPANY_NAME}
            <br />
            {COMPANY_ADDRESS}
            </p>

            <h2 className="text-white text-xl font-bold mt-8">Typical Support Topics</h2>
            <ul className="list-disc pl-5 space-y-2">
            <li>Transaction status</li>
            <li>Failed transfers</li>
            <li>Fee questions</li>
            <li>Technical issues</li>
            </ul>

            <h2 className="text-white text-xl font-bold mt-8">Important Notice</h2>
            <p className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-orange-200/80">
              <p>RICE Pay is a non-custodial service.</p>
              <p>We do not hold or request user funds, private keys, or seed phrases.</p>
              <p>We never ask for funds, private keys, seed phrases, wallet passwords, or other sensitive information.</p>
              <p>If anyone claiming to be RICE Pay support team requests this information, please do not respond.</p>
            </p>
          </div>
        </div>
      </div>
      <SocialLinks />
    </>
  );
}
