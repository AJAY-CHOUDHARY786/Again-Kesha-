import BanglesBuyNow from "../components/BanglesBuyNow";
import BanglesSection from "../components/BanglesSection";
import BlogSection from "../components/BlogSection";
import BuyNow from "../components/BuyNow";
import EarringsBuyNow from "../components/EarringsBuyNow";
import EarringsSection from "../components/EarringsSection";
import Footer from "../components/Footer";
import HappyCustomers from "../components/HappyCustomers";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import InstaGraamVideo from "../components/InstaGraamVideo";
import MostGifted from "../components/MostGifted";
import NecklaceSection from "../components/NecklaceSection";
import ProductUnder from "@/components/ProductUnder";
import ShopByCollection from "../components/ShopByCollection";
import ShopBycolors from "../components/ShopByColor";
import ShopByCate from "../components/shopByCate";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <ShopByCate />
      <ProductUnder />
      <MostGifted />
      <ShopByCollection />
      <ShopBycolors />
      <BuyNow />
      <NecklaceSection />
      <EarringsBuyNow />
      <EarringsSection />
      <BanglesBuyNow />
      <BanglesSection />
      <HappyCustomers />
      <BlogSection />
      <InstaGraamVideo />
      <Footer />
    </main>
  );
}
