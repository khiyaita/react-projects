import { useEffect, useState } from "react";
import "./Slider.css";
import data from "./data";

function Slides() {
  const [state, setState] = useState(data);
  const [count, setCount] = useState(0);

  const handleNext = () => {
    setCount((prevCount) =>
      prevCount === state.length - 1 ? 0 : prevCount + 1
    );
  };

  const handlePrev = () => {
    setCount((prevCount) =>
      prevCount === 0 ? state.length - 1 : prevCount - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) =>
        prevCount === state.length - 1 ? 0 : prevCount + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [state]);
  return (
    <>
      <div className="section">
        {state.map((e, i) => (
          <article className="article"
            style={{
              transform: `translateX(${100 * (i - count)}%)`,
              opacity: i === count ? 1 : 0,
            }}
            key={i}
          >
            <img src={e.img} alt="maria ferguson" className="person-imgg" />
            <h5>{e.name}</h5>
            <p className="title">{e.title}</p>
            <p className="text">{e.info}</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </article>
        ))}
        <button className="prev" onClick={handlePrev}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="next" onClick={handleNext}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </>
  );
}

export default Slides;
