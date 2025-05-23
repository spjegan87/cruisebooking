import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import CruiseTypes from "@/components/home/CruiseTypes";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import FeaturedCruises from "@/components/home/FeaturedCruises";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

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
