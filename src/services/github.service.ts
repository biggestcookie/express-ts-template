import config from "@/config/config.json";
import Axios, { AxiosInstance } from "axios";


export default class GithubService {
  instance: AxiosInstance;

  serviceUrl = "https://api.github.com";
  userUrl = "/user"
  headers = {
    "Autorization": `token ${process.env.GITHUB_TOKEN}`
  }

  constructor() {
    this.instance = Axios.create({
      baseURL: this.serviceUrl,
      timeout: config.services.defaultServiceTimeout,
      headers: this.headers
    })
  }

  async getGithubUser(): Promise<any> {
    return this.instance({
      method: "get",
      url: this.userUrl
    })
  }
}
