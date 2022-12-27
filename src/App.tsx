import { useState } from "react";
import { PickedContext } from "./contexts/PickedContext";
import BasicChoice from "./components/BasicChoice";
import Scoreboard from "./components/Scoreboard";
import PickedChoice from "./components/PickedChoice";
import Rules from "./components/Rules";
import "./App.css";
import BonusChoice from "./components/BonusChoice";

function App() {
  const [picked, setPicked] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0)
  const [bonus, setBonus] = useState<boolean>(false)

  return (
    <PickedContext.Provider value={{ picked, setPicked, bonus }}>
      <main className="bg-background h-[100vh] w-full pt-[48px] pb-[32px] flex flex-col justify-between relative">
        <Scoreboard count={count} />
        {picked === null ?
          (bonus ?
            <BonusChoice /> :
            <BasicChoice />
          ) :
          <PickedChoice set={bonus ? ["rock", "paper", "scissors", "spock", "lizard"] : ["rock", "paper", "scissors"]} setCount={setCount} />
        }
        <div className="self-end md:self-center flex flex-col mr-[32px] md:mr-0">
          <Rules />
          <button className="w-[128px] border-purple border-[1px] rounded-[8px] py-[11px] px-[37px] text-[16px] text-aqua tracking-[2.5px] leading-[19px] font-[600] hover:bg-purple hover:text-aqua mt-[10px]"
            onClick={() => {
              setPicked(null)
              setBonus(!bonus)
            }}>
            {bonus ? 'BASIC' : 'BONUS'}
          </button>
        </div>
      </main>
    </PickedContext.Provider>
  );
}

export default App;
