import React from "react";
import { CommitItem } from "./CommitItem";

export const CommitList = ({ commits }) => {
  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Latests Commits</h2>
      </header>
      <div className="p-3">
        <div class="bg-gray-100 w-1/2 rounded px-6">
          <div class="border-l-4 border-red-400 -ml-6 pl-6 flex items-center justify-between my-4">
            <div class="font-semibold text-gray-800">Company Highlights</div>
          </div>
        </div>
        {commits.map((commit) => {
          return <CommitItem commitData={commit} key={commit.sha} />;
        })}
      </div>
    </div>
  );
};
