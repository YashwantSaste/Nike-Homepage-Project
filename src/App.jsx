import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SuperQuality from "./components/SuperQuality";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import CustomerReview from "./components/CustomerReview";
import PopularProducts from "./components/PopularProducts";
import SpecialOffer from "./components/SpecialOffer";
function App() {
  return (
    <div className="relative">
      {/* Navigation Bar */}
      
        <Navbar/>
      
      <section className="xl:padding-1 wide:padding-r padding-b">
        <HeroSection/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8 text-white">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
// 