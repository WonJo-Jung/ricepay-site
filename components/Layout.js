import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { APP_STORE_LINK } from "../constants";

export default function Layout({ children, title, description }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || "RICE Pay | Simple USDC Transfers on Base"}</title>
        <meta name="description" content={description || "A non-custodial app for sending USDC on Base."} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
      </Head>

      <nav className="fixed w-full z-[100] px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-extrabold tracking-tighter flex items-center gap-2 text-white">
            <img src="/ricepay-logo.svg" alt="" className="h-8 w-8 rounded-lg" /> RICE Pay
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <Link href="/#features" className="hover:text-white transition">Features</Link>
            <Link href="/#how-it-works" className="hover:text-white transition">How it works</Link>
            <Link href="/#faq" className="hover:text-white transition">FAQ</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href={APP_STORE_LINK} className="hidden sm:block bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-green-500 transition-all">
              Download
            </a>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white text-2xl w-8 h-8 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-6 text-center backdrop-blur-xl">
            <Link href="/#features" className="text-lg text-gray-300" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="/#how-it-works" className="text-lg text-gray-300" onClick={() => setIsMenuOpen(false)}>How it works</Link>
            <Link href="/#faq" className="text-lg text-gray-300" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <a href={APP_STORE_LINK} className="bg-green-500 text-black py-3 rounded-xl font-bold">Download App</a>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6">
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          <Link href="/support" className="hover:text-white transition">Support</Link>
        </div>
        <p>&copy; 2026 RICE Pay. All rights reserved.</p>
        <p className="mt-2 opacity-50">Powered by Unitas Atlas Global LLC</p>
      </footer>
    </>
  );
}
