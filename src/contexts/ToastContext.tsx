import { createContext, Dispatch, SetStateAction } from "react";

type ToastContextProps = {
  toastVisible: boolean;
  setToastVisible: Dispatch<SetStateAction<boolean>>;
};

export const ToastContext = createContext<ToastContextProps>(null!);
