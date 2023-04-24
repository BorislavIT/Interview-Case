import { lazy } from "react";
import { Module } from "./constants";
import { SETTINGS_MODULE } from "./SettingsRouter/constants";

const SettingsRouter = lazy(() => import("./SettingsRouter/SettingsRouter"));

const useAvailableModules = (): Module[] => {
  const availableModules: Module[] = [
    {
      moduleName: SETTINGS_MODULE.NAME,
      route: `/${SETTINGS_MODULE.ROUTES.BASE}/*`,
      Component: SettingsRouter,
    },
  ];

  return availableModules;
};

export default useAvailableModules;
