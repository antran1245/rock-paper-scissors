import React, { createContext } from "react";

interface contextInterface {
  picked: string | null;
  setPicked: React.Dispatch<React.SetStateAction<string | null>>;
  bonus: boolean;
}

const initialContext = {
  picked: null,
  setPicked: () => { },
  bonus: false
};
export const PickedContext = createContext<contextInterface>(initialContext);
