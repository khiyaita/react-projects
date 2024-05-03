function Article(props) {
  return (
    <>
      <div className="menu-item">
        <img src={props.img} alt={props.name} className="img" />
        <div className="item-info">
          <header>
            <h5>{props.name}</h5>
            <span className="item-price">${props.price}</span>
          </header>
          <p className="item-text">{props.info}</p>
        </div>
      </div>
    </>
  );
}
export default Article;
