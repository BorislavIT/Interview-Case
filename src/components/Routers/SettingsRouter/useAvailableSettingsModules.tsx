import { lazy } from "react";
import { Module } from "../constants";
import { SETTINGS_MODULE } from "./constants";

const GeneralSettings = lazy(() => import("../../Modules/Settings/Tabs/GeneralSettings"));

const useAvailableSettingsModules = (): Module[] => {
  const availableSettingsModules: Module[] = [
    {
      moduleName: SETTINGS_MODULE.NAME,
      route: `/${SETTINGS_MODULE.ROUTES.GENERAL}`,
      Component: GeneralSettings,
    },
  ];

  return availableSettingsModules;
};

export default useAvailableSettingsModules;
