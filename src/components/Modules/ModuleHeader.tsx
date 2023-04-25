import { FC } from "react";

type ModuleHeaderProps = {
  name: string;
};

const ModuleHeader: FC<ModuleHeaderProps> = ({ name }) => {
  return <div className={`text-header/h2`}>{name}</div>;
};

export default ModuleHeader;
