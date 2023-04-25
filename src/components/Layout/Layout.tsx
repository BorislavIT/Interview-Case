import { FC, ReactNode, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ResolutionContext } from "../../contexts/ResolutionContext";
import { checkIfMobile } from "../../utils/functions/utils";
import { Toast } from "../Toast/Toast";
import { ToastContext } from "../../contexts/ToastContext";
import TopNavBar from "./Navigation/TopNavBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [mobileBurgerClicked, setMobileBurgerClicked] = useState<boolean>(false);
  const [toastVisible, setToastVisible] = useState<boolean>(false);
  const isMobile = checkIfMobile();

  useEffect(() => {
    if (!isMobile) setMobileBurgerClicked(false);
  }, [isMobile]);

  return (
    <BrowserRouter>
      <ToastContext.Provider value={{ toastVisible, setToastVisible }}>
        <ResolutionContext.Provider value={{ mobileBurgerClicked, setMobileBurgerClicked }}>
          <div
            className={`w-full h-full flex flex-col flex-nowrap relative ${
              isMobile && mobileBurgerClicked && "overflow-hidden bg-gray-50"
            }`}
          >
            <TopNavBar />
            <Toast type="confirm" text="You have successfully updated your details" closable visible={toastVisible} />
            {children}
          </div>
        </ResolutionContext.Provider>
      </ToastContext.Provider>
    </BrowserRouter>
  );
};

export default Layout;
