import Navbar from "@/components/navbar-dash";
import Hero from "@/components/hero";
import Demo from "@/components/demo";
import Text from "@/components/text";
import Features from "@/components/features";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

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
