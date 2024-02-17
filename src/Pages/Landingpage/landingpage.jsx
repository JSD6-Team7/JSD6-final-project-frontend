import React from "react";
import Navbarja from "./Navbarja.jsx";
import Hero from "./Hero.jsx";
import ContentSection from "./ContentSection.jsx";
import TestimonialSection from "./TestimonialSection.jsx";
import Footer from "./Footer.jsx";
import FitnessCTA from "./FitnessCTA.jsx";
import AboutUsSection from "./AboutUsSection.jsx";
import FeatureSection from "./FeatureSection.jsx";
import ContentSlider from "./ContentSlider.jsx";
import FAQ from "./FAQ.jsx";
import FooterTopSection from "./FooterTopSection.jsx";
import "./Landing.css";

function App() {
  return (
    <div>
      <div>
        <Navbarja />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <ContentSlider />
      </div>
      <div>
        <ContentSection />
      </div>
      <div>
        <FitnessCTA />
      </div>
      <div>
        <AboutUsSection />
      </div>
      <div id="Features">
        <FeatureSection />
      </div>
      <div id="Testimonials">
        <TestimonialSection />
      </div>
      <div id="FAQ">
        <FAQ />
      </div>
      <div>
        <FooterTopSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
