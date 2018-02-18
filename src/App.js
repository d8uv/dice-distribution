import React, { Component } from "react";
import "./App.css";

const NumberInput = props => (
  <input
    type="number"
    value={props.value}
    onChange={props.handleChange}
    step="1"
    min={props.min}
  />
);

const InputRow = props => (
  <p>
    <label>
      {props.label}: {props.children}
    </label>
  </p>
);

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { A: 1, X: 20, B: 0 };
  }
  changeA = event => this.setState({ A: parseInt(event.target.value, 10) });
  changeX = event => this.setState({ X: parseInt(event.target.value, 10) });
  changeB = event => this.setState({ B: parseInt(event.target.value, 10) });
  render() {
    const mean = this.state.A * (1 + this.state.X) / 2 + this.state.B;
    const stddev =
      Math.sqrt(this.state.A * (Math.pow(this.state.X, 2) - 1)) /
      (2 * Math.sqrt(3));
    return (
      <div>
        <InputRow label="A">
          <NumberInput
            value={this.state.A}
            handleChange={this.changeA}
            min={1}
          />
        </InputRow>
        <InputRow label="X">
          <select value={this.state.X} onChange={this.changeX}>
            {[2, 3, 4, 6, 8, 10, 12, 20, 100].map(X => (
              <option key={X} value={X}>
                d{X}
              </option>
            ))}
          </select>
        </InputRow>
        <InputRow label="B">
          <NumberInput
            value={this.state.B}
            handleChange={this.changeB}
            min={0}
          />
        </InputRow>
        <hr />
        <p>
          {this.state.A}d{this.state.X} + {this.state.B}
        </p>
        <ul>
          <li>⌊μ-2σ⌋ = {Math.floor(mean - 2 * stddev)}</li>
          <li>⌊μ-σ⌋ = {Math.floor(mean - stddev)}</li>
          <li>⌊μ⌋ = {Math.floor(mean)}</li>
          <li>⌊μ+σ⌋ = {Math.floor(mean + stddev)}</li>
          <li>⌊μ+2σ⌋ = {Math.floor(mean + 2 * stddev)}</li>
        </ul>
        <ul>
          <li>μ = {mean}</li>
          <li>σ ≈ {stddev.toFixed(6)}</li>
        </ul>
      </div>
    );
  }
}

const App = props => (
  <div className="App">
    <h1>Dice to Distribution</h1>
    <Calculator />
  </div>
);

export default App;
