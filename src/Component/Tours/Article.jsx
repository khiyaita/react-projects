import { useState } from "react";

function Article(props) {
  const [hideDesc, setHideDesc] = useState(false);
  const [hideArticle, setHideArticle] = useState(false);
  const handleClickShow = () => {
    setHideDesc(true);
  };
  const handleClickHide = () => {
    setHideDesc(false);
  };
  const handleClickDelete = () => {
    setHideArticle(true);
    props.value(props.i);
  };
  return (
    <>
      {hideArticle ? null : (
        <div className="single-tour">
          <img
            src={props.img}
            alt="Best of Ireland in 14 Days Tour"
            className="img"
          />
          <span className="tour-price">{props.price}</span>
          <div className="tour-info">
            <h5>{props.title}</h5>

            {hideDesc ? (
              <>
                <p>{props.more}</p>
                <button className="info-btn" onClick={handleClickHide}>
                  Show Less
                </button>
              </>
            ) : (
              <>
                <p>{props.desc}</p>
                <button className="info-btn" onClick={handleClickShow}>
                  read more
                </button>
              </>
            )}

            <button
              className="delete-btn btn-block btn"
              onClick={handleClickDelete}
            >
              not interested
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Article;
