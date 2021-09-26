import CommitService from "../../../services/CommitService";
import commitsActions from "./commits.actions";

export const loadCommitsAsync = async (dispatch) => {
  dispatch(commitsActions.commitsLoadStart());
  try {
    const { data } = await CommitService.getCommits();
    dispatch(commitsActions.commitsLoadSuccess(data));
  } catch (error) {
    dispatch(commitsActions.commitsLoadError(error));
  }
};
