import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col pt-20 overflow-hidden">
      {/* Background Soundwave Image */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <Image
          src="https://picsum.photos/seed/soundwave/1920/1080?blur=4"
          alt="Soundwave Background"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Row */}
        <div className="flex justify-between items-start w-full relative">
          <h1 className="font-clash text-6xl md:text-8xl font-bold leading-none tracking-tight z-20">
            <span className="text-neon">AI</span> - VOICE <br />
            AGENTS
          </h1>

          {/* Center Image (Robot) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-10 pointer-events-none">
            <Image
              src="https://picsum.photos/seed/robot/600/600"
              alt="AI Robot"
              fill
              className="object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end w-full mt-auto pb-12 z-20">
          <div className="flex items-center gap-4">
            <button className="bg-neon text-black px-10 py-3 rounded-sm font-semibold text-sm hover:bg-[#7ae600] transition-colors">
              TRY IT OUT
            </button>
            <button className="border border-white/20 text-white px-10 py-3 rounded-sm font-semibold text-sm hover:bg-white/5 transition-colors flex items-center gap-2">
              AIRDROP
              <span className="w-2 h-2 bg-neon rounded-full inline-block"></span>
            </button>
          </div>

          <p className="text-right text-white/50 text-xl max-w-sm font-light leading-relaxed">
            The All-In-One Platform For Voice AI Agents And Everything Audio
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 flex justify-between text-xs text-white/40 font-mono tracking-widest uppercase mb-8">
          <span>• 0001</span>
          <span>[Hero Section]</span>
          <span>ICO AI AGENT 001</span>
        </div>
      </div>
    </section>
  );
}
