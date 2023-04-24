import { useLocation } from "react-router";
import { SETTINGS_MODULE } from "../../../Routers/SettingsRouter/constants";
import { SettingsTab } from "./constants";

const GeneralSettings = () => {
  const location = useLocation();

  const settingsTabs: SettingsTab[] = [
    {
      NAME: "General",
      ROUTE: `/${SETTINGS_MODULE.ROUTES.BASE}/${SETTINGS_MODULE.ROUTES.GENERAL}`,
      ACTIVE: location.pathname.includes(SETTINGS_MODULE.ROUTES.GENERAL),
    },
    {
      NAME: "Roles management",
      ROUTE: `/${SETTINGS_MODULE.ROUTES.BASE}/${SETTINGS_MODULE.ROUTES.ROLES_MANAGEMENT}`,
      ACTIVE: false,
    },
    {
      NAME: "User management",
      ROUTE: `/${SETTINGS_MODULE.ROUTES.BASE}/${SETTINGS_MODULE.ROUTES.USER_MANAGEMENT}`,
      ACTIVE: false,
    },
    {
      NAME: "Notifications",
      ROUTE: `/${SETTINGS_MODULE.ROUTES.BASE}/${SETTINGS_MODULE.ROUTES.NOTIFICATIONS}`,
      ACTIVE: false,
    },
  ];

  return (
    <div className={`w-full bg-gray-50 p-10 flex flex-row flex-wrap gap-6`}>
      <div className={`w-full flex justify-start`}>
        <div className={`text-header/h2`}>Settings</div>
      </div>
      <div className={`w-full flex justify-start flex-column gap-3 text-body2/medium`}>
        {/* design says to use primary-500, but not sure how to do that so picked blue :( */}
        {settingsTabs.map((settingsTab, index) => {
          return (
            <div
              className={`p-3 text-body2/medium ${
                settingsTab.ACTIVE ? " border-blue-500 border-solid border-b-[3px]" : "text-gray-500"
              }`}
              key={index}
            >
              <span className={`cursor-pointer`}>{settingsTab.NAME}</span>
            </div>
          );
        })}
      </div>
      <div className={`w-full flex justify-start`}>
        <div className={`text-header/h2`}>Settings</div>
      </div>
    </div>
  );
};

export default GeneralSettings;
