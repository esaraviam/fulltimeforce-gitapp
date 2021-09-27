import { pageActionsActionsTypes } from "./pageActions.actionsTypes";
import initialState from "./pageActions.intialState";

const pageActionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case pageActionsActionsTypes.PAGEACTIONS_SIDEBAR_TOGGLE:
      return {
        ...state,
        sidebar: !state.sidebar,
      };
    default:
      return state;
  }
};

export default pageActionsReducer;
