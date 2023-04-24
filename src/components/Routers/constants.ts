import { FC } from "react";

export type Module = {
    route: string;
    moduleName: string;
    Component: FC<any>;
    props?: any;
}