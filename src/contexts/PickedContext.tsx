import React, { createContext } from "react";

interface contextInterface {
  picked: string | null;
  setPicked: React.Dispatch<React.SetStateAction<string | null>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const initialContext = {
  picked: null,
  setPicked: () => { },
  count: 0,
  setCount: () => { }
};
export const PickedContext = createContext<contextInterface>(initialContext);
