import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tabs from "./Component/Tabs/Tabs";
import Birhday from "./Component/Birthdays Buddy/BirthdaysBuddy";
import Question from "./Component/Accordion/Accordion";
import GroceryBud from "./Component/Grocery Bud/GroceryBud";
import OurMenue from "./Component/Menu/Menu";
import Review from "./Component/Reviews/Reviews";
import Slides from "./Component/Slider/Slider";
import OurTours from "./Component/Tours/Tours";
import LoremIpsum from "./Component/Lorem Ipsum/LoremIpsum";
import ColorGenerator from "./Component/Color Generator/ColorGenerator";
import Navbar from "./Component/Navbar/Navbar";
import Sidebar from "./Component/Sidebar/Sidebar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/Tabs" element={<Tabs />} />
        <Route path="/Birthdays Buddy" element={<Birhday />} />
        <Route path="/Accordion" element={<Question />} />
        <Route path="/Grocery Bud" element={<GroceryBud />} />
        <Route path="/Reviews" element={<Review />} />
        <Route path="/Slider" element={<Slides />} />
        <Route path="/Lorem Ipsum" element={<LoremIpsum />} />
        <Route path="/Color Generator" element={<ColorGenerator />} />
        <Route path="/Menu" element={<OurMenue />} />
        <Route path="/Tours" element={<OurTours />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Sidebar And Modal" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
