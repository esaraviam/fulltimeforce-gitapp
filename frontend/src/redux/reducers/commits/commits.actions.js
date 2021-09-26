import { commitsActionsTypes } from "./commits.actionsTypes";

const commitsLoadStart = () => ({
  type: commitsActionsTypes.COMMITS_LOAD_START,
});

const commitsLoadSucess = (commits) => ({
  type: commitsActionsTypes.COMMITS_LOAD_SUCCESS,
  payload: commits,
});

const commitsLoadFail = (errorMessage) => ({
  type: commitsActionsTypes.COMMITS_LOAD_FAILURE,
  payload: errorMessage,
});

const commitsActions = {
  commitsLoadStart,
  commitsLoadSucess,
  commitsLoadFail,
};
export default commitsActions;
