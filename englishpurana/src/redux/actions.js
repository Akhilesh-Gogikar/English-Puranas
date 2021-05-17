import { SET_PAGE, RESET_STATE, UPDATE_SESSION, UPDATE_USERID } from "./actionTypes";

export const setPage = content => ({
  type: SET_PAGE,
  payload: {
    content
  }
});

export const updateUserId = content => ({
  type: UPDATE_USERID,
  payload: {
    content
  }
});

export const resetState = id => ({
  type: RESET_STATE,
  payload: {}
});

export const updateSession = page => ({ type: UPDATE_SESSION, payload: { page } });
