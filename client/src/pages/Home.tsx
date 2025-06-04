import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "@/components/Home/HeroSection";
import CruiseTypes from "@/components/Home/CruiseTypes";
import FeaturedDestinations from "@/components/Home/FeaturedDestinations";
import FeaturedCruises from "@/components/Home/FeaturedCruises";
import Stats from "@/components/Home/Stats";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Testimonials from "@/components/Home/Testimonials";
import CTABanner from "@/components/Home/CTABanner";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DreamsTour - Discover Amazing Cruise Vacations</title>
        <meta name="description" content="Find and book your perfect cruise vacation with DreamsTour. Explore destinations worldwide with exclusive deals on luxury cruise lines." />
      </Helmet>
      
      {/* Hero Section with Search */}
      <HeroSection />
      
      {/* Cruise Types Section */}
      <CruiseTypes />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Popular Destinations */}
      <FeaturedDestinations />
      
      {/* Featured Cruises */}
      <FeaturedCruises />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Call to Action */}
      <CTABanner />
    </>
  );
};

export default Home;
