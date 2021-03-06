import React from "react";
import { CommitItem } from "./CommitItem";

export const CommitList = ({ commits }) => {
  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Latests Commits</h2>
      </header>
      <div>
        {commits.length > 0 ? (
          commits.map((commit) => (
            <CommitItem
              data-testid="commit-list"
              commitData={commit}
              key={commit.sha}
            />
          ))
        ) : (
          <p
            data-testid="no-commits-found"
            className="text-center text-gray-600"
          >
            No commits found
          </p>
        )}
      </div>
    </div>
  );
};
