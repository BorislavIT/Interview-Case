import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SETTINGS_MODULE } from "./SettingsRouter/constants";
import useAvailableModules from "./useAvailableModules";
import CircularLoader from "../Loaders/CircularLoader";

const MainRouter = () => {
  const availableModules = useAvailableModules();

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
      <Route index element={<Navigate to={`/${SETTINGS_MODULE.ROUTES.BASE}`} />} />
    </Routes>
  );
};

export default MainRouter;
