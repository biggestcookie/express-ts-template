import "module-alias/register";
import { App } from "./app";

async function init() {
  try {
    const app = new App();
    await app.start();
  } catch (err) {
    console.log(err);
  }
}

init();
