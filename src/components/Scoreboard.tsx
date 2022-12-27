import { useContext } from "react";
import { PickedContext } from "../contexts/PickedContext";
import logo from "../assets/images/logo.svg";
import logoBonus from '../assets/images/logo-bonus.svg'

interface ScoreboardProps {
  count: number;
}
export default function Scoreboard({ count }: ScoreboardProps) {
  const { bonus } = useContext(PickedContext)
  return (
    <div className="border-white/20 mx-auto py-[18px] border-[3px] rounded-[15px] w-[100%] max-w-[700px] pl-[33px] pr-[24px] flex justify-between sm:pl-[23px] sm:mx-auto sm:w-[90%]">
      {
        bonus ?
          <img src={logoBonus} alt="logo bonus" /> :
          <img src={logo} alt="logo" />
      }
      <div className="w-[150px] sm:w-[80px] rounded-[8px] bg-white flex flex-col justify-center items-center py-[16px]">
        <p className="text-darkBlue font-[600] text-[16px] leading-[19px] tracking-[2.5px] sm:text-[10px] sm:leading-[12px] sm:tracking-[1.56px]">
          SCORE
        </p>
        <p className="text-[#565468] font-[700] text-[64px] leading-[64px] sm:text-[40px] sm:leading-[40px]">
          {count}
        </p>
      </div>
    </div>
  );
}
