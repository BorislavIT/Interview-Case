import { useLocation } from "react-router-dom";
import { SETTINGS_MODULE } from "../../Routers/SettingsRouter/constants";
import { SettingsTab } from "./constants";

const useNavigationalSettingsTabs = () => {
    const location = useLocation();

    const settingsTabs: SettingsTab[] = [
      {
        name: "General",
        route: `/${SETTINGS_MODULE.ROUTES.BASE}/${SETTINGS_MODULE.ROUTES.GENERAL}`,
        active: location.pathname.includes(SETTINGS_MODULE.ROUTES.GENERAL),
      },
      {
        name: "Roles management",
        route: `/${SETTINGS_MODULE.ROUTES.BASE}/${SETTINGS_MODULE.ROUTES.ROLES_MANAGEMENT}`,
        active: location.pathname.includes(SETTINGS_MODULE.ROUTES.ROLES_MANAGEMENT),
      },
      {
        name: "User management",
        route: `/${SETTINGS_MODULE.ROUTES.BASE}/${SETTINGS_MODULE.ROUTES.USER_MANAGEMENT}`,
        active: location.pathname.includes(SETTINGS_MODULE.ROUTES.USER_MANAGEMENT),
      },
      {
        name: "Notifications",
        route: `/${SETTINGS_MODULE.ROUTES.BASE}/${SETTINGS_MODULE.ROUTES.NOTIFICATIONS}`,
        active: location.pathname.includes(SETTINGS_MODULE.ROUTES.NOTIFICATIONS),
      },
    ];

    return settingsTabs;
}

export default useNavigationalSettingsTabs;