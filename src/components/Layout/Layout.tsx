import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import TopNavBar from "./Navigation/TopNavBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <div className={`w-full h-full flex flex-col flex-nowrap`}>
        <TopNavBar />
        {children}
      </div>
    </BrowserRouter>
  );
};

export default Layout;
