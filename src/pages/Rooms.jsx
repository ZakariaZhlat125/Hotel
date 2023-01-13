import React from "react";
import { Hero, Banner } from "../components";
import { Link } from "react-router-dom";
import RoomsContiner from "../components/RoomsContiner";
const Rooms = () => {
  return (
    <>
      {" "}
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContiner />
    </>
  );
};

export default Rooms;
