import React from 'react';
import ColorGradient from './ColorGradient'; // Assuming the component file is named ColorGradient.js

const App = () => {
  const colors = [
    { "backgroundColor": "rgb(255, 255, 255)", "percentValue": "100%" },
    { "backgroundColor": "rgb(0, 0, 0)", "percentValue": "100%" }
  ];

  return (
    <div className="app">
      <ColorGradient colors={colors} />
    </div>
  );
};

export default App;