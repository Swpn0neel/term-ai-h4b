import Navbar from "@/app/landing/components/navbar";
import Hero from "@/app/landing/components/hero";
import Demo from "@/app/landing/components/demo";
import Text from "@/app/landing/components/text";
import Features from "@/app/landing/components/features";
import CTA from "@/app/landing/components/cta";
import Footer from "@/app/landing/components/footer";

export default function Landing() {
  return (
    <div className="scrollbar-custom h-screen overflow-y-scroll">
      <Navbar />
      <Hero />
      <Demo />
      <Text />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
