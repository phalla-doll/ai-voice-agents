import Image from "next/image";

export default function Powering() {
  const features = [
    "VOICE TRADING",
    "CREDITS FOR PLATFORM SERVICES",
    "MARKETPLACE PURCHASES",
    "GOVERNANCE",
    "PREMIUM SERVICES",
    "BUY BACK AND BURN MECHANISM",
    "STAKING & REWARDS",
    "TEAM",
    "SUBSCRIPTION PAYMENTS",
    "MARKETING",
  ];

  return (
    <section className="w-full py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="text-neon font-mono text-xs tracking-widest bracket-left bracket-right mb-8 md:mb-0">
            Our Tokenomics
          </div>

          <div className="text-right">
            <h2 className="font-clash text-4xl md:text-5xl font-bold uppercase">
              POWERING THE <br />
              ECOSYSTEM
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="flex-1 relative h-[600px] w-full flex items-center justify-center">
            <Image
              src="https://picsum.photos/seed/robot3/600/600"
              alt="AI Robot"
              fill
              className="object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-white/10 bg-[#0A0A0A] p-6 hover:border-neon/50 transition-colors flex items-center"
                >
                  <span className="font-mono text-xs tracking-widest uppercase text-white/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
