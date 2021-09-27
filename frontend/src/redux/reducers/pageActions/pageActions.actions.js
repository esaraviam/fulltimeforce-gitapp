import { pageActionsActionsTypes } from "./pageActions.actionsTypes";

const pageActionsToggleSideBar = (commits) => ({
  type: pageActionsActionsTypes.PAGEACTIONS_SIDEBAR_TOGGLE,
  payload: commits,
});

const pageActions = {
  pageActionsToggleSideBar,
};

export default pageActions;
