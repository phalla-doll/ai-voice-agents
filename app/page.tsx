import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Audit from "@/components/Audit";
import WhatIs from "@/components/WhatIs";
import Solutions from "@/components/Solutions";
import ComingSoon from "@/components/ComingSoon";
import Powering from "@/components/Powering";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center overflow-x-hidden">
      <div className="w-full relative">
        <Navbar />
        <Hero />
        <Audit />
        <WhatIs />
        <Solutions />
        <ComingSoon />
        <Powering />
        <Footer />
      </div>
    </main>
  );
}
