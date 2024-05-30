import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
import StyleComponent from "./StyleComponent";
import ImageSlider from "./ImageSlider";

const acc_data = [
  {
    title: "Item1",
    body: "Paris is the capital of France, known for its rich history, iconic landmarks such as the Eiffel Tower and Notre-Dame Cathedral, and its vibrant culture. With its charming streets, delicious cuisine, and world-renowned art museums like the Louvre, Paris attracts millions of visitors every year.",
  },
  {
    title: "Item2",
    body: "Paris is the capital of France, known for its rich history, iconic landmarks such as the Eiffel Tower and Notre-Dame Cathedral, and its vibrant culture. With its charming streets, delicious cuisine, and world-renowned art museums like the Louvre, Paris attracts millions of visitors every year.",
  },
  {
    title: "Item3",
    body: "Paris is the capital of France, known for its rich history, iconic landmarks such as the Eiffel Tower and Notre-Dame Cathedral, and its vibrant culture. With its charming streets, delicious cuisine, and world-renowned art museums like the Louvre, Paris attracts millions of visitors every year.",
  },
];

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      {acc_data.map((item, index) => (
        <div key={index} className="w-[50%]  m-auto mt-2 border border-black">
          <AccordianItem
            title={item.title}
            body={item.body}
            isOpen={openIndex === index}
            setIsOpen={() => {
              openIndex === index ? setOpenIndex(null) : setOpenIndex(index);
            }}
          />
        </div>
      ))}
      <StyleComponent />
      <ImageSlider />
    </>
  );
};

export default Accordian;
