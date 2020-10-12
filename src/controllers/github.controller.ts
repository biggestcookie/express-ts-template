import GithubService from "@/services/github.service";
import { Request, Response, Router } from "express";

export default class GithubController {
  public basePath = "github";
  router = Router();

  constructor(private readonly githubService: GithubService) {
    this.router.get("/user", this.getGithubUser);
  }

  async getGithubUser(request: Request, response: Response): Promise<void> {
    response.send(await this.githubService.getGithubUser());
  }
}
