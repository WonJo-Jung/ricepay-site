import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | RICE Pay</title>
        <meta
          name="description"
          content="Terms of Service for RICE Pay operated by Unitas Atlas Global LLC."
        />
      </Head>

      <main className="legal-page">
        <div className="legal-container">
          <h1>Terms of Service</h1>
          <p className="legal-updated">Last updated: March 19, 2026</p>

          <h2>1. Overview</h2>
          <p>
            RICE Pay is a non-custodial application that facilitates USDC
            transactions on Base Network.
          </p>
          <p>We do not hold, custody, or control user funds.</p>

          <h2>2. Non-Custodial Nature</h2>
          <p>Users retain full control of their wallets at all times.</p>
          <p>RICE Pay does not:</p>
          <ul>
            <li>Store private keys</li>
            <li>Store seed phrases</li>
            <li>Take custody of digital assets</li>
            <li>Execute transactions without user authorization</li>
          </ul>

          <h2>3. Service Scope</h2>
          <p>RICE Pay provides:</p>
          <ul>
            <li>A transaction interface</li>
            <li>Transaction routing support</li>
            <li>Fee calculation and display</li>
            <li>Transaction status information</li>
          </ul>

          <h2>4. Supported Asset and Network</h2>
          <ul>
            <li>USDC only</li>
            <li>Base Network only</li>
          </ul>

          <h2>5. Minimum Transfer Amount and Fees</h2>
          <p>Minimum transfer amount: 1 USDC</p>
          <p>RICE Pay fee:</p>
          <ul>
            <li>0.39% per transaction</li>
            <li>Minimum fee: 0.25 USDC</li>
            <li>Maximum fee: 3.9 USDC</li>
          </ul>
          <p>Separate blockchain network fees may also apply.</p>

          <h2>6. No Guarantee</h2>
          <p>We do not guarantee:</p>
          <ul>
            <li>Uninterrupted service</li>
            <li>Blockchain network availability</li>
            <li>Transaction completion</li>
            <li>Compatibility with all wallets or devices</li>
          </ul>

          <h2>7. User Responsibility</h2>
          <p>Users are solely responsible for:</p>
          <ul>
            <li>Wallet security</li>
            <li>Address accuracy</li>
            <li>Reviewing all transaction details</li>
            <li>
              Compliance with applicable laws and regulations in their
              jurisdiction
            </li>
          </ul>

          <h2>8. Prohibited Use</h2>
          <p>You may not use RICE Pay for:</p>
          <ul>
            <li>Illegal activity</li>
            <li>Sanctions evasion</li>
            <li>Fraud</li>
            <li>Money laundering</li>
            <li>Unauthorized or deceptive conduct</li>
          </ul>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Unitas Atlas Global LLC is
            not liable for:
          </p>
          <ul>
            <li>Loss of funds</li>
            <li>Failed or delayed blockchain transactions</li>
            <li>User error</li>
            <li>Third-party wallet failures</li>
            <li>Network congestion or smart contract failures</li>
          </ul>

          <h2>10. Changes</h2>
          <p>
            We may modify these Terms from time to time. Updated Terms will be
            posted with a revised &quot;Last updated&quot; date.
          </p>

          <h2>11. Contact</h2>
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