import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCommitsAsync } from "../redux/reducers/commits/commits.thunks";
import { CommitList } from "../components/commits/CommitList";
import { ErrorAlert } from "../components/alerts/ErrorAlert";

const Commits = () => {
  const dispatch = useDispatch();

  const { loading, commits, error } = useSelector((state) => state.commits);
  useEffect(() => {
    dispatch(loadCommitsAsync);
  }, [dispatch]);

  return (
    <div>
      {error && <ErrorAlert title="Ups!" message={error} />}
      {loading ? <p>Loading...</p> : <CommitList commits={commits} />}
    </div>
  );
};

export default Commits;
