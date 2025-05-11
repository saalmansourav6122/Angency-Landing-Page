import "./App.css";
import CompaniesLogo from "./components/CompaniesLogo";
import Testimonial from "./components/componentOfSvg/Testimonial";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import ServiceOne from "./components/ServiceOne";
import ServiceTwo from "./components/ServiceTwo";
import Trial from "./components/Trial";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompaniesLogo />
      <ServiceOne />
      <ServiceTwo />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
