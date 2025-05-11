import "./App.css";
import CompaniesLogo from "./components/CompaniesLogo";
import Testimonial from "./components/componentOfSvg/Testimonial";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceOne from "./components/ServiceOne";
import ServiceTwo from "./components/ServiceTwo";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompaniesLogo />
      <ServiceOne />
      <ServiceTwo />
      <Testimonial />
    </>
  );
}

export default App;
