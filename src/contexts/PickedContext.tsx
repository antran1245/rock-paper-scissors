import React, { createContext } from "react";

interface contextInterface {
  picked: string | null;
  setPicked: React.Dispatch<React.SetStateAction<string | null>>;
}

const initialContext = {
  picked: null,
  setPicked: () => {},
};
export const PickedContext = createContext<contextInterface>(initialContext);
