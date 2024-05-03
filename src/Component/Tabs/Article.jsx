import Desc from "./Description";
import Articles from "./Articles";
function Article(props) {
//   console.log(props);
  return (
    <div className="job-info">
      <h3>{props.name}</h3>
      <span className="job-company">{props.company}</span>
      <p className="job-date">{props.date}</p>
      <div>
        {Articles.map((e, i) => (
            e.company===props.company?
          <Desc key={i} info={e.info} />
          :null
        ))}
      </div>
    </div>
  );
}

export default Article;
