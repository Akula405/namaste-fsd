import React from "react";

const Selection = ({ handleChange }) => {
  //   const handleChange = (e) => {
  //     setLang(e.target.value);
  //   };
  return (
    <>
      <div>
        <select onChange={handleChange}>
          <option value="en">English</option>
          <option value="tel">Telugu</option>
          <option value="hin">Hindhi</option>
        </select>
      </div>
    </>
  );
};

export default Selection;
