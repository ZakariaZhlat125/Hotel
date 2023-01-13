import React from "react";
import { Hero, Banner, Services, FeauterRooms } from "../components";
import { Link } from "react-router-dom";
import defaultImg from "../assets/room-1.jpeg";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurios rooms"
          subtitle="deluxe rooms starting at $99.9"
        >
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeauterRooms />
      
      
    </>
  );
};

export default Home;
