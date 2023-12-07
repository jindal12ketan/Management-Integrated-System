import allRoutes from "router/routes";

// import Dashboard from "assets/Dashboard.png";
// import CaseStudy from "assets/CaseStudy.png";
// import Reports from "assets/Reports.png";
// import Users from "assets/Users.png";
// import NonCompliance from "assets/NonCompliance.png";
// import Roles from "assets/Roles.png";
import Profile from "assets/Profile.png";
// import MasterSettings from "assets/MasterSettings.png";
// import ChangePassword from "assets/ChangePassword.png";
// import PreSales from "assets/PreSales.png";
import Logout from "assets/Logout.png";
// import TrainingBook from "assets/TrainingBook.png";
// import Testimonial from "assets/Testimonial.png";

import T from "T";

// import {
//   canViewDashboard,
//   // canViewReport,
//   canViewUser,
//   canViewNC,
//   canViewRole,
//   canViewMasterSettings,
//   canViewPreSales,
//   canViewTraining,
//   canViewTrainee,
//   canViewCaseStudy,
//   canViewTestimonial,
// } from "utils/permissions";

const {
  DASHBOARD,
  CASESTUDY,
  TESTIMONIAL,
  // REPORTS,
  MEMBERS,
  NON_COMPLIANCE,
  ROLE,
  MASTER_SETTINGS,
  PRE_SALES,
  TRAINING,
  PROFILE,
  CHANGE_PWD,
  LOGOUT,
} = T;

const { app } = allRoutes;
const {
  dashboard,
  caseStudy,
  testimonial,
  // reports,
  members,
  addMembers,
  editMembers,
  viewMembers,
  feedback,
  feedbackForm,
  nonCompliance,
  roles,
  addRoles,
  editRoles,
  masterSettings,
  preSales,
  allPitchedMembers,
  editInterviewTracker,
  scheduleInterview,
  codeAssessment,
  pitchedMembers,
  createNewProject,
  editPreSalesProject,
  recommendedMembers,
  shortlistedMembers,
  training,
  groups,
  addCourse,
  editCourse,
  traineeCourse,
  profile,
  changePwd,
  test,
  interviewChecklist,
  viewClient,
} = app;

// export const navbarItems = () => [
//   {
//     title: DASHBOARD,
//     route: dashboard,
//     icon: Dashboard,
//     permission: canViewDashboard(),
//     childList: [dashboard],
//   },
//   // {
//   //   title: REPORTS,
//   //   route: reports,
//   //   icon: Reports,
//   //   permission: canViewReport(),
//   //   childList: [reports],
//   // },
//   {
//     title: MEMBERS,
//     route: members,
//     icon: Users,
//     permission: canViewUser(),
//     childList: [members, addMembers, editMembers, viewMembers, feedback, feedbackForm],
//   },

//   {
//     title: NON_COMPLIANCE,
//     route: nonCompliance,
//     icon: NonCompliance,
//     permission: canViewNC(),
//     childList: [nonCompliance],
//   },
//   {
//     title: `${ROLE}s`,
//     route: roles,
//     icon: Roles,
//     permission: canViewRole(),
//     childList: [roles, addRoles, editRoles],
//   },
//   {
//     title: MASTER_SETTINGS,
//     route: masterSettings,
//     icon: MasterSettings,
//     permission: canViewMasterSettings(),
//     childList: [masterSettings],
//   },
//   {
//     title: PRE_SALES,
//     route: preSales,
//     icon: PreSales,
//     permission: canViewPreSales(),
//     childList: [
//       preSales,
//       createNewProject,
//       editPreSalesProject,
//       recommendedMembers,
//       shortlistedMembers,
//       allPitchedMembers,
//       pitchedMembers,
//       editInterviewTracker,
//       scheduleInterview,
//       codeAssessment,
//       interviewChecklist,
//       viewClient,
//     ],
//   },
//   {
//     title: TRAINING,
//     route: training,
//     icon: TrainingBook,
//     permission: canViewTrainee() || canViewTraining(),
//     childList: [training, groups, addCourse, editCourse, traineeCourse],
//   },
//   // {
//   //   title: CASESTUDY,
//   //   route: caseStudy,
//   //   icon: CaseStudy,
//   //   permission: canViewCaseStudy(),
//   //   childList: [caseStudy],
//   // },
//   // {
//   //   title: TESTIMONIAL,
//   //   route: testimonial,
//   //   icon: Testimonial,
//   //   permission: canViewTestimonial(),
//   //   childList: [testimonial],
//   // },
// ];

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
