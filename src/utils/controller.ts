import { Router } from "express";

/**
 * Common controller class for controllers to extend from
 */
export class Controller {
  public basePath: string;
  router = Router();
}
