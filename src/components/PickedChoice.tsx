import React, { useCallback, useContext, useEffect, useState } from "react";
import { PickedContext } from "../contexts/PickedContext";
import Choice from "./Choice";

interface PickedChoiceProps {
  set: string[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function PickedChoice({ set, setCount }: PickedChoiceProps) {
  const context = useContext(PickedContext);
  const [compPicked, setCompPicked] = useState<string | null>(null);
  const [winner, setWinner] = useState<"you" | "house" | "draw" | null>(null);
  const basic = [...set][Math.floor(Math.random() * set.length)]

  /**
   * Delay set up of what the house choose.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (compPicked === null) {
        setCompPicked(basic);
      }
    }, 700);
    return () => {
      clearTimeout(timer);
    }
  }, [basic, compPicked]);

  /**
   * increase count on very win
   */
  const increaseCount = useCallback(() => {
    setCount(c => c + 1)
  }, [setCount])

  /**
   * Determine if the user win or the house win.
   */
  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (context.bonus) {
        if (context.picked === "rock" && (compPicked === "paper" || compPicked === "spock")) {
          setWinner("house");
        } else if (context.picked === "paper" && (compPicked === "scissors" || compPicked === "lizard")) {
          setWinner("house");
        } else if (context.picked === "scissors" && (compPicked === "rock" || compPicked === "spock")) {
          setWinner("house");
        } else if (context.picked === "spock" && (compPicked === "lizard" || compPicked === "paper")) {
          setWinner("house");
        } else if (context.picked === "lizard" && (compPicked === "rock" || compPicked === "scissors")) {
          setWinner("house");
        } else if (context.picked !== compPicked) {
          setWinner("you");
          increaseCount()
        }
      } else {
        if (context.picked === "rock" && compPicked === "paper") {
          setWinner("house");
        } else if (context.picked === "paper" && compPicked === "scissors") {
          setWinner("house");
        } else if (context.picked === "scissors" && compPicked === "rock") {
          setWinner("house");
        } else if (context.picked !== compPicked) {
          setWinner("you");
          increaseCount()
        }
      }
      if (context.picked === compPicked) {
        setWinner("draw");
      }
    }, 1000);
    return () => clearTimeout(timer1)
  }, [compPicked, context.bonus, context.picked, increaseCount])

  return (
    <div className="mx-auto flex mb-[72px] w-[50%] h-fit lg:w-[90%] md:w-[100%] xl:w-[80%] md:flex-col md:items-center md:mt-[99px]">
      <div className="flex justify-between items-center w-full">
        {/* 
          You Picked
        */}
        <div className="w-[50%] flex flex-col items-center relative">
          <p className="font-[700] text-[24px] leading-[32px] tracking-[3px] text-white text-center mb-[63px] block sm:hidden">
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
          <p className="hidden sm:block text-white text-[15px] font-[700] leading-[32px]">YOU PICKED</p>
        </div>

        {/* Text and button to play again */}
        <div className="w-[40%] flex justify-center md:hidden">
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
                  className="bg-white rounded-[8px] py-[15px] px-[60px] text-background text-[16px] font-[600] leading-[19px] tracking-[2.5px] hover:text-red lg:px-[50px]"
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
          <p className="font-[700] text-[24px] leading-[32px] tracking-[3px] text-white text-center mb-[63px] block sm:hidden">
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
            <div className="bg-[#000000]/10 w-[225px] h-[225px] rounded-[50%] my-auto sm:w-[100px] sm:h-[100px]"></div>
          )}
          <p className="hidden sm:block text-white text-[15px] font-[700] leading-[32px]">THE HOUSE PICKED</p>
        </div>
      </div>
      {/* Text and button to play again */}
      <div className="w-[40%] md:flex justify-center hidden mt-[62px] sm:w-[80%]">
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
                className="bg-white rounded-[8px] py-[15px] px-[60px] text-background text-[16px] font-[600] leading-[19px] tracking-[2.5px] hover:text-red lg:px-[50px]"
                onClick={() => context.setPicked(null)}>
                PLAY AGAIN
              </button>
            </div> : <div className="h-[132px]"></div>
        }
      </div>
    </div>
  );
}
