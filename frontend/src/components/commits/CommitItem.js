import React from "react";
import { formatDistance } from "date-fns";

export const CommitItem = ({ commitData }) => {
  const { commit, author, sha } = commitData;

  const commitDate =
    formatDistance(new Date(commit.author.date), new Date(), {
      addSuffix: true,
    }) || "";

  return (
    <div className="pb-1">
      <div className="flex items-center justify-between py-2 hover:bg-green-200 border-l-4 border-green-400 ">
        <div className="w-16 p-2">
          <img
            className="w-8 h-8 rounded-full"
            alt={commit.author.name}
            src={author.avatar_url}
          />
        </div>
        <div className="flex-1 pl-2 ">
          <div className="text-gray-700 font-semibold">
            {commit.message}{" "}
            <span className="text-sm text-gray-800 font-thin">({sha})</span>
          </div>
          <div className="text-gray-900 font-semibold  ">
            {commit.author.name}
          </div>
        </div>
        <div className="text-grey text-sm a-400">{commitDate}</div>
      </div>
    </div>
  );
};
