import { useState } from "react";
import Article from "./Article";
import articles from "./Articles";
import "./Tours.css";
function OurTours() {
  const [value, setValue] = useState([]);

  const handleRefresh = () => {
    setValue([]);
  };

  return (
    <>
      <main>
        <div>
          {value.length !== articles.length ? (
            <>
              <div className="title">
                <h2>our tours</h2>
                <div className="title-underline"></div>
              </div>
              <div className="tours">
                {articles.map((article, i) => {
                  return (
                    <Article
                      value={(v) => setValue([...value, v])}
                      i={i}
                      key={i}
                      price={article.price}
                      title={article.title}
                      desc={article.desc}
                      img={article.img}
                      more={article.more}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <h2 className="title">no tours left</h2>
              <button className="btn btn-ref" onClick={handleRefresh}>
                refresh
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
}
export default OurTours;
