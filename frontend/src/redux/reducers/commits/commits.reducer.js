import { commitsActionsTypes } from "./commits.actionsTypes";
import initalState from "./commits.initalState";

const commitsReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case commitsActionsTypes.COMMITS_LOAD_START:
      return {
        ...state,
        loading: true,
        error: null,
        commits: [],
      };
    case commitsActionsTypes.COMMITS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        commits: payload,
      };
    case commitsActionsTypes.COMMITS_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
export default commitsReducer;
