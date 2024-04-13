import React from "react";

export default class Jouer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 0, x: 0 };
  }

  btn = () => {
    let m = Math.floor(Math.random() * 6) + 1;
    this.setState({ n: m, x: this.state.x + 1 });
  };

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={this.state.n + ".png"}
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">Le nombre d'essais: {this.state.x}</h5>
          <p className="card-text">{this.state.n}</p>
          {this.props.ele !== this.state.n ? (
            <div>
              <input type="button" onClick={this.btn} value="Jouer" />
            </div>
          ) : (
            <div>
              <input
                type="reset"
                onClick={() => this.setState({ n: 0, x: 0 })}
              />
              <h3>Bravo vous avez trouvez la face cachée ...</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}
