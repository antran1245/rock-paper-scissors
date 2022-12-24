import React, { useState } from "react";
import BasicChoice from "./components/BasicChoice";
import Scoreboard from "./components/Scoreboard";
import PickedChoice from "./components/PickedChoice";
import "./App.css";
import { PickedContext } from "./contexts/PickedContext";

function App() {
  const [picked, setPicked] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0)
  return (
    <PickedContext.Provider value={{ picked, setPicked, count, setCount }}>
      <main className="bg-background h-[100vh] w-full pt-[48px] pb-[32px] flex flex-col justify-between">
        <Scoreboard />
        {picked === null ? <BasicChoice /> : <PickedChoice set={["rock", "paper", "scissors"]} />}
        <button className="self-end border-white border-[1px] rounded-[8px] py-[11px] px-[37px] mr-[32px] text-[16px] text-white tracking-[2.5px] leading-[19px] font-[600]">
          RULES
        </button>
      </main>
    </PickedContext.Provider>
  );
}

export default App;
