import React, { PureComponent } from "react";
import Calculator from "./Calculator";
import "./App.css";

const getDiceLevel = (mean, stddev, level) => Math.floor(mean + stddev * level);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { A: 3, X: 8, B: 0 };
  }
  changeA = event => this.setState({ A: parseInt(event.target.value, 10) });
  changeX = event => this.setState({ X: parseInt(event.target.value, 10) });
  changeB = event => this.setState({ B: parseInt(event.target.value, 10) });

  render() {
    const A = this.state.A;
    const X = this.state.X;
    const B = this.state.B;
    const mean = A * (1 + X) / 2 + B;
    var stddev = Math.sqrt(A * (Math.pow(X, 2) - 1)) / (2 * Math.sqrt(3));
    if (A === 2) {
      stddev = (2 * X - 2) / (2 * Math.sqrt(6));
    }
    const levels = [-2, -1, 0, 1, 2].map(level =>
      getDiceLevel(mean, stddev, level)
    );

    return (
      <div className="App">
        <h1>Dice to Distribution</h1>
        <Calculator
          A={A}
          X={X}
          B={B}
          changeA={this.changeA}
          changeX={this.changeX}
          changeB={this.changeB}
          mean={mean}
          stddev={stddev}
          levels={levels}
        />
      </div>
    );
  }
}

export default App;
