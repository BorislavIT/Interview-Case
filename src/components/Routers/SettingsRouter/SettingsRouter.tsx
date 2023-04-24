import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SETTINGS_MODULE } from "./constants";
import useAvailableSettingsModules from "./useAvailableSettingsModules";
import CircularLoader from "../../Loaders/CircularLoader";

const SettingsRouter = () => {
  const availableModules = useAvailableSettingsModules();
  return (
    <Routes>
      {availableModules.map((availableModule, index) => {
        const { Component, route, props } = availableModule;
        return (
          <Route
            key={index}
            path={route}
            element={
              <Suspense fallback={<CircularLoader />}>
                <Component {...props} />
              </Suspense>
            }
          />
        );
      })}
      <Route index element={<Navigate to={`/${SETTINGS_MODULE.ROUTES.BASE}/${SETTINGS_MODULE.ROUTES.GENERAL}`} />} />
    </Routes>
  );
};

export default SettingsRouter;
