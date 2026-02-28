import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#050505] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          {/* Left Column */}
          <div className="flex flex-col gap-12 max-w-sm">
            <span className="font-clash font-semibold text-xl tracking-wide">
              AI V<span className="text-neon">O</span>ICE AGENTS
            </span>

            <div className="space-y-6">
              <h2 className="font-clash text-4xl font-bold uppercase">
                <span className="text-neon">AI</span> VOICE AGENT
              </h2>

              <button className="bg-neon text-black px-8 py-3 rounded-sm font-semibold text-sm hover:bg-[#7ae600] transition-colors w-fit">
                JOIN PRESALE
              </button>
            </div>
          </div>

          {/* Right Columns */}
          <div className="flex gap-16 md:gap-32">
            {/* Navigation */}
            <div className="flex flex-col gap-6">
              <h4 className="font-mono text-xs tracking-widest uppercase text-white/50 mb-2">
                NAVIGATION
              </h4>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                Explainer
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                Tokenomics
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                Technology
              </Link>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-6">
              <h4 className="font-mono text-xs tracking-widest uppercase text-white/50 mb-2">
                RESOURCES
              </h4>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                Whitepaper
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                App
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                Medium
              </Link>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-neon transition-colors"
              >
                CoinMarketCap
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-mono tracking-widest uppercase">
            © Copyright 2025 - AI voice agent
          </p>

          <button className="border border-white/20 text-white px-8 py-3 rounded-sm font-semibold text-xs hover:bg-white/5 transition-colors flex items-center gap-2 uppercase tracking-widest">
            CONTACT US
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
