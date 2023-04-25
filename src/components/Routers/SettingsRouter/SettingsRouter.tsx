import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CircularLoader from "../../Loaders/CircularLoader";
import useAvailableSettingsModules from "./useAvailableSettingsModules";

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
    </Routes>
  );
};

export default SettingsRouter;
