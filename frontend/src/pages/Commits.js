import React, { useEffect, useState } from "react";
import { CommitList } from "../components/commits/CommitList";
const Commits = () => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3001/api/repo/commits")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCommits(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>{loading ? <p>Loading...</p> : <CommitList commits={commits} />}</div>
  );
};

export default Commits;
