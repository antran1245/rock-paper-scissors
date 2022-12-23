import React, { createContext } from "react";

interface contextInterface {
  picked: string | null;
  setPicked: React.Dispatch<React.SetStateAction<string | null>>;
}
export const PickedContext = createContext<contextInterface | null>(null);
