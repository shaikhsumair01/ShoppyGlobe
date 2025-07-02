import HeroSection from "./HeroSection";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
// Used for rendering the homepage. Contains the title and then the productList component
export default function Home() {

  return (
    <>
      <HeroSection/>
      <BestSellers />
      <NewArrivals/>
     
    </>
  );
}