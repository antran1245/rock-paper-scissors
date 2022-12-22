import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";

export default function BasicChoice() {
  return (
    <div
      id="triangle"
      className="mx-auto flex flex-col justify-between items-center mt-[64px]"
    >
      <div className="flex justify-between w-full">
        <div className="choiceCircle bg-blue border-b-[9px] border-darkBlue w-fit">
          <img src={paper} alt="paper" className="choice" />
        </div>
        <div className="choiceCircle bg-gold border-b-[9px] border-darkGold w-fit">
          <img src={scissors} alt="scissors" className="choice" />
        </div>
      </div>
      <div className="choiceCircle bg-red border-b-[9px] border-darkRed w-fit">
        <img src={rock} alt="rock" className="choice" />
      </div>
    </div>
  );
}
