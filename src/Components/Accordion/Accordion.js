import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Accordion.css";
const Accordion = ({ data, isOpen, onClick }) => {
  const { title, description } = data;
  return (
    <div>
      <div className="accordion-item">
        <button className="accordion-title" onClick={onClick}>
          {title}
          {isOpen ? (
            <IoIosArrowUp className="icon" />
          ) : (
            <IoIosArrowDown className="icon" />
          )}
        </button>

        {isOpen && <div className="accordion-content">{description}</div>}
      </div>
    </div>
  );
};

export default Accordion;
