import React, { useState } from "react";
import "./ColorGenerator.css";
import Toastify from "../Grocery Bud/Toastify";

function ColorGradient() {
  const white = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
  const black = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const [currentColor, setCurrentColor] = useState("#ff0000");
  const [currentColorText, setCurrentColorText] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentColors, setCurrentColors] = useState([]);

  const calculateGradientColorWhite = (color, percentage) => {
    const [r, g, b] = color;
    const newR = Math.round(255 * (1 - percentage) + r * percentage);
    const newG = Math.round(255 * (1 - percentage) + g * percentage);
    const newB = Math.round(255 * (1 - percentage) + b * percentage);
    return `rgb(${newR},${newG},${newB})`;
  };

  const calculateGradientColorBlack = (color, percentage) => {
    const [r, g, b] = color;
    const newR = Math.round(r * (1 - percentage));
    const newG = Math.round(g * (1 - percentage));
    const newB = Math.round(b * (1 - percentage));
    return `rgb(${newR},${newG},${newB})`;
  };

  const updateColorGradient = (e) => {
    e.preventDefault();
    const colors = [];
    setMessages([...messages,{ text: `Unable to parse color from string:${currentColorText}`, type: "error" }]);
    for (let i = 0; i <= 9; i++) {
      const percentage = i * 10;
      const color = calculateGradientColorWhite(
        hexToRgb(currentColor),
        percentage / 100
      );
      colors.push(createColorDiv(color, `${white[i]}%`));
    }

    for (let i = 0; i <= 10; i++) {
      const percentage = i * 10;
      const color = calculateGradientColorBlack(
        hexToRgb(currentColor),
        percentage / 100
      );
      colors.push(createColorDiv(color, `${black[i]}%`, "white"));
    }

    setCurrentColors(colors);
  };

  const hexToRgb = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return [r, g, b];
  };

  const createColorDiv = (color, textContent, textColor) => {
    const copyValue = () => {
      const tempInput = document.createElement("input");
      tempInput.value = rgbToHex(color[0], color[1], color[2]);
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      setMessages([...messages,{ text: `Color copied to clipboard!${color}`, type: "success" }]);};
    return (
      <div
        className="color false"
        style={{ backgroundColor: color, color: textColor }}
        onClick={copyValue}
      >
        <p>{textContent}</p>
        <p>{rgbToHex(color[0], color[1], color[2])}</p>
      </div>
    );
  };

  const rgbToHex = (r, g, b) => {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  };

  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
console.log(messages);
  return (
    <>
      <div className="Toastify">
        {messages.map((message, index) => (
          <Toastify key={index} text={message.text} type={message.type} />
        ))}
      </div>
      <div className="main-color" style={{ marginTop: "-78px" }}>
        <div className="container">
          <h4 className="container-h4">color generator</h4>
          <form className="color-form" onSubmit={updateColorGradient}>
            <input
              type="color"
              value={currentColor}
              onChange={(e) => setCurrentColor(e.target.value)}
              />
            <input
              type="text"
              placeholder={currentColor}
              className="form-input-text"
              name="colorInput"
              onChange={(e) => setCurrentColorText(e.target.value)}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
        <div id="colors">
          {currentColors.map((color, index) => (
            <React.Fragment key={index}>{color}</React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default ColorGradient;
