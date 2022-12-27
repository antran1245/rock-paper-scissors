import { useContext } from "react";
import { PickedContext } from "../contexts/PickedContext";
import { ReactComponent as Paper } from "../assets/images/icon-paper.svg";
import { ReactComponent as Scissors } from "../assets/images/icon-scissors.svg";
import { ReactComponent as Rock } from "../assets/images/icon-rock.svg";
import { ReactComponent as Spock } from "../assets/images/icon-spock.svg";
import { ReactComponent as Lizard } from "../assets/images/icon-lizard.svg";

interface ChoiceProps {
  choose: string;
  size: string;
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
  spock: {
    background: "bg-aqua",
    borderColor: "border-darkAqua"
  },
  lizard: {
    background: "bg-purple",
    borderColor: "border-darkPurple"
  }
};

export default function Choice({ choose, size }: ChoiceProps) {
  const context = useContext(PickedContext);
  const { setPicked } = context;
  return (
    <div
      className={`choiceCircle border-b-[9px] sm:border-b-[5px] w-fit relative z-[2] ${choices[choose].background}  ${choices[choose].borderColor} ${size}`}
      onClick={() => setPicked(size === 'big' ? null : choose)}
    >
      {choose === "rock" ? (
        <div className={`choice ${size}`}>
          <Rock />
        </div>
      ) : null}
      {choose === "paper" ? (
        <div className={`choice ${size}`}>
          <Paper />
        </div>
      ) : null}
      {choose === "scissors" ? (
        <div className={`choice ${size}`}>
          <Scissors />
        </div>
      ) : null}
      {choose === "spock" ? (
        <div className={`choice ${size}`}>
          <Spock />
        </div>
      ) : null}
      {choose === "lizard" ? (
        <div className={`choice ${size}`}>
          <Lizard />
        </div>
      ) : null}
    </div>
  );
}
