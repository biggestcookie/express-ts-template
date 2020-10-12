import bodyParser from "body-parser";
import express from "express";
import { readdir } from "fs";
import { ConnectionOptions, createConnection } from "typeorm";

export class App {
  public port: number;
  private express: express.Application;

  constructor() {
    this.port = Number(process.env.PORT) || 3000;
    this.express = express();
  }

  public async start(): Promise<void> {
    await this.initDatabaseConnection();
    await this.initExpress();
    this.express.listen(this.port, () => (console.log(`App listening on ${this.port.toString()}!`)));
  }

  private async initExpress() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    readdir(`${__dirname}/controllers`, async (error, controllerFiles) => {
      if (error) throw error;
      for (const controllerFile of controllerFiles) {
        const controllerImport = await import(`${__dirname}/controllers/${controllerFile}`);
        const controller = new controllerImport.default();
        this.express.use(`/api/${controller.basePath}`, controller.router);
      }
    })
  }

  private async initDatabaseConnection() {
    await createConnection({
      type: "sqlite",
      database: "../db.sqlite",
      entities: [`${__dirname}/entities/*.js`],
      synchronize: process.env.NODE_ENV === "production"
    } as ConnectionOptions);
  }
}
