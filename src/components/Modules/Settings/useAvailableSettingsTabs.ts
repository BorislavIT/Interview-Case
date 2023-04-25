import { lazy } from "react";
import { SETTINGS_MODULE } from "../../Routers/SettingsRouter/constants";
import { Module } from "../../Routers/constants";

const GeneralSettings = lazy(() => import("./Tabs/GeneralSettings"));
const RolesManagementSettings = lazy(() => import("./Tabs/RolesManagementSettings"));
const UserManagementSettings = lazy(() => import("./Tabs/UserManagementSettings"));
const NotificationsSettings = lazy(() => import("./Tabs/NotificationsSettings"));

const useAvailableSettingsTabs = (): Module[] => {
const availableSettingsTabs: Module[] = [
    {
        moduleName: SETTINGS_MODULE.NAME,
        route: SETTINGS_MODULE.ROUTES.GENERAL,
        Component: GeneralSettings
    },
    {
        moduleName: SETTINGS_MODULE.NAME,
        route: SETTINGS_MODULE.ROUTES.ROLES_MANAGEMENT,
        Component: RolesManagementSettings
    },
    {
        moduleName: SETTINGS_MODULE.NAME,
        route: SETTINGS_MODULE.ROUTES.USER_MANAGEMENT,
        Component: UserManagementSettings
    },
    {
        moduleName: SETTINGS_MODULE.NAME,
        route: SETTINGS_MODULE.ROUTES.NOTIFICATIONS,
        Component: NotificationsSettings
    }
];

return availableSettingsTabs;
}

export default useAvailableSettingsTabs;