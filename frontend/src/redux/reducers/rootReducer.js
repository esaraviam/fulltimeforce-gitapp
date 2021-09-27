import commitsReducer from "./commits/commits.reducer";
import pageActionsReducer from "./pageActions/pageActions.reducer";

import { combineReducers } from "redux";
const rootReducer = () => {
  return combineReducers({
    // add reducers here
    commits: commitsReducer,
    sidebar: pageActionsReducer,
  });
};
export default rootReducer;
