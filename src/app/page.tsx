import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ProgressBar from "@/components/ProgressBar";
import Marquee from "@/components/Marquee";
import Hero from "@/sections/Hero";
import Highlights from "@/sections/Highlights";
import WorkSection from "@/sections/Work";
import ExperienceSection from "@/sections/Experience";
import SkillsSection from "@/sections/Skills";
import ContactSection from "@/sections/Contact";
import { marqueeItems } from "@/constants";

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden />
      <Cursor />
      <ProgressBar />
      <Nav />
      <main>
        <Hero />
        <Marquee items={marqueeItems} />
        <Highlights />
        <WorkSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
