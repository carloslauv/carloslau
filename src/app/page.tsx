import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Built from "@/components/Built";
import HowIBuild from "@/components/HowIBuild";
import Origins from "@/components/Origins";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofBar />
        <Built />
        <HowIBuild />
        <Origins />
        <Contact />
      </main>
    </>
  );
}
