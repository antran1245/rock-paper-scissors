import React from "react";
import BasicChoice from "./components/BasicChoice";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
  return (
    <main className="bg-background h-[100vh] w-full pt-[48px] flex flex-col">
      <Scoreboard />
      <BasicChoice />
    </main>
  );
}

export default App;
