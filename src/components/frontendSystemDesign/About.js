import React from "react";
import { data } from "./utils";
import Selection from "./Selection";
import { useState, useEffect } from "react";
const About = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(data[lang]);
  const { title, description, conclusion } = data[lang];
  //console.log(title);
  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <>
      <h1 className="text-black font-bold p-3">{title}</h1>

      <p className="p-5">{description}</p>

      <p className="p-5">{conclusion}</p>
    </>
  );
};

export default About;
