import React, { PureComponent, Fragment } from "react";
import { toWords } from "number-to-words";

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
      this.handleChange({ target: { value: this.props.min } });
    } else {
      this.handleChange({ target: { value: Math.round(value) } });
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
  <li className={props.className}>
    <span className="col lhs">{props.lhs}</span>{" "}
    <span className="col eq">=</span>{" "}
    <span className="col rhs">{props.rhs}</span>
  </li>
);

const Calculator = props => {
  const form = (
    <form>
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
    </form>
  );

  var levels;
  switch (props.A) {
    case 1:
      levels = (
        <Fragment>
          <ul className="levels">
            <LevelRow
              lhs="min"
              rhs={1 + props.B}
              className="sigma-0 italic-lhs"
            />
            <LevelRow
              lhs="max"
              rhs={props.X + props.B}
              className="sigma-0 italic-lhs"
            />
          </ul>
          <ul className="nerd-stats">
            <li>μ = {props.mean}</li>
          </ul>
        </Fragment>
      );
      break;
    case 2:
      levels = (
        <Fragment>
          <ul className="levels">
            <LevelRow
              lhs="min"
              rhs={2 + props.B}
              className="sigma-2 italic-lhs"
            />
            <LevelRow lhs="⌊μ−σ⌋" rhs={props.levels[1]} className="sigma-1" />
            <LevelRow lhs="⌊μ⌋" rhs={props.levels[2]} className="sigma-0" />
            <LevelRow lhs="⌊μ+σ⌋" rhs={props.levels[3]} className="sigma-1" />
            <LevelRow
              lhs="max"
              rhs={props.X * 2 + props.B}
              className="sigma-2 italic-lhs"
            />
          </ul>
          <ul className="nerd-stats">
            <li>μ = {props.mean}</li>
            <li>σ ≈ {props.stddev.toFixed(6)}</li>
          </ul>
        </Fragment>
      );
      break;
    default:
      levels = (
        <Fragment>
          <ul className="levels">
            <LevelRow lhs="⌊μ−2σ⌋" rhs={props.levels[0]} className="sigma-2" />
            <LevelRow lhs="⌊μ−σ⌋" rhs={props.levels[1]} className="sigma-1" />
            <LevelRow lhs="⌊μ⌋" rhs={props.levels[2]} className="sigma-0" />
            <LevelRow lhs="⌊μ+σ⌋" rhs={props.levels[3]} className="sigma-1" />
            <LevelRow lhs="⌊μ+2σ⌋" rhs={props.levels[4]} className="sigma-2" />
          </ul>
          <ul className="nerd-stats">
            <li>μ = {props.mean}</li>
            <li>σ ≈ {props.stddev.toFixed(6)}</li>
          </ul>
        </Fragment>
      );
  }

  var summary;
  switch (props.A) {
    case 1:
      break;
    case 2:
      summary = (
        <p className="calculator-summary">
          When you roll {toWords(props.A)} {toWords(props.X).replace(" ", "-")}-sided
          die, the result will{" "}
          <span className="tooltip" title="50%">
            likely
          </span>{" "}
          be between {props.levels[1]} and {props.levels[3]} (usually around{" "}
          {props.levels[2]}).
        </p>
      );
      break;
    default:
      summary = (
        <p className="calculator-summary">
          When you roll {toWords(props.A)} {toWords(props.X).replace(" ", "-")}-sided
          die, the result will{" "}
          <span className="tooltip" title="68%">
            likely
          </span>{" "}
          be between {props.levels[1]} and {props.levels[3]} (usually around{" "}
          {props.levels[2]}). The result will{" "}
          <span className="tooltip" title="95%">
            rarely
          </span>{" "}
          be below {props.levels[0]}, or above {props.levels[4]}.
        </p>
      );
  }

  return (
    <Fragment>
      <div id="calculator">
        {form}
        <hr />
        <p className="formula">
          {props.A}d{props.X} + {props.B}
        </p>
        {levels}
      </div>
      {summary}
    </Fragment>
  );
};

export default Calculator;
