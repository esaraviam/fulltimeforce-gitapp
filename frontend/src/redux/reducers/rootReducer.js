import commitsReducer from "./commits/commits.reducer";
import { combineReducers } from "redux";
const rootReducer = () => {
  combineReducers({
    // add reducers here
    commits: commitsReducer,
  });
};
export default rootReducer;
