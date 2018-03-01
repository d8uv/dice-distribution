import React, { PureComponent } from "react";
import Header from "./Header";
import Calculator from "./Calculator";
import Essay from "./Essay";
import "./App.css";

const getDiceLevel = (mean, stddev, level) => Math.round(mean + stddev * level);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { A: 3, X: 8, B: 0 };
  }
  changeA = event => this.setState({ A: parseInt(event.target.value, 10) });
  changeX = event => this.setState({ X: parseInt(event.target.value, 10) });
  changeB = event => this.setState({ B: parseInt(event.target.value, 10) });
  changeDiceFormula = event => {
    const data = event.target.dataset;
    console.log({
        A: parseInt(data.a, 10),
        X: parseInt(data.x, 10),
        B: parseInt(data.b, 10)
      })
    this.setState({
      A: parseInt(data.a, 10),
      X: parseInt(data.x, 10),
      B: parseInt(data.b, 10)
    });
  };

  render() {
    const A = this.state.A;
    const X = this.state.X;
    const B = this.state.B;
    const mean = A * (1 + X) / 2 + B;
    var stddev = Math.sqrt(A * (Math.pow(X, 2) - 1)) / (2 * Math.sqrt(3));
    const levels = [-2, -1, 0, 1, 2].map(level =>
      getDiceLevel(mean, stddev, level)
    );

    return (
      <div className="App">
        <Header />
        <Calculator
          A={A}
          X={X}
          B={B}
          mean={mean}
          stddev={stddev}
          levels={levels}
          changeA={this.changeA}
          changeX={this.changeX}
          changeB={this.changeB}
        />
        <Essay
          A={A}
          X={X}
          B={B}
          mean={mean}
          stddev={stddev}
          levels={levels}
          changeDiceFormula={this.changeDiceFormula}
        />
      </div>
    );
  }
}

export default App;
