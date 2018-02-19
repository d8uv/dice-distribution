import React, { PureComponent } from "react";
import "./App.css";

const getDiceLevel = (mean, stddev, level) => Math.floor(mean + stddev * level);

class NumberInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: "" + this.props.value };
  }
  componentWillReceiveProps(nextprops) {
    this.setState({ value: "" + nextprops.value });
  }
  handleChange = event => {
    const value = event.target.value;
    this.setState({ value: value });
    if (value !== "") {
      this.props.handleChange(event);
    }
  };
  handleBlur = event => {
    const value = event.target.value;
    if (value === "") {
      this.setState({ value: this.props.min });
    } else {
      this.setState({ value: "" + Math.round(value) });
    }
  };
  render() {
    return (
      <input
        type="number"
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        step="1"
        min={this.props.min}
      />
    );
  }
}

const InputRow = props => (
  <p>
    <label>
      {props.label}: {props.children}
    </label>
  </p>
);

const LevelRow = props => (
  <li>
    <span className="col lhs">{props.lhs}</span>{" "}
    <span className="col eq">=</span>{" "}
    <span className="col rhs">{props.rhs}</span>
  </li>
);

const Calculator = props => (
  <div id="calculator">
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
    <p className="formula">
      {props.A}d{props.X} + {props.B}
    </p>
    <ul className="levels">
      <LevelRow lhs="⌊μ-2σ⌋" rhs={props.levels[0]} />
      <LevelRow lhs="⌊μ-σ⌋" rhs={props.levels[1]} />
      <LevelRow lhs="⌊μ⌋" rhs={props.levels[2]} />
      <LevelRow lhs="⌊μ+σ⌋" rhs={props.levels[3]} />
      <LevelRow lhs="⌊μ+2σ⌋" rhs={props.levels[4]} />
    </ul>
    <ul className="nerd-stats">
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
