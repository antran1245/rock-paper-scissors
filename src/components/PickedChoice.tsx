import { useContext, useEffect, useState } from "react";
import { PickedContext } from "../contexts/PickedContext";
import Choice from "./Choice";

interface PickedChoiceProps {
  set: string[];
}

export default function PickedChoice({ set }: PickedChoiceProps) {
  const context = useContext(PickedContext);
  const [compPicked, setCompPicked] = useState<string | null>(null);
  const [winner, setWinner] = useState<"you" | "house" | "draw" | null>(null);
  const basic = [...set][Math.floor(Math.random() * 3)];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCompPicked(basic);
      chooseWinner()
    }, 700);
    return () => {
      clearTimeout(timer);
    }
  }, []);

  const chooseWinner = () => {
    const timer = setTimeout(() => {
      if (context.picked === "rock" && basic === "paper") {
        setWinner("house");
      } else if (context.picked === "paper" && basic === "scissors") {
        setWinner("house");
      } else if (context.picked === "scissors" && basic === "rock") {
        setWinner("house");
      } else if (context.picked !== basic) {
        setWinner("you");
        context.setCount(++context.count)
      } else if (context.picked === basic) {
        setWinner("draw");
      }
    }, 1000);
    return () => clearTimeout(timer)
  }
  return (
    <div className="mx-auto flex justify-between items-center mb-[72px] w-[70%] h-fit">

      {/* 
        You Picked
      */}
      <div className="w-[50%] flex flex-col items-center relative">
        <p className="font-[700] text-[24px] leading-[32px] tracking-[3px] text-white text-center mb-[63px]">
          YOU PICKED
        </p>
        {context.picked ? (
          <div className={`${winner === "you" ? "winner3 z-0" : "z-1"} relative`}>
            <div className={`${winner === "you" ? "winner2 z-0" : "z-1"} relative`}>
              <div className={`${winner === "you" ? "winner z-0" : "z-1"} relative`}>
                <Choice choose={context.picked} size="big" />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Text and button to play again */}
      <div className="w-[40%] flex justify-center">
        {
          winner === 'you' || winner === 'house' || winner === 'draw' ?
            <div className="outcome text-center w-full">
              <p className="text-white font-[700] text-[56px] leading-[67px] mb-[16px]">
                {
                  winner === 'you' ?
                    'YOU WIN'
                    : winner === 'draw' ? 'DRAW' :
                      'YOU LOSE'
                }
              </p>
              <button
                className="bg-white rounded-[8px] py-[15px] px-[60px] text-background text-[16px] font-[600] leading-[19px] tracking-[2.5px] hover:text-red"
                onClick={() => context.setPicked(null)}>
                PLAY AGAIN
              </button>
            </div> : null
        }
      </div>
      {/* 
        House Picked
      */}
      <div className="flex flex-col w-[50%] items-center">
        <p className="font-[700] text-[24px] leading-[32px] tracking-[3px] text-white text-center mb-[63px]">
          THE HOUSE PICKED
        </p>
        {compPicked ? (
          <div className={`${winner === "house" ? "winner3 z-0" : "z-1"} relative`}>
            <div className={`${winner === "house" ? "winner2 z-0" : "z-1"} relative`}>
              <div className={`${winner === "house" ? "winner z-0" : "z-1"} relative`}>
                <Choice choose={compPicked} size="big" />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#000000]/10 w-[225px] h-[225px] rounded-[50%] my-auto"></div>
        )}
      </div>
    </div>
  );
}
