import Head from "next/head";

const CONTRACT_ADDRESS = "0x1dD8667e22F9fAb8C2Be7E2021fAE0C8FB5457Ba";
const BASESCAN_URL = `https://basescan.org/address/${CONTRACT_ADDRESS}#code`;
const GITHUB_SOURCE_URL =
  "https://github.com/WonJo-Jung/RICEpay_web/tree/9d2201ff52bb2fe4582e44e9223ac3add828f756/packages/contracts";

export default function TransparencyPage() {
  return (
    <>
      <Head>
        <title>RICE Pay Transparency</title>
        <meta
          name="description"
          content="Public contract information for RICE Pay's non-custodial USDC transfer router."
        />
      </Head>

      <div className="legal-page">
        <div className="legal-container glass-card">
          <h1 className="text-white font-extrabold text-3xl mb-2">RICE Pay Transparency</h1>
          <p className="text-gray-400 mb-8">
            Public contract information for RICE Pay&apos;s non-custodial USDC transfer router.
          </p>

          <div className="space-y-6 text-gray-400">
            <h2 className="text-white text-xl font-bold mt-8">Status Summary</h2>
            <p>
              Status: Active beta contract
              <br />
              Network: Base
              <br />
              Source Code: Verified on BaseScan
              <br />
              Audit Status: Not audited yet
              <br />
              Custody: Non-custodial design
            </p>

            <h2 className="text-white text-xl font-bold mt-8">Contract Address</h2>
            <p>
              Contract Name: RICE Pay Transfer Router
              <br />
              Network: Base
              <br />
              Contract Address:
              <br />
              <span className="break-all text-white">{CONTRACT_ADDRESS}</span>
            </p>
            <p>
              BaseScan:
              <br />
              <a
                href={BASESCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-green-500 hover:underline"
              >
                {BASESCAN_URL}
              </a>
            </p>

            <h2 className="text-white text-xl font-bold mt-8">GitHub Source Code</h2>
            <p>
              The Solidity source code for the RICE Pay Transfer Router v1 is publicly available on
              GitHub.
            </p>
            <p>
              GitHub:
              <br />
              <a
                href={GITHUB_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-green-500 hover:underline"
              >
                {GITHUB_SOURCE_URL}
              </a>
            </p>

            <h2 className="text-white text-xl font-bold mt-8">What This Contract Does</h2>
            <p>
              The RICE Pay Transfer Router is designed to route USDC transfers without custodying user
              balances.
            </p>
            <p>
              When a user initiates a transfer, the contract pulls the approved USDC amount from
              msg.sender and immediately routes the funds to:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>the recipient</li>
              <li>the RICE Pay fee wallet</li>
            </ol>
            <p>The contract is not designed to hold user funds like a vault or escrow.</p>

            <h2 className="text-white text-xl font-bold mt-8">Fee and Gas</h2>
            <p>
              RICE Pay service fee:
              <br />
              0.39%, with a minimum fee of 0.25 USDC and a maximum fee of 3.90 USDC.
            </p>
            <p>
              Network gas fee:
              <br />
              Gas is separate from the RICE Pay service fee. Gas is paid by the user through their wallet
              to the Base network. RICE Pay does not receive gas fees.
            </p>

            <h2 className="text-white text-xl font-bold mt-8">Trust Signals</h2>
            <p>The v1 transfer router has:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>No owner</li>
              <li>No proxy</li>
              <li>No admin function to change fees</li>
              <li>Immutable USDC token address</li>
              <li>Immutable fee recipient address</li>
              <li>Fixed fee logic in the contract</li>
              <li>Source code verified on BaseScan</li>
            </ul>

            <h2 className="text-white text-xl font-bold mt-8">Allowance Policy</h2>
            <p>RICE Pay does not require unlimited USDC approval.</p>
            <p>
              The intended flow is exact-amount approval for each transfer. This helps reduce
              allowance-related risk for users.
            </p>

            <h2 className="text-white text-xl font-bold mt-8">Security Notice</h2>
            <p>Source verified does not mean audited.</p>
            <p>
              The contract source code is public and verified on BaseScan, but it has not yet completed a
              formal third-party security audit.
            </p>
            <p>
              RICE Pay plans to pursue an external review or limited-scope audit before meaningful
              transaction volume.
            </p>
            <p>
              If a serious issue is found, RICE Pay will stop directing users to the affected contract,
              mark it as deprecated in the documentation, and publish a new verified contract address.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
