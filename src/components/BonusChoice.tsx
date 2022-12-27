import Choice from "./Choice";

export default function BonusChoice() {
  return (
    <div
      id="pentagon"
      className="mx-auto flex flex-col justify-between items-center mt-[64px] sm:mt-0"
    >
      <div className="mt-[-50px] sm:mt-0">
        <Choice choose="scissors" size="small" />
      </div>
      <div className="flex justify-between w-full mt-[-60px]">
        <Choice choose="spock" size="small" />
        <Choice choose="paper" size="small" />
      </div>
      <div className="flex justify-evenly w-full mt-[50px]">
        <Choice choose="lizard" size="small" />
        <Choice choose="rock" size="small" />
      </div>
    </div>
  )
}