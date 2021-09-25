const { Octokit } = require("@octokit/core");
const { createTokenAuth } = require("@octokit/auth-token");
const { request } = require("@octokit/request");

class GitHubApiService {
  constructor() {
    this.auth = createTokenAuth(process.env.GITHUB_ACCESS_TOKEN);

    this.client = new Octokit(this.auth);
  }

  async getCommits() {
    try {
      console.log(process.env.GITHUB_OWNER, process.env.GITHUB_REPOSITORY_NAME);
      const { data } = await this.client.request(
        `GET /repos/{owner}/{repo}/commits`,
        {
          owner: process.env.GITHUB_OWNER,
          repo: process.env.GITHUB_REPOSITORY_NAME,
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
module.exports = GitHubApiService;
