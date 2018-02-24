import React from "react";

const Essay = props => (
  <div id="essay">
    <h2>So, what's all this, then?</h2>
    <p>
      When you roll multiple dice at a time, some results are more common than
      others. For example, for 3d6, there's only one way to get a 3, and that's
      to roll all 1s. But, there's 27 ways to roll a 10 (4 + 3 + 3, 5 + 1 + 4,
      etc.). As it turns out, you more dice you add, the more it tends to
      resemble a{" "}
      <a href="https://en.wikipedia.org/wiki/Normal_distribution">
        normal distribution
      </a>. And, if we convert the dice formula to a normal distribution, we can
      easily create ranges of likely or uncommon rolls.
    </p>
  </div>
);

export default Essay;
