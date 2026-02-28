import Image from "next/image";
import { Crosshair } from "lucide-react";

export default function Audit() {
  return (
    <section className="w-full py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-8 text-white/50 text-sm font-mono tracking-widest">
          <Crosshair className="w-4 h-4" />
          <span>AUDIT BY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* DEX SCREENER */}
          <div className="cut-corner border border-white/10 bg-white/5 p-8 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm" />
              </div>
              <span className="font-clash font-semibold text-xl tracking-wider">
                DEX SCREENER
              </span>
            </div>
          </div>

          {/* AERODROME */}
          <div className="cut-corner border border-white/10 bg-white/5 p-8 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-red-500" />
              <span className="font-clash font-semibold text-xl tracking-wider">
                AERODROME
              </span>
            </div>
          </div>

          {/* Uniswap */}
          <div className="cut-corner border border-white/10 bg-white/5 p-8 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 text-pink-500">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <span className="font-clash font-semibold text-xl tracking-wider text-pink-500">
                Uniswap
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
