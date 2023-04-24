import { FC, ReactNode, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ResolutionContext } from "../../contexts/ResolutionContext";
import { checkIfMobile } from "../../utils/functions/utils";
import TopNavBar from "./Navigation/TopNavBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [mobileBurgerClicked, setMobileBurgerClicked] = useState<boolean>(false);
  const isMobile = checkIfMobile();

  return (
    <BrowserRouter>
      <ResolutionContext.Provider
        value={{ mobileBurgerClicked: mobileBurgerClicked, setMobileBurgerClicked: setMobileBurgerClicked }}
      >
        <div
          className={`w-full h-full flex flex-col flex-nowrap ${
            isMobile && mobileBurgerClicked && "overflow-hidden bg-gray-50"
          }`}
        >
          <TopNavBar />
          {children}
        </div>
      </ResolutionContext.Provider>
    </BrowserRouter>
  );
};

export default Layout;
