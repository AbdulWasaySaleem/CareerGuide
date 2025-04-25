import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/Home/HeroSection";
import ChooseUs from "../components/Home/ChooseUs";
import TimeLine from "../components/Home/TimeLine";
import Fields from "../components/Home/Fields";
import Testimonials from "../components/Home/Testimonials";
import NewsLetter from "../components/Home/NewsLetter";
import Quize from "../components/Home/Quize";

const Home = () => {
  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden">
      <HeroSection />
      <ChooseUs />
      <TimeLine />
      <Fields />
      <Testimonials />
      <NewsLetter />
      <Quize/>
    </div>
  );
};

export default Home;
