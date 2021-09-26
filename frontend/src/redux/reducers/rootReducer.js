import commitsReducer from "./commits/commits.reducer";
import { combineReducers } from "redux";
const rootReducer = () => {
  return combineReducers({
    // add reducers here
    commits: commitsReducer,
  });
};
export default rootReducer;
