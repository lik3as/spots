import http from "http"
import Controller from "./Controller";
import { assetRequestHandler, pageRequestHandler } from "../types/handler";

export default class AppEngine {
  static instance: typeof AppEngine;
  private server: http.Server;

  private constructor(controllers: Controller[]) {
    this.server = http.createServer((req, res) => {
      for (let i = 0; i < controllers.length; i++) {
        const controller = controllers[i];
        const formatedUrl = req.url!.split("%")[0];
        const handler = controller.operations.get(`GET:${formatedUrl}`);

        if (handler) {
          handler.length == 2
            ? (handler as assetRequestHandler)(req, res)
            : (handler as pageRequestHandler)(res);
          break;
        }
      }

      res.end();
    });
    this.server.listen(8080, () => {
      console.log("listening");
    });
  }

  static init(controllers: Controller[]) {
    if (AppEngine.instance) {
      console.log("Already initialized.");
      return AppEngine.instance;
    }
    return new AppEngine(controllers);
  }

}
