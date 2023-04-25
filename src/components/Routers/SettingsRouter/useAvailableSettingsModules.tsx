import { lazy } from "react";
import { Module } from "../constants";
import { SETTINGS_MODULE } from "./constants";

const SettingsModule = lazy(() => import("../../Modules/Settings/SettingsModule"));

const useAvailableSettingsModules = (): Module[] => {
  const availableSettingsModules: Module[] = [
    {
      moduleName: SETTINGS_MODULE.NAME,
      route: `/*`,
      Component: SettingsModule,
    },
  ];

  return availableSettingsModules;
};

export default useAvailableSettingsModules;
