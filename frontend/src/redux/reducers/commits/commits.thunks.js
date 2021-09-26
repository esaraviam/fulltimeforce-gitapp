import CommitService from "../../../services/CommitService";
import commitsActions from "./commits.actions";

export const loadCommitsAsync = (dispatch) => {
  dispatch(commitsActions.commitsLoadStart());

  CommitService.getCommits()
    .then((result) => {
      dispatch(commitsActions.commitsLoadSucess(result.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(commitsActions.commitsLoadFail(error.message));
    });
};
