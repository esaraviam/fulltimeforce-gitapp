const GitHubApiService = require("../../github/GitHubApiService");
const service = new GitHubApiService();

const getRepo = async (req, res) => {
  try {
    const result = await service.getRepository();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getRepo,
};
