import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-clash font-semibold text-xl tracking-wide">
            AI V<span className="text-neon">O</span>ICE AGENTS
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link
            href="#"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            HOME <ChevronDown className="w-3 h-3" />
          </Link>
          <Link
            href="#"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            ABOUT <ChevronDown className="w-3 h-3" />
          </Link>
          <Link
            href="#"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            PRODUCT <ChevronDown className="w-3 h-3" />
          </Link>
          <Link
            href="#"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            STAKE <ChevronDown className="w-3 h-3" />
          </Link>
        </div>

        {/* Button */}
        <button className="bg-neon text-black px-6 py-2.5 rounded-sm font-semibold text-sm hover:bg-[#7ae600] transition-colors">
          TRY IT OUT
        </button>
      </div>
    </nav>
  );
}
