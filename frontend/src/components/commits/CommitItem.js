import React from "react";

export const CommitItem = ({ commitData }) => {
  const { commit, author, sha, comment_count } = commitData;
  return (
    <div class="flex items-center justify-between my-4">
      <div class="w-16">
        <img
          class="w-8 h-8 rounded-full"
          alt={commit.author.name}
          src={author.avatar_url}
        />
      </div>
      <div class="flex-1 pl-2">
        <div class="text-gray-700 font-semibold">{commit.message}</div>
        <div class="text-gray-600 font-thin">{commit.author.name}</div>
      </div>
      <div class="text-red-400">20 Posts</div>
    </div>
  );
};
