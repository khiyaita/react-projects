import React from 'react';

const ColorGradient = ({ colors }) => {
  const renderGradient = () => {
    const gradientSteps = colors.map((color, index) => {
      const { backgroundColor, percentValue } = color;
      return `${backgroundColor} ${percentValue}`;
    });

    const gradientCSS = `linear-gradient(to right, ${gradientSteps.join(', ')})`;
    return { background: gradientCSS };
  };
console.log(renderGradient());
  return (
    <div className="color-gradient" style={renderGradient()}>
      {/* You can add any additional content or styling here */}
    </div>
  );
};

export default ColorGradient;
