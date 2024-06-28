import Navbar from "@/app/landing/components/navbar";
import Hero from "@/app/landing/components/hero";
import Demo from "@/app/landing/components/demo";
import CTA from "@/app/landing/components/cta";
import Footer from "@/app/landing/components/footer";

export default function Landing() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Demo />
      <CTA />
      <Footer />
    </div>
  );
}
