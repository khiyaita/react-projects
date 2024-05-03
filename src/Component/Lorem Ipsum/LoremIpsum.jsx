import "./LoremIpsum.css";
import lorems from "./Lorem";
import { useState } from "react";

function LoremIpsum() {
  const [inputValue, setInputValue] = useState();
  const [number, setNumber] = useState(1);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setNumber(inputValue);
  };

  const show = lorems.map((lorem, index) => {
    if (index <= number) {
      return <p key={index}>{lorem}</p>;
    }
    return null;
  });

  return (
    <>
      <div className="section-center">
        <h4>tired of boring lorem ipsum?</h4>
        <form className="lorem-form">
          <label>paragraphs:</label>
          <input
            type="number"
            min="1"
            step="1"
            max="8"
            onChange={handleChange}
          />
          <button className="btn" onClick={handleClick}>
            generate
          </button>
        </form>
        <div className="lorem-text">{show}</div>
      </div>
    </>
  );
}

export default LoremIpsum;
