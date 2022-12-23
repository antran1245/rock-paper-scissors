import { useContext } from "react";
import { PickedContext } from "../contexts/PickedContext";
import Choice from "./Choice";

export default function PickedChoice() {
  const context = useContext(PickedContext);
  return (
    <div className="mx-auto flex justify-between items-between mb-[72px] w-[40%] h-fit">
      <div>
        <p className="font-[700] text-[24px] leading-[32px] tracking-[3px] text-white text-center mb-[63px]">
          YOU PICKED
        </p>
        {context.picked ? <Choice choose={context.picked} size="big" /> : null}
      </div>
      <div className="flex flex-col">
        <p className="font-[700] text-[24px] leading-[32px] tracking-[3px] text-white text-center mb-[63px]">
          YOU PICKED
        </p>
        {!context.picked ? null : (
          <div className="bg-[#000000]/10 w-[225px] h-[225px] rounded-[50%] my-auto"></div>
        )}
      </div>
    </div>
  );
}
