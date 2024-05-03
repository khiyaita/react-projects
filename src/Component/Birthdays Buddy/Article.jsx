function Article(props) {
  return (
    <div className="articles">
      <img className="img" src={props.img} alt="img" />
      <h3 className="name">{props.nom}</h3>
      <p className="age">{props.age} years</p>
    </div>
  );
}
export default Article;
