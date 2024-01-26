import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";

const Faq = ({ data, showTitle }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleAccordionClick = (index) => {
    // If the same title is clicked again, close the panel by setting the open index to null
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="faq-container">
      {showTitle && (
        <div className="faq-title-container">
          <h2>ხშირად დასმული კითხვები</h2>
          <button className="faq-blue-button-desktop">ყველა კითხვა</button>
        </div>
      )}
      {data.faq.map((faq, index) => (
        <Accordion
          key={index}
          data={faq}
          isOpen={openIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}

      <button className="faq-blue-button-mobile">ყველა კითხვა</button>
    </div>
  );
};

export default Faq;
