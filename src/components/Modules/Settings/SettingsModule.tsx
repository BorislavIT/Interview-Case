import { Suspense } from "react";
import { SETTINGS_MODULE } from "../../Routers/SettingsRouter/constants";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import ModuleHeader from "../ModuleHeader";
import useNavigationalSettingsTabs from "./useNavigationalSettingsTabs";
import CircularLoader from "../../Loaders/CircularLoader";
import useAvailableSettingsTabs from "./useAvailableSettingsTabs";

const SettingsModule = () => {
  const navigate = useNavigate();
  const settingsTabs = useNavigationalSettingsTabs();
  const availableTabs = useAvailableSettingsTabs();

  const onSettingsTabClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className={`w-full bg-gray-50 p-10 flex flex-row flex-wrap gap-6`}>
      <div className={`w-full flex justify-start`}>
        <ModuleHeader name={SETTINGS_MODULE.ROUTES.BASE} />
      </div>
      <div className={`w-full flex justify-start gap-3 text-body2/medium flex-wrap md:flex-nowrap`}>
        {/* design says to use primary-500, but couldnt figure it out, so picked blue :( */}
        {settingsTabs.map((settingsTab, index) => {
          return (
            <div
              className={`p-3 text-body2/medium w-full md:w-auto content-start ${
                settingsTab.active ? " border-blue-500 border-solid border-b-[3px]" : "text-gray-500"
              }`}
              key={index}
              onClick={() => onSettingsTabClick(settingsTab.route)}
            >
              <div className={`cursor-pointer text-left`}>{settingsTab.name}</div>
            </div>
          );
        })}
      </div>
      <div className={`w-full bg-white p-6 rounded-md`}>
        <Routes>
          {availableTabs.map((availableTab, index) => {
            const { Component, route, props } = availableTab;
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
          <Route
            index
            element={
              <Suspense fallback={<CircularLoader />}>
                <Navigate to={`/${SETTINGS_MODULE.ROUTES.BASE}/${SETTINGS_MODULE.ROUTES.GENERAL}`} />
              </Suspense>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default SettingsModule;
