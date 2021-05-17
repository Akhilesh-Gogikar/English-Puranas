import { SET_PAGE, RESET_STATE, UPDATE_SESSION, UPDATE_USERID } from "../actionTypes";

const initialState = {
  currentPage: '1',
  userId: '',
  session: []
};

export default function(state = initialState, action) {

  switch (action.type) {
    case SET_PAGE: {
      const { content } = action.payload;
      return {
        ...state,
        currentPage:content,
        session: [...state.session, content]
      };
    }
    case UPDATE_USERID: {
      const { content } = action.payload;
      return {
        ...state,
        userId: content
      };
    }
    case UPDATE_SESSION: {
      const { page } = action.payload;
      return {
        ...state,
        session: [...state.session, page]
      };
    }
    case RESET_STATE: {
      const { page } = action.payload;
      return {
        ...state,
        currentPage: '1',
        session: []
      };
    }
    default:
      return state;
  }
}
