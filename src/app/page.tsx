import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Flavors } from "@/components/Flavors";
import { Ingredients } from "@/components/Ingredients";
import { EnergyFooter } from "@/components/EnergyFooter";

export default function Home() {
  return (
    <main className="bg-[#101010] min-h-screen selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <Flavors />
      <Ingredients />
      <EnergyFooter />
    </main>
  );
}