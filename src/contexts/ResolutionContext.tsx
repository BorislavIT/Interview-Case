import { createContext, Dispatch, SetStateAction } from "react";

type ResolutionContextProps = {
  mobileBurgerClicked: boolean;
  setMobileBurgerClicked: Dispatch<SetStateAction<boolean>>;
};

export const ResolutionContext = createContext<ResolutionContextProps>(null!);
