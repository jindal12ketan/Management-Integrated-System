import allRoutes from "router/routes";

// import Dashboard from "assets/Dashboard.png";
// import CaseStudy from "assets/CaseStudy.png";
// import Reports from "assets/Reports.png";
// import Users from "assets/Users.png";
// import NonCompliance from "assets/NonCompliance.png";
// import Roles from "assets/Roles.png";
import Profile from "assets/Profile.png";
import Setting from "assets/Setting.png"
import Creator from "assets/Creator.png"
// import MasterSettings from "assets/MasterSettings.png";
// import ChangePassword from "assets/ChangePassword.png";
// import PreSales from "assets/PreSales.png";
import Logout from "assets/Logout.png";
// import TrainingBook from "assets/TrainingBook.png";
// import Testimonial from "assets/Testimonial.png";

import T from "T";
import { canViewCreator } from "utils/permissions";

const {
  CREATOR,
  SETTING,
  LOGOUT,
} = T;

const { app } = allRoutes;
const {
  setting,
  test,
  creator,
  listener,
} = app;

export const navbarItems = () => [
  {
    title: CREATOR,
    route: creator,
    icon: Creator,
    permission: canViewCreator(),
    childList: [creator],
  },
  {
    title: SETTING,
    route: setting,
    icon: Setting,
    permission: canViewCreator(),
    childList: [creator, setting],
  },
];

export const dropDownItems = () => [
  {
    title: "Test",
    route: test,
    permission: true,
  },
];

export const profileDropDownItems = () => [
//   {
//     title: PROFILE,
//     route: profile,
//     icon: Profile,
//     permission: true,
//     childList: [profile],
//   },
//   {
//     title: CHANGE_PWD,
//     route: changePwd,
//     icon: ChangePassword,
//     permission: true,
//     childList: [changePwd],
//   },
  {
    title: LOGOUT,
    icon: Logout,
    permission: true,
  },
];

// export const mobileDropDownItems = () => [...navbarItems(), ...dropDownItems(), ...profileDropDownItems()];
