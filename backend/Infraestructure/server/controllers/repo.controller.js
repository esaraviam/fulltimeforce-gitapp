const GitHubApiService = require("../../github/GitHubApiService");
const service = new GitHubApiService();

const getCommits = async (req, res) => {
  try {
    const result = await service.getCommits();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getCommits,
};
