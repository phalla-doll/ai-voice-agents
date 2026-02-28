import Image from "next/image";
import { Mic, Volume2, Activity } from "lucide-react";

export default function Solutions() {
  return (
    <section className="w-full py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="flex items-center gap-4 text-neon font-mono text-xs tracking-widest bracket-left bracket-right mb-8 md:mb-0">
            LIVE
          </div>

          <div className="text-right">
            <h2 className="font-clash text-4xl md:text-5xl font-bold">
              AI VOICE AGENTS <br />
              <span className="text-neon">SOLUTIONS</span>
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="cut-corner border border-white/10 bg-[#0A0A0A] p-8 flex flex-col group hover:border-neon/50 transition-colors">
            <h3 className="font-clash text-xl font-semibold mb-12 uppercase tracking-wide">
              AI VOICE AGENTS
            </h3>

            <div className="flex-1 flex flex-col items-center justify-center mb-12 relative">
              <div className="w-24 h-24 rounded-full bg-neon/10 flex items-center justify-center mb-6 group-hover:glow-box transition-all">
                <Mic className="w-10 h-10 text-neon" />
              </div>
              <div className="w-full h-8 opacity-50 flex items-center justify-center">
                <Image
                  src="https://picsum.photos/seed/soundwave-small/200/40"
                  alt="Soundwave"
                  width={200}
                  height={40}
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
              AI Voice Agents transform online personas into interactive,
              voice-enabled agents using data from social media and videos.
              These agents can engage in real-time.
            </p>

            <div className="mt-auto pt-4 border-t border-white/10 text-white/30 font-mono text-xs">
              01
            </div>
          </div>

          {/* Card 2 */}
          <div className="cut-corner border border-white/10 bg-[#0A0A0A] p-8 flex flex-col group hover:border-neon/50 transition-colors">
            <h3 className="font-clash text-xl font-semibold mb-12 uppercase tracking-wide">
              TEXT-TO-SPEECH
            </h3>

            <div className="flex-1 flex flex-col items-center justify-center mb-12 relative">
              <div className="w-24 h-24 rounded-full bg-neon/10 flex items-center justify-center mb-6 group-hover:glow-box transition-all">
                <Volume2 className="w-10 h-10 text-neon" />
              </div>
              <div className="w-full h-8 opacity-50 flex items-center justify-center">
                <Image
                  src="https://picsum.photos/seed/soundwave-small-2/200/40"
                  alt="Soundwave"
                  width={200}
                  height={40}
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
              Transform text into high-quality, lifelike audio with our advanced
              AI-driven text-to-speech technology.
            </p>

            <div className="mt-auto pt-4 border-t border-white/10 text-white/30 font-mono text-xs">
              02
            </div>
          </div>

          {/* Card 3 */}
          <div className="cut-corner border border-white/10 bg-[#0A0A0A] p-8 flex flex-col group hover:border-neon/50 transition-colors">
            <h3 className="font-clash text-xl font-semibold mb-12 uppercase tracking-wide">
              SOUND GENERATING
            </h3>

            <div className="flex-1 flex flex-col items-center justify-center mb-12 relative">
              <div className="w-24 h-24 rounded-full bg-neon/10 flex items-center justify-center mb-6 group-hover:glow-box transition-all">
                <Activity className="w-10 h-10 text-neon" />
              </div>
              <div className="w-full h-8 opacity-50 flex items-center justify-center">
                <Image
                  src="https://picsum.photos/seed/soundwave-small-3/200/40"
                  alt="Soundwave"
                  width={200}
                  height={40}
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
              Creates high-quality sound effects or ambient noises from text
              prompts.
            </p>

            <div className="mt-auto pt-4 border-t border-white/10 text-white/30 font-mono text-xs">
              03
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
