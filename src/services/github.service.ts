import config from "@/config/config.json";
import Axios, { AxiosInstance } from "axios";

/**
 * Sample external service to access GitHub API
 */
export class GithubService {
  instance: AxiosInstance;

  serviceUrl = "https://api.github.com";
  userUrl = "/user";
  headers = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  };

  constructor() {
    this.instance = Axios.create({
      baseURL: this.serviceUrl,
      timeout: config.services.defaultServiceTimeout,
      headers: this.headers,
    });
  }

  /**
   * Fetch the current GitHub user that this API is authenticated with
   */
  async getGithubUser(): Promise<any> {
    return await this.instance({
      method: "get",
      url: this.userUrl,
    });
  }
}
