import React from "react";
import { toWords } from "number-to-words";

const Essay = props => (
  <div id="essay">
    <h2>So, what’s all this, then?</h2>
    <p>
      When you roll multiple dice at a time, some results are more common than
      others. For example, with 3d6, there’s only one way to get a 3, and that’s
      to roll all 1s. But, there’s 27 ways to roll a 10 (4+3+3, 5+1+4, etc). As
      it turns out, you more dice you add, the more it tends to resemble a{" "}
      <a href="https://en.wikipedia.org/wiki/Normal_distribution">
        normal distribution
      </a>. And, if we convert the dice notation to a normal distribution, we
      can easily create ranges likely or rare rolls.
    </p>
    <h3>Dice notation</h3>
    <p>
      In case you don’t know{" "}
      <a href="https://en.wikipedia.org/wiki/Dice_notation">dice notation</a>,
      it’s pretty simple. It follows the format{" "}
      <mark>
        <i>A</i>d<i>X</i> + <i>B</i>
      </mark>, where <i>A</i> is the number of dice being rolled, <i>X</i> is
      the number of sides on each die, and <i>B</i> is a number you add to the
      result. So, if you’re rolling {toWords(props.A)}{" "}
      {toWords(props.X).replace(" ", "-")}-sided die and{" "}
      {props.B < 0 ? "subtracting" : "adding"}{" "}
      {toWords(props.B)}, that makes{" "}
      <mark>
        <i>A</i> = {props.A}, <i>X</i> = {props.X}, and <i>B</i> = {props.B}
      </mark>, or{" "}
      <mark>
        {props.A}d{props.X} {props.B < 0 ? "−" : "+"} {Math.abs(props.B)}
      </mark>.
    </p>
  </div>
);

export default Essay;
