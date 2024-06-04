import React from "react";
import { navItems } from "../utils";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const selecetedPath = e.target.value;
    navigate(selecetedPath);
  };
  return (
    <>
      <div>
        <select onChange={handleChange}>
          <option></option>
          {navItems.map((c) => (
            <option key={c.id}>{c.text}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
