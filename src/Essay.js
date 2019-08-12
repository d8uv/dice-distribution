import React, { PureComponent } from "react";
import { toWords } from "number-to-words";

const ChangeDiceFormulaLink = props => (
  <button
    className="changeStateFauxLink"
    data-a={props.A}
    data-x={props.X}
    data-b={props.B}
    onClick={props.onClick}
  >
    {props.A}d{props.X} + {props.B}
  </button>
);
const ChangeStatBlockLink = props => (
  <button
    className="changeStateFauxLink"
    onClick={props.onClick}
    value={props.value}
  >
    {props.children}
  </button>
);

class Essay extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { displayedStatblock: "bugbear" };
  }

  changeStatblock = event =>
    this.setState({ displayedStatblock: event.target.value });

  render() {
    const props = this.props;

    var statblock;
    switch (this.state.displayedStatblock) {
      case "worg":
        statblock = (
          <aside className="statblock">
            <h3>Worg</h3>
            <p className="race">
              <i>
                <small>Large monstrosity, neutral evil</small>
              </i>
            </p>
            <p>
              <b>Armor Class:</b> 13 (natural armor)<br />
              <b>Hit Points:</b> 26 (<ChangeDiceFormulaLink
                A="4"
                X="10"
                B="4"
                onClick={props.changeDiceFormula}
              />)<br />
              <b>Speed:</b> 50 ft.
            </p>
            <h4 className="visuallyhidden">Ability Scores</h4>
            <table className="ability-scores">
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
                  <td>16 (+3)</td>
                  <td>13 (+1)</td>
                  <td>13 (+1)</td>
                  <td>7 (−2)</td>
                  <td>11 (+0)</td>
                  <td>8 (−1)</td>
                </tr>
              </tbody>
            </table>
            <h4 className="visuallyhidden">Abilities</h4>
            <p>
              <b>Skills:</b> Perception +4<br />
              <b>Senses:</b> darkvision 60 ft., passive Perception 14<br />
              <b>Languages:</b> Goblin, Worg<br />
              <b>Challenge:</b> ½ (100 XP)
            </p>
            <h4 className="visuallyhidden">Traits</h4>
            <p>
              <mark className="killable-zone">
                <b>Killable Zone:</b> The worg has between 20 and 32 hit points.
              </mark>
            </p>
            <p>
              <b>Keen Hearing and Smell.</b> The worg has advantage on Wisdom
              (Perception) checks that rely on hearing or smell.
            </p>
            <h4 className="actions">
              <span className="visuallyhidden">Actions</span>
            </h4>
            <p>
              <b>Bite.</b> <i>Melee Weapon Attack:</i> +5 to hit, reach 5 ft.,
              one target. <i>Hit:</i> 10 (<ChangeDiceFormulaLink
                A="2"
                X="6"
                B="3"
                onClick={props.changeDiceFormula}
              />) piercing damage. If the target is a creature, it must succeed
              on a DC 13 Strength saving throw or be knocked prone.
            </p>
          </aside>
        );
        break;
      default:
        statblock = (
          <aside className="statblock">
            <h3>Bugbear</h3>
            <p className="race">
              <i>
                <small>Medium humanoid (goblinoid), chaotic evil</small>
              </i>
            </p>
            <p>
              <b>Armor Class:</b> 16 (hide armor, shield)<br />
              <b>Hit Points:</b> 27 (<ChangeDiceFormulaLink
                A="5"
                X="8"
                B="5"
                onClick={props.changeDiceFormula}
              />)<br />
              <b>Speed:</b> 30 ft.
            </p>
            <h4 className="visuallyhidden">Ability Scores</h4>
            <table className="ability-scores">
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
            <h4 className="visuallyhidden">Abilities</h4>
            <p>
              <b>Skills:</b> Stealth +6, Survival +2<br />
              <b>Senses:</b> darkvision 60 ft., passive Perception 10<br />
              <b>Languages:</b> Common, Goblin<br />
              <b>Challenge:</b> 1 (200 XP)
            </p>
            <h4 className="visuallyhidden">Traits</h4>
            <p>
              <mark className="killable-zone">
                <b>Killable Zone:</b> The bugbear has between 22 and 33 hit points.
              </mark>
            </p>
            <p>
              <b>Brute.</b> A melee weapon deals one extra die of its damage
              when the bugbear hits with it (included in the attack).
            </p>
            <p>
              <b>Surprise Attack.</b> If the bugbear surprises a creature and
              hits it with an attack during the first round of combat, the
              target takes an extra 7 (<ChangeDiceFormulaLink
                A="2"
                X="6"
                B="0"
                onClick={props.changeDiceFormula}
              />) damage from the attack.
            </p>
            <h4 className="actions">
              <span className="visuallyhidden">Actions</span>
            </h4>
            <p>
              <b>Morningstar.</b> <i>Melee Weapon Attack:</i> +4 to hit, reach 5
              ft., one target. <i>Hit:</i> 11 (<ChangeDiceFormulaLink
                A="2"
                X="8"
                B="2"
                onClick={props.changeDiceFormula}
              />) piercing damage.
            </p>
            <p>
              <b>Javelin.</b> <i>Melee or Ranged Weapon Attack:</i> +4 to hit,
              reach 5 ft. or range 30/120 ft., one target. <i>Hit:</i> 9 (<ChangeDiceFormulaLink
                A="2"
                X="6"
                B="2"
                onClick={props.changeDiceFormula}
              />) piercing damage in melee or 5 (<ChangeDiceFormulaLink
                A="1"
                X="6"
                B="2"
                onClick={props.changeDiceFormula}
              />) piercing damage at range.
            </p>
          </aside>
        );
    }

    const currentDiceFormula = (
      <span>
        {props.A}d{props.X} {props.B < 0 ? "−" : "+"} {Math.abs(props.B)}
      </span>
    );

    return (
      <div id="essay">
        <p>
          Obviously, there’s a bit of math involved in the calculator above, and
          I want to show you how it works. After that, I want to show you one
          application of the tool for D&amp;D that’s gotten me pretty
          excited—the “Killable Zone”. First…
        </p>
        <h2>So, how does this work anyway?</h2>
        <p>
          When you roll multiple dice at a time, some results are more common
          than others. For example, with 3d6, there’s only one way to get a 3,
          and that’s to roll all 1s. In contrast, there’s 27 ways to roll a 10
          (4+3+3, 5+1+4, etc). As it turns out, you more dice you add, the more
          it tends to resemble a{" "}
          <a href="https://en.wikipedia.org/wiki/Normal_distribution">
            normal distribution
          </a>. This means that if we convert the dice notation to a normal
          distribution, we can easily create ranges of likely or rare rolls.
        </p>
        <h3>Dice notation</h3>
        <p>
          In case you don’t know{" "}
          <a href="https://en.wikipedia.org/wiki/Dice_notation">
            dice notation
          </a>, it’s pretty simple. It follows the format{" "}
          <mark>
            <var>A</var>d<var>X</var> + <var>B</var>
          </mark>, where <var>A</var> is the number of dice being rolled,{" "}
          <var>X</var> is the number of sides on each die, and <var>B</var> is a
          number you add to the result. So, if you’re rolling {toWords(props.A)}{" "}
          {toWords(props.X).replace(" ", "-")}-sided die and{" "}
          {props.B < 0 ? "subtracting" : "adding"} {toWords(props.B)}, that
          makes{" "}
          <mark>
            <var>A</var> = {props.A}, <var>X</var> = {props.X}, and <var>B</var>{" "}
            = {props.B}
          </mark>, or <mark>{currentDiceFormula}</mark>.
        </p>
        <h3>Finding the Normal Distribution</h3>
        <p>
          In order to find the normal distribution, we need to find two things:
          The <em>mean (μ)</em>, and the <em>standard deviation (σ)</em>.
        </p>
        <p>
          The{" "}
          <em>
            <a href="https://en.wikipedia.org/wiki/Mean">mean</a>
          </em>{" "}
          is the most common result. It’s the number which is the most likely
          total any given roll of the dice due to it having the most number of
          possible ways to come up. Here’s how to find the mean of a given dice
          formula:
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
          is how far everything tends to be from the mean. It’s the average
          amount that all rolls will differ from the mean. Here’s how to find
          the standard deviation of a given dice formula:
        </p>
        <div className="formula">
          <p>
            <span className="expression">standard deviation</span>{" "}
            <span className="expression">
              ={" "}
              <mark>
                σ = √(<var>A</var> × (<var style={{ marginRight: 2 }}>X</var>² −
                1)) / (2 × √(3))
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
            href={`http://www.wolframalpha.com/input/?i=NormalDistribution%5B${
              props.mean
            },+${props.stddev.toFixed(3)}%5D`}
          >
            put the mean and standard deviation into Wolfram|Alpha to get the
            normal distribution
          </a>, and it will give you a lot of information. We don’t have to get
          that fancy; we can do something simpler.
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
          </mark>. Again, for the above mean and standard deviation, there’s a
          95% chance that any roll will be between{" "}
          {(props.mean - 2 * props.stddev).toFixed(3)} (μ−2σ) and{" "}
          {(props.mean + 2 * props.stddev).toFixed(3)} (μ+2σ).
        </p>
        <p>
          As you can see, it’s really easy to construct ranges of likely values
          using this method. If you’re rolling {currentDiceFormula}, the most
          common result will be around {props.mean}. About 2 out of 3 rolls will
          take place between {(props.mean - props.stddev).toFixed(2)} and{" "}
          {(props.mean + props.stddev).toFixed(2)}. Only about 1 in 22 rolls
          will take place outside of{" "}
          {(props.mean - 2 * props.stddev).toFixed(2)} and{" "}
          {(props.mean + 2 * props.stddev).toFixed(2)}.
        </p>
        <h3>No, but really:</h3>
        <p>There’s two bits of weirdness that I need to talk about.</p>
        <p>
          First, <strong>I’m sort of lying.</strong>{" "}
          <mark>
            Only 3 or more dice actually approximate a normal distribution.
          </mark>
          <br />For two dice, it’s more accurate to use the correct
          distribution—the{" "}
          <a href="https://en.wikipedia.org/wiki/Triangular_distribution">
            triangular distribution
          </a>. I’m using the normal distribution anyway, because{" "}
          <em>eh close enough.</em> The results for μ±σ seem fine, even if the
          results for μ±2σ aren’t.<br />
          For one die, we’re dealing with the{" "}
          <a href="https://en.wikipedia.org/wiki/Discrete_uniform_distribution">
            discrete uniform distribution
          </a>, and all of these results are stupid. Maybe the mean is useful—<em
          >
            maybe
          </em>—but everything else is absolute nonsense.
        </p>
        <p>
          Secondly, I’m ignoring the “Round Down” rule on page 7 of the D&amp;D
          5e Player’s Handbook. I’m using the same old ordinary rounding that
          the rest of math does. This means that things (especially mean values)
          will probably be a little off. It might be better to round it all down
          to be more consistent with the rest of 5e math, but honestly, if
          things might be off by one sometimes, it’s not the end of the world.
        </p>
        <p>
          This tool has a number of uses, like creating bespoke traps for your
          PCs. But, I want to show you the reason I made this in the first
          place:
        </p>
        <h2>Introducing the “Killable Zone”</h2>
        {statblock}
        <p>
          In stat blocks, hit points are shown as a number, and a dice formula.
          Most DMs just treat that number as “that’s how many hit points that
          creature has”, but there’s a more flexible and interesting way to do
          this.
        </p>
        <p>
          The killable zone is defined as{" "}
          <span className="nobr">(μ−σ) – (μ+σ)</span>.<br />
          <mark>
            If your creature has {currentDiceFormula} HP, the killable zone
            would be{" "}
            <span className="nobr">
              {props.levels[1]} – {props.levels[3]}
            </span>
          </mark>. Instead of a single static number that corresponds to the
          creature’s HP, it’s a <em>range</em> of likely HP values.
        </p>
        <p>
          Once your creature takes {props.levels[1]} points of damage, it’s
          likely on death’s door, and can die. Most creatures have around{" "}
          {props.levels[2]} HP. The sturdiest of creatures can take up to{" "}
          {props.levels[3]} points of damage before dying.
        </p>
        <p>
          This allows you, as the DM, to easily adjust combat encounters on the
          fly, but in a rules-as-intended way. Combat going a little easy? A
          little too hard? This lets you know how much you can nudge things
          without it getting weird.
        </p>
        <p>
          There’s a bunch of other things you can do with this, such as time
          when your creatures die for the best dramatic impact, or make a
          weaker-than-normal creature (or stronger) for RP reasons.
        </p>
        <p>
          For example, let’s say you have an encounter with two{" "}
          <ChangeStatBlockLink value="worg" onClick={this.changeStatblock}>
            worgs
          </ChangeStatBlockLink>{" "}
          and one{" "}
          <ChangeStatBlockLink value="bugbear" onClick={this.changeStatblock}>
            bugbear
          </ChangeStatBlockLink>. Using this technique, you could RP one of the
          worgs as a bit sickly, and kill off that worg as soon as it enters the
          killable zone. The other worg you could kill off whenever it feels
          right for combat balance. And, you could RP the bugbear as hating one
          of the PCs, and when the bugbear enters the killable zone, you can
          delay its death until that PC gets the killing blow.
        </p>
        <p>
          In closing, the Killable Zone allows for the DM to quantify the amount
          of nonsense that can take place in the name of story without
          sacrificing the overall feel or tension of the encounter. This allows
          for a more flexible combat experience, and helps you to avoid those
          awkward moments when your party’s rogue kills the cleric’s arch-rival.
          It can also be used to shift the spotlight to characters or players
          who are currently out of focus. To me, that seems a little bit cooler
          and a lot more flavorful than static HP values.
        </p>
      </div>
    );
  }
}

export default Essay;
