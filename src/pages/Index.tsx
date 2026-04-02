import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import ProductsSection from "@/components/ProductsSection";
import CurrentStatusSection from "@/components/CurrentStatusSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <HistorySection />
    <ProductsSection />
    <CurrentStatusSection />
    <Footer />
  </div>
);

export default Index;
