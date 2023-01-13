import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
const Services = () => {
  const services = [
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info: "Lorem ipsun dolor sit amet consectetur adipisicing elit, Magni, Corporis!",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Lorem ipsun dolor sit amet consectetur adipisicing elit, Magni, Corporis!",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info: "Lorem ipsun dolor sit amet consectetur adipisicing elit, Magni, Corporis!",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: "Lorem ipsun dolor sit amet consectetur adipisicing elit, Magni, Corporis!",
    },
  ];

  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
