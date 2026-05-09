import { COMPANY_NAME, COMPANY_ADDRESS, SUPPORT_EMAIL } from "../constants";

export default function TermsPage() {
  return (
    <div className="legal-page">
      <div className="legal-container glass-card">
        <h1 className="text-white font-extrabold text-3xl mb-2">Terms of Service</h1>
        <p className="text-green-500 text-sm font-medium mb-8">Last updated: March 19, 2026</p>

        <div className="space-y-6 text-gray-400">
          <h2 className="text-white text-xl font-bold mt-8">1. Overview</h2>
          <p>
          RICE Pay is a non-custodial application that facilitates USDC
          transactions on Base Network.
          </p>
          <p>We do not hold, custody, or control user funds.</p>

          <h2 className="text-white text-xl font-bold mt-8">2. Non-Custodial Nature</h2>
          <p>Users retain full control of their wallets at all times.</p>
          <p>RICE Pay does not:</p>
          <ul className="list-disc pl-5 space-y-2">
          <li>Store private keys</li>
          <li>Store seed phrases</li>
          <li>Take custody of digital assets</li>
          <li>Execute transactions without user authorization</li>
          </ul>

          <h2 className="text-white text-xl font-bold mt-8">3. Service Scope</h2>
          <p>RICE Pay provides:</p>
          <ul className="list-disc pl-5 space-y-2">
          <li>A transaction interface</li>
          <li>Transaction routing support</li>
          <li>Fee calculation and display</li>
          <li>Transaction status information</li>
          </ul>

          <h2 className="text-white text-xl font-bold mt-8">4. Supported Asset and Network</h2>
          <ul className="list-disc pl-5 space-y-2">
          <li>USDC only</li>
          <li>Base Network only</li>
          </ul>

          <h2 className="text-white text-xl font-bold mt-8">5. Minimum Transfer Amount and Fees</h2>
          <p>Minimum transfer amount: 1 USDC</p>
          <p>RICE Pay fee:</p>
          <ul className="list-disc pl-5 space-y-2 text-green-400/90">
          <li>0.39% per transaction</li>
          <li>Minimum fee: 0.25 USDC</li>
          <li>Maximum fee: 3.9 USDC</li>
          </ul>
          <p>Separate blockchain network fees may also apply.</p>

          <h2 className="text-white text-xl font-bold mt-8">6. No Guarantee</h2>
          <p>We do not guarantee:</p>
          <ul className="list-disc pl-5 space-y-2 text-orange-300/70">
          <li>Uninterrupted service</li>
          <li>Blockchain network availability</li>
          <li>Transaction completion</li>
          <li>Compatibility with all wallets or devices</li>
          </ul>

          <h2 className="text-white text-xl font-bold mt-8">7. User Responsibility</h2>
          <p>Users are solely responsible for:</p>
          <ul className="list-disc pl-5 space-y-2">
          <li>Wallet security</li>
          <li>Address accuracy</li>
          <li>Reviewing all transaction details</li>
          <li>
            Compliance with applicable laws and regulations in their
            jurisdiction
          </li>
          </ul>

          <h2 className="text-white text-xl font-bold mt-8">8. Prohibited Use</h2>
          <p>You may not use RICE Pay for:</p>
          <ul className="list-disc pl-5 space-y-2 text-red-400/80">
          <li>Illegal activity</li>
          <li>Sanctions evasion</li>
          <li>Fraud</li>
          <li>Money laundering</li>
          <li>Unauthorized or deceptive conduct</li>
          </ul>

          <h2 className="text-white text-xl font-bold mt-8">9. Limitation of Liability</h2>
          <p>
          To the maximum extent permitted by law, {COMPANY_NAME} is
          not liable for:
          </p>
          <ul className="list-disc pl-5 space-y-2">
          <li>Loss of funds</li>
          <li>Failed or delayed blockchain transactions</li>
          <li>User error</li>
          <li>Third-party wallet failures</li>
          <li>Network congestion or smart contract failures</li>
          </ul>

          <h2 className="text-white text-xl font-bold mt-8">10. Changes</h2>
          <p>
          We may modify these Terms from time to time. The updated Terms will be
          posted with a revised &quot;Last updated&quot; date.
          </p>

          <h2 className="text-white text-xl font-bold mt-8">11. Contact</h2>
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