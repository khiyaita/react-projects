import "./App.css";
import CourseProjects from "./courceProject";
import courses from "./course";
function App() {
  return (
    <>
      <div className="sc-2181a748-0 iUlLKD">
        <div className="hero-center">
          <div className="hero-title">
            <h1>React Projects</h1>
            <p>
              Projects are the most practical way to learn any language, and
              <span> React </span> is no exception. Solidify your knowledge of
              React by creating these cool projects.
            </p>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="btn hero-btn"
            >
              join the course
            </a>
          </div>
          <div className="img-container">
              <img
                alt="woman and the browser"
                src="/images/App/hero-1.7c6a8341.svg"
                decoding="async"
                data-nimg="fill"
                sizes="100vw"
              />
          </div>
        </div>
      </div>
      <section className="sc-7d2d4ec2-0 gMXyAf">
        <div className="title">
          <h2>Course Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="section-center">
          {courses.map((cource, index) => {
            return (
              <CourseProjects key={index} img={cource.img} name={cource.name} />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
