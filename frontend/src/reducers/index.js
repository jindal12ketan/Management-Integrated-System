import { combineReducers } from "redux";

import { api } from "api";
import LoginSlice from "slices/loginSlice";
// import FiltersSlice from "slices/filtersSlice";
// import MemberFilterSlice from "slices/memberFilterSlice";
// import MemberSearchSlice from "slices/memberSearchSlice";
// import SavedFilterSlice from "slices/savedFilterSlice";
// import MemberSlice from "slices/memberSlice";
// import PreSalesFilterSlice from "slices/preSalesFilterSlice";
// import PreSalesSearchSlice from "slices/preSalesSearchSlice";
// import AssignTrainingFilterSlice from "slices/assignTrainingFilterSlice";
// import CaseStudyFilterSlice from "slices/caseStudyFilterSlice";
// import TestimonialFilterSlice from "slices/testimonialSlice";

const rootReducer = combineReducers({
  LoginSlice,
//   FiltersSlice,
//   CaseStudyFilterSlice,
//   TestimonialFilterSlice,
//   MemberFilterSlice,
//   MemberSearchSlice,
//   SavedFilterSlice,
//   MemberSlice,
//   PreSalesFilterSlice,
//   PreSalesSearchSlice,
//   AssignTrainingFilterSlice,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
