export const getState = store => store.stateManager;

export const getPage = store =>
  getState(store) ? getState(store).currentPage : '1';

export const getSession = (store) =>
  getState(store) ? getState(store).session : [];

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
