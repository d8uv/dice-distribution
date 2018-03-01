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
      can easily create ranges of likely or rare rolls.
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
      <em>mean (μ)</em>, and the <em>standard deviation (σ)</em>.
    </p>
    <p>
      The{" "}
      <em>
        <a href="https://en.wikipedia.org/wiki/Mean">mean</a>
      </em>{" "}
      is the most common result. It’s the number in the middle, and the most
      likely to show up, due to it having the most number of possible ways to
      roll it. Here’s how to find the mean of a given dice formula:
    </p>
    <div className="formula">
      <p>
        <span className="expression">mean</span>{" "}
        <span className="expression">
          ={" "}
          <mark>
            μ = (<var>A</var> × (1 + <var>X</var>)) / 2 + <var>B</var>
          </mark>
        </span>{" "}
        <span className="expression">
          = ({props.A} × (1 + {props.X})) / 2 + {props.B}
        </span>{" "}
        <span className="expression">= {props.mean}</span>
      </p>
    </div>
    <p>
      The{" "}
      <em>
        <a href="https://en.wikipedia.org/wiki/Standard_deviation">
          standard deviation
        </a>
      </em>{" "}
      is… how far everything tends to be from the mean. It’s the average amount
      that all rolls will differ from the mean. Here’s how to find the standard
      deviation of a given dice formula:
    </p>
    <div className="formula">
      <p>
        <span className="expression">standard deviation</span>{" "}
        <span className="expression">
          ={" "}
          <mark>
            σ = √(<var>A</var> × (<var>X</var>² − 1)) / (2 × √(3))
          </mark>
        </span>{" "}
        <span className="expression">
          = √({props.A} × ({props.X}² − 1)) / (2 × √(3))
        </span>{" "}
        <span className="expression">≈ {props.stddev.toFixed(3)}</span>
      </p>
    </div>
    <p>
      Now, you could{" "}
      <a
        href={
          "http://www.wolframalpha.com/input/?i=NormalDistribution%5B" +
          props.mean +
          ",+" +
          props.stddev.toFixed(3) +
          "%5D"
        }
      >
        put the mean and standard deviation into Wolfram|Alpha to get the normal
        distribution
      </a>, and it will give you a lot of information. But, we can do something
      simpler.
    </p>
    <h3>The 68–95–99.7 rule</h3>
    <p>
      Due to{" "}
      <a href="https://en.wikipedia.org/wiki/68%E2%80%9395%E2%80%9399.7_rule">
        the 68–95–99.7 rule
      </a>, for normal distributions,{" "}
      <mark>
        there’s a 68.27% chance that any roll will be within one standard
        deviation of the mean (μ±σ)
      </mark>. So, for the above mean and standard deviation, there’s a 68%
      chance that any roll will be between{" "}
      {(props.mean - props.stddev).toFixed(3)} (μ−σ) and{" "}
      {(props.mean + props.stddev).toFixed(3)} (μ+σ).
    </p>
    <p>
      Furthermore,{" "}
      <mark>
        there’s a 95.45% chance that any roll will be within two standard
        deviations of the mean (μ±2σ)
      </mark>. Again, for the above mean and standard deviation, there’s a 95%
      chance that any roll will be between{" "}
      {(props.mean - 2 * props.stddev).toFixed(3)} (μ−2σ) and{" "}
      {(props.mean + 2 * props.stddev).toFixed(3)} (μ+2σ).
    </p>
    <p>
      As you can see from this, it’s really easy to construct ranges of likely
      values. If you’re rolling {props.A}d{props.X} {props.B < 0 ? "−" : "+"}{" "}
      {Math.abs(props.B)}, the most common result will be around {props.mean}.
      About 2 out of 3 rolls will take place between{" "}
      {(props.mean - props.stddev).toFixed(2)} and{" "}
      {(props.mean + props.stddev).toFixed(2)}. Only about 1 in 22 rolls will
      take place outside of {(props.mean - 2 * props.stddev).toFixed(2)} and{" "}
      {(props.mean + 2 * props.stddev).toFixed(2)}.
    </p>
    <h3>No, but really:</h3>
    <p>There’s two bits of weirdness that I need to talk about.</p>
    <p>
      Firstly, <strong>I’m sort of lying.</strong>{" "}
      <mark>
        Only 3 or more dice actually approximate a normal distribution.
      </mark>
      <br />For two dice, it’s more accurate to use the correct distribution—the{" "}
      <a href="https://en.wikipedia.org/wiki/Triangular_distribution">
        triangular distribution
      </a>. I’m using the normal distribution anyway, because{" "}
      <em>eh close enough.</em> The results for μ±σ seem fine, even if the
      results for μ±2σ aren’t.<br />
      For one die, we’re dealing with the{" "}
      <a href="https://en.wikipedia.org/wiki/Discrete_uniform_distribution">
        discrete uniform distribution
      </a>, and all of these results are stupid. Maybe the mean is useful,
      maybe, but everything else is absolute nonsense.
    </p>
    <p>
      Secondly, I’m ignoring the “Round Down” rule on page 7 of the D&amp;D 5e
      Player’s Handbook. I'm using the same ol’ ordinary rounding that the rest
      of math does. This means that things (especially mean values) will
      probably be a little off. It might be better to round it all down to be
      more consistent with the rest of 5e math, but… honestly, if things might
      be off by one sometimes, it’s not the end of the world.
    </p>
    <p>
      This tool has a number of uses, like creating bespoke traps for your PCs.
      But, I want to show you the reason I made this in the first place:
    </p>
    <h2>Introducing the “Killable Zone”</h2>
    <aside className="statblock">
      <h3>Bugbear</h3>
      <p className="race">
        <i>
          <small>Medium humanoid (goblinoid), chaotic evil</small>
        </i>
      </p>
      <p>
        <b>Armor Class:</b> 16 (hide, shield)<br />
        <b>Hit Points:</b> 27 (5d8 + 5)<br />
        <mark className="killable-zone">
          <b>Killable Zone:</b> 22 – 33
        </mark>
        <br />
        <b>Speed:</b> 30 ft.
      </p>
      <table className="ability-scores">
        {/* <caption>Ability Scores</caption> */}
        <tbody>
          <tr>
            <th scope="col">
              <abbr title="Strength">Str</abbr>
            </th>
            <th scope="col">
              <abbr title="Dexterity">Dex</abbr>
            </th>
            <th scope="col">
              <abbr title="Constitution">Con</abbr>
            </th>
            <th scope="col">
              <abbr title="Intelligence">Int</abbr>
            </th>
            <th scope="col">
              <abbr title="Wisdom">Wis</abbr>
            </th>
            <th scope="col">
              <abbr title="Charisma">Cha</abbr>
            </th>
          </tr>
          <tr>
            <td>15 (+2)</td>
            <td>14 (+2)</td>
            <td>13 (+1)</td>
            <td>8 (−1)</td>
            <td>11 (+0)</td>
            <td>9 (−1)</td>
          </tr>
        </tbody>
      </table>
      <p>
        <b>Skills:</b> Stealth +6, Survival +2<br />
        <b>Senses:</b> darkvision 60ft., passive Perception 10<br />
        <b>Languages:</b> Common, Goblin<br />
        <b>Challenge:</b> 1 (200 XP)
      </p>
      <p>
        <b>Brute.</b> A melee weapon deals one extra die of its damage when the
        bugbear hits with it (included in the attack).
      </p>
      <p>
        <b>Surprise Attack.</b> If the bugbear surprises a creature and hits it
        with an attack during the first round of combat, the target takes an
        extra 7 (2d6) damage from the attack.
      </p>
    </aside>
    <p>In stat blocks, hit points are shown as a number, and a dice formula. Most DMs just treat that number as “that’s how many hit points that monster has”, but there’s a more flexible and interesting way to do this.</p>
    <p>Consider the Bugbear, who has <u className="changeDiceFormula" data-a="5" data-x="8" data-b="5" onClick={props.changeDiceFormula}>5d8 + 5</u> HP. Using the above tool, we can see that μ−σ ≈ 22, and μ+σ ≈ 33. So, we define the killing zone of the bugbear as 22 – 33.</p>
    <p>This allows you, as the DM, to easily adjust combat encounters on the fly, but in a rules-as-intended way. Combat going a little easy? A little too hard? This lets you know how much you can nudge things, without it getting weird.</p>
    <p>There’s a bunch of other things you can do with this, such as time when your monsters die for the best dramatic impact, or make a weaker-than-normal monster (or stronger) for RP reasons.</p>
  </div>
);

export default Essay;
