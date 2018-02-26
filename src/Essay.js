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
        <var>A</var>d<var>X</var> + <var>B</var>
      </mark>, where <var>A</var> is the number of dice being rolled,{" "}
      <var>X</var> is the number of sides on each die, and <var>B</var> is a
      number you add to the result. So, if you’re rolling {toWords(props.A)}{" "}
      {toWords(props.X).replace(" ", "-")}-sided die and{" "}
      {props.B < 0 ? "subtracting" : "adding"} {toWords(props.B)}, that makes{" "}
      <mark>
        <var>A</var> = {props.A}, <var>X</var> = {props.X}, and <var>B</var> ={" "}
        {props.B}
      </mark>, or{" "}
      <mark>
        {props.A}d{props.X} {props.B < 0 ? "−" : "+"} {Math.abs(props.B)}
      </mark>.
    </p>
    <h3>Finding the Normal Distribution</h3>
    <p>
      In order to find the normal distribution, we need to find two things: The{" "}
      <em>
        <a href="https://en.wikipedia.org/wiki/Mean">mean</a> (μ)
      </em>, and the{" "}
      <em>
        <a href="https://en.wikipedia.org/wiki/Standard_deviation">
          standard deviation
        </a>{" "}
        (σ)
      </em>.
    </p>
    <p>
      The mean is the most common result. It’s the number in the middle, and the
      most likely to show up, due to it having the most number of possible ways
      to roll it. Here’s how to find the mean:
    </p>
    <div className="formula">
      <p>
        <span className="expression">mean</span>{" "}
        <span className="expression">
          =
          <mark>
            μ(<var>A</var>, <var>X</var>, <var>B</var>) = (<var>A</var> × (1 +{" "}
            <var>X</var>))/2 + <var>B</var>
          </mark>
        </span>{" "}
        <span className="expression">
          = ({props.A} × (1 + {props.X}))/2 + {props.B}
        </span>{" "}
        <span className="expression">= {props.mean}</span>
      </p>
    </div>
  </div>
);

export default Essay;
