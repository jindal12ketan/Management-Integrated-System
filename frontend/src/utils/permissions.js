import { ALL_PERMISSION_KEYS } from "settings/constants/roles";

import T from "T";
import { store } from "providers/store";
import { get } from "utils/lodash";

export const isCREATOR = (role) => {
  return role === T.CREATOR;
};

export const isLISTENER = (role) => {
  return role === T.LISTENER;
};

const {
    CREATOR_VIEW_KEY,
    CREATOR_ADD_KEY,
    CREATOR_EDIT_KEY,
    CREATOR_DELETE_KEY,
    LISTENER_VIEW_KEY,
    LISTENER_ADD_KEY,
    LISTENER_EDIT_KEY,
    LISTENER_DELETE_KEY,
} = ALL_PERMISSION_KEYS;

export const ACCESSES = () => {
  const state = store.getState();
  console.log(get(state, "LoginSlice.accesses", []));
  return get(state, "LoginSlice.accesses", []);
};

export const hasViewPermissions = (code) => code.includes("view");

export const hasAddPermissions = (code) => code.includes("add");

export const hasEditPermissions = (code) => code.includes("edit");

export const hasDeletePermissions = (code) => code.includes("delete");

export const hasViewPmFilterPermissions = (code) => code.includes("pm_filter");

export const canViewCreator = () => hasViewPermissions(CREATOR_VIEW_KEY) && ACCESSES().includes(CREATOR_VIEW_KEY);

export const canAddCreator = () => hasAddPermissions(CREATOR_ADD_KEY) && ACCESSES().includes(CREATOR_ADD_KEY);

export const canEditCreator = () => hasEditPermissions(CREATOR_EDIT_KEY) && ACCESSES().includes(CREATOR_EDIT_KEY);

export const canDeleteCreator = () => hasDeletePermissions(CREATOR_DELETE_KEY) && ACCESSES().includes(CREATOR_DELETE_KEY);

export const canViewListener = () => hasViewPermissions(LISTENER_VIEW_KEY) && ACCESSES().includes(LISTENER_VIEW_KEY);

export const canAddListener = () => hasAddPermissions(LISTENER_ADD_KEY) && ACCESSES().includes(LISTENER_ADD_KEY);

export const canEditListener = () => hasEditPermissions(LISTENER_EDIT_KEY) && ACCESSES().includes(LISTENER_EDIT_KEY);

export const canDeleteListener = () => hasDeletePermissions(LISTENER_DELETE_KEY) && ACCESSES().includes(LISTENER_DELETE_KEY);
