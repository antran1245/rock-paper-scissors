import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";

interface ChoiceProps {
  choose: string;
}

const choices: { [key: string]: any } = {
  paper: {
    background: "bg-blue",
    borderColor: "border-darkBlue",
  },
  rock: {
    background: "bg-red",
    borderColor: "border-darkRed",
  },
  scissors: {
    background: "bg-gold",
    borderColor: "border-darkGold",
  },
};

export default function Choice({ choose }: ChoiceProps) {
  return (
    <div
      className={`choiceCircle border-b-[9px] w-fit ${choices[choose].background}  ${choices[choose].borderColor}`}
    >
      {choose === "rock" ? (
        <img src={rock} alt={`rock`} className="choice" />
      ) : null}
      {choose === "paper" ? (
        <img src={paper} alt={`paper`} className="choice" />
      ) : null}
      {choose === "scissors" ? (
        <img src={scissors} alt={`scissors`} className="choice" />
      ) : null}
    </div>
  );
}
