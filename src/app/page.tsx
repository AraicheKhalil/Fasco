import Hero from "@/components/Hero";
import Brands_Sec from "@/components/Brands";
import Deals from "@/components/Deals";
import NewArrivals from "@/components/NewArrivals";
import Features from "@/components/features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="Home font-poppins ">
      <Hero />
      <Brands_Sec />
      <Deals />
      <NewArrivals />
      <Features />
    </div>
  );
}
