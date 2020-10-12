import { GithubService } from "@/services/github.service";
import { Controller } from "@/utils/controller";
import { Request, Response } from "express";

/**
 * Sample route that uses an external service, the GitHub API
 */
export default class GithubController extends Controller {
  public basePath = "/github";

  private readonly githubService = new GithubService();

  constructor() {
    super();
    this.router.get("/user", this.getGithubUser.bind(this));
  }

  /**
   * Route at /api/github/user (see constructor)
   * Returns the current GitHub user that this API is authenticated as
   */
  async getGithubUser(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.githubService.getGithubUserFromApi();
      return response.send(user);
    } catch (error) {
      console.error(error);
      return response.status(500).send(error);
    }
  }
}
