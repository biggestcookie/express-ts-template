import { Response, Router } from "express";
import { readFileSync } from "fs";
import marked from "marked";

const router = Router();

/* README.md converted to HTML with marked() */
const readmeHtml = marked(readFileSync(`${__dirname}/../../README.md`, "utf8"));

/**
 * Send README html at base url "/"
 */
export const indexReadMe = router.get("/", (_, response: Response) =>
  response.send(readmeHtml)
);
