import Image from "next/image";

export default function WhatIs() {
  return (
    <section className="w-full py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Headline */}
        <h2 className="font-clash text-4xl md:text-6xl font-bold text-center mb-24">
          WHAT IS AI{" "}
          <span className="text-neon bracket-left bracket-right">VOICE</span>{" "}
          <br />
          <span className="text-neon">AGENTS?</span>
        </h2>

        {/* Center Image with HUD */}
        <div className="relative w-full max-w-4xl aspect-video flex items-center justify-center">
          {/* HUD Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="w-[80%] h-[80%] border border-neon/30 relative">
              {/* Corner markers */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-neon"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-neon"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-neon"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-neon"></div>

              {/* Center Target */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-neon/20 flex items-center justify-center glow-box">
                  <div className="w-32 h-32 rounded-full border border-neon/40 flex items-center justify-center">
                    <div className="text-neon font-mono text-xs tracking-widest bracket-left bracket-right glow-text">
                      LIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Robot Image */}
          <div className="relative z-10 w-full h-full flex items-center justify-end pr-12">
            <Image
              src="https://picsum.photos/seed/robot2/800/800"
              alt="AI Robot Side"
              width={600}
              height={600}
              className="object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Green Glow Behind Robot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full max-w-4xl mt-12 border-t border-white/10 pt-4 flex justify-between text-xs text-white/40 font-mono tracking-widest uppercase">
          <span>• 0001</span>
          <span>[VOICE]</span>
        </div>
      </div>
    </section>
  );
}
