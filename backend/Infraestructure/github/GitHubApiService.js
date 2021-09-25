const { Octokit } = require("octokit");
const getRepo = require("../../Application/UseCases/repo/getRepo");

class GitHubApiService {
  constructor() {
    this.client = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
  }

  async getRepository() {
    const repository = await this.client.request({
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
    });

    return repository;
  }
}
module.exports = GitHubApiService;
