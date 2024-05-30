import React from "react";

const AccordianItem = ({ title, body, isOpen, setIsOpen }) => {
  //const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="bg-gray-400 font-bold p-2  flex justify-between cursor-pointer"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span>{title}</span>
        <span>{isOpen ? "🔼" : "🔽"}</span>
      </div>
      <p className="px-2">{isOpen && body}</p>
    </div>
  );
};

export default AccordianItem;
