import React, { PureComponent } from "react";
import "./App.css";

const getDiceLevel = (mean, stddev, level) => Math.floor(mean + stddev * level);

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

const Calculator = props => (
  <div>
    <InputRow label="A">
      <NumberInput value={props.A} handleChange={props.changeA} min={1} />
    </InputRow>
    <InputRow label="X">
      <select value={props.X} onChange={props.changeX}>
        {[2, 3, 4, 6, 8, 10, 12, 20, 100].map(X => (
          <option key={X} value={X}>
            d{X}
          </option>
        ))}
      </select>
    </InputRow>
    <InputRow label="B">
      <NumberInput value={props.B} handleChange={props.changeB} min={0} />
    </InputRow>
    <hr />
    <p>
      {props.A}d{props.X} + {props.B}
    </p>
    <ul>
      <li>⌊μ-2σ⌋ = {props.levels[0]}</li>
      <li>⌊μ-σ⌋ = {props.levels[1]}</li>
      <li>⌊μ⌋ = {props.levels[2]}</li>
      <li>⌊μ+σ⌋ = {props.levels[3]}</li>
      <li>⌊μ+2σ⌋ = {props.levels[4]}</li>
    </ul>
    <ul>
      <li>μ = {props.mean}</li>
      <li>σ ≈ {props.stddev.toFixed(6)}</li>
    </ul>
  </div>
);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { A: 3, X: 8, B: 0 };
  }
  changeA = event => this.setState({ A: parseInt(event.target.value, 10) });
  changeX = event => this.setState({ X: parseInt(event.target.value, 10) });
  changeB = event => this.setState({ B: parseInt(event.target.value, 10) });

  render() {
    const mean = this.state.A * (1 + this.state.X) / 2 + this.state.B;
    const stddev =
      Math.sqrt(this.state.A * (Math.pow(this.state.X, 2) - 1)) /
      (2 * Math.sqrt(3));
    const levels = [-2, -1, 0, 1, 2].map(level =>
      getDiceLevel(mean, stddev, level)
    );

    return (
      <div className="App">
        <h1>Dice to Distribution</h1>
        <Calculator
          A={this.state.A}
          X={this.state.X}
          B={this.state.B}
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
