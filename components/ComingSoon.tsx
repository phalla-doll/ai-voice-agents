import { ArrowRight } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="w-full py-32 border-t border-white/5 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <h2 className="font-clash text-4xl md:text-5xl font-bold uppercase">
            COMMING <span className="text-neon">SOON</span>
          </h2>

          <div className="text-neon font-mono text-xs tracking-widest bracket-left bracket-right mt-8 md:mt-0">
            SOON
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* Card 1 */}
          <div className="cut-corner border border-white/10 bg-[#0A0A0A] p-8 flex flex-col group hover:border-neon/50 transition-colors h-[400px]">
            <h3 className="font-clash text-xl font-semibold mb-6 uppercase tracking-wide">
              SDK
            </h3>

            <div className="flex-1 border-t border-white/10 pt-6 mt-auto flex flex-col justify-end">
              <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
                Empowers developers to integrate Audio AI Agent technologies
                directly into their applications and platforms.
              </p>

              <button className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase hover:text-neon transition-colors w-fit">
                VIEW MORE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cut-corner border border-white/10 bg-[#0A0A0A] p-8 flex flex-col group hover:border-neon/50 transition-colors h-[450px]">
            <h3 className="font-clash text-xl font-semibold mb-6 uppercase tracking-wide">
              VOICE EXCHANGE
            </h3>

            <div className="flex-1 border-t border-white/10 pt-6 mt-auto flex flex-col justify-end">
              <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
                Buy, sell, and trade custom AI voice models! Each voice model is
                represented as an ERC-721 token, offering unique ownership and
                traceability. Furthermore, these models come with a dynamic
                feature: they can be seamlessly converted into ERC-404 tokens.
              </p>

              <button className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase hover:text-neon transition-colors w-fit">
                VIEW MORE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cut-corner border border-white/10 bg-[#0A0A0A] p-8 flex flex-col group hover:border-neon/50 transition-colors h-[500px]">
            <h3 className="font-clash text-xl font-semibold mb-6 uppercase tracking-wide">
              VOICE CHANGER
            </h3>

            <div className="flex-1 border-t border-white/10 pt-6 mt-auto flex flex-col justify-end">
              <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
                Transform voices in real-time for games and creative uses.
              </p>

              <button className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase hover:text-neon transition-colors w-fit">
                VIEW MORE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
