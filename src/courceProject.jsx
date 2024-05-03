function CourseProjects({img,name}){
    return(<a href={`/${name}`} className="sc-20aa8942-0 eGmwUG">
    <div className="img-container">
        <img
          alt={name}
          src={`/images/App/${img}`}
          decoding="async"
          data-nimg="fill"
          className="img"
          sizes="100vw"
        />
    </div>
    <footer>
      <h5>{name}</h5>
    </footer>
  </a>)
}
export default CourseProjects