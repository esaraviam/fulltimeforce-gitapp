import apiClient from "../helpers/apiClient";

class CommitService {
  constructor() {
    this.apiClient = apiClient();
  }
  getCommits() {
    return this.apiClient.get(`/repo/commits`);
  }
}

export default new CommitService();
