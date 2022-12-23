import Choice from "./Choice";

export default function BasicChoice() {
  return (
    <div
      id="triangle"
      className="mx-auto flex flex-col justify-between items-center mt-[64px]"
    >
      <div className="flex justify-between w-full">
        <Choice choose="paper" />
        <Choice choose="scissors" />
      </div>
      <Choice choose="rock" />
    </div>
  );
}
