import { useContext } from "react";
import logo from "../assets/images/logo.svg";
import { PickedContext } from "../contexts/PickedContext";

export default function Scoreboard() {
  const { count } = useContext(PickedContext)
  return (
    <div className="border-white/20 mx-auto py-[18px] border-[3px] rounded-[15px] w-[100%] max-w-[700px] pl-[33px] pr-[24px] flex justify-between">
      <img src={logo} alt="logo" />
      <div className="w-[150px] rounded-[8px] bg-white flex flex-col justify-center items-center py-[16px]">
        <p className="text-darkBlue font-[600] text-[16px] leading-[19px] tracking-[2.5px]">
          SCORE
        </p>
        <p className="text-[#565468] font-[700] text-[64px] leading-[64px]">
          {count}
        </p>
      </div>
    </div>
  );
}
