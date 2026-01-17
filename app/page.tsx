import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Topbar from "@/components/layout/Topbar";
import Image from "next/image";
import Features from "./sections/features/page";
import Pricing from "./sections/pricing/page";
import BackToTopBtn from "@/components/layout/BackToTopBtn";
import About from "./sections/about/page";
import Contact from "./sections/contact/page";

export default function Home() {
  return (
   <main className="w-screen h-full glass min-h-screen overflow-x-hidden">
    <Topbar/>
    <Hero/>
    <Features/>
    <Pricing/>
    <About/>
    <Contact/>
    <Footer/>
    <BackToTopBtn/>
   </main>
  );
}
