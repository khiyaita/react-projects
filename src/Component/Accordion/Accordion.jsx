import Article from "./Article";
import data from "./Articles";
import "./Accordion.css";
function Question() {
  return (
    <>
      <main>
        <div className="container">
          <h1>Questions</h1>
          {data.map((dt,i)=>(
            <Article
            key={i}
            question={dt.question}
            answer={dt.answer}
            />
          ))}
        </div>
      </main>
    </>
  );
}
export default Question;
