import { useState } from "react";
import Article from "./Article";
import "./Tabs.css";
import Articles from "./Articles";
function Tabs() {
  const [btnActivetomy, setbtnActivetomy] = useState(true);
  const [btnActiveBigdrop, setbtnActiveBigdrop] = useState(false);
  const [btnActiveCuker, setbtnActiveCuker] = useState(false);

  const [info, setInfo] = useState(
    Articles.filter((e) => {
      if (e.company === "TOMMY") return e;
    })
  );

  const handleTommy = () => {
    setInfo(
      Articles.filter((e) => {
        if (e.company === "TOMMY") return e;
      })
    );
    setbtnActivetomy(true);
    setbtnActiveBigdrop(false);
    setbtnActiveCuker(false);
  };
  const handleBigdrop = () => {
    setInfo(
      Articles.filter((e) => {
        if (e.company === "BIGDROP") return e;
      })
    );
    setbtnActivetomy(false);
    setbtnActiveBigdrop(true);
    setbtnActiveCuker(false);
  };
  const handleCuker = () => {
    setInfo(
      Articles.filter((e) => {
        if (e.company === "CUKER") return e;
      })
    );
    setbtnActivetomy(false);
    setbtnActiveBigdrop(false);
    setbtnActiveCuker(true);
  };
  return (
    <>
      <div className="jobs-center">
        <div className="btn-container">
          <button
            className={`job-btn${btnActivetomy ? " active-btn" : ""}`}
            onClick={handleTommy}
          >
            TOMMY
          </button>
          <button
            className={`job-btn${btnActiveBigdrop ? " active-btn" : ""}`}
            onClick={handleBigdrop}
          >
            BIGDROP
          </button>
          <button
            className={`job-btn${btnActiveCuker ? " active-btn" : ""}`}
            onClick={handleCuker}
          >
            CUKER
          </button>
        </div>
        {info.map((e, i) => (
          <Article key={i} name={e.name} company={e.company} date={e.date} />
        ))}
      </div>
    </>
  );
}
export default Tabs;
