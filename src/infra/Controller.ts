import { IncomingMessage, ServerResponse } from "http";
import operations from "../types/operations";
import path from "path";
import { readFileSync } from "fs";

export default abstract class Controller {
  private _operations: operations
  private areSpecificOperationsLoaded: boolean;
  protected abstract specificOperations: operations;

  constructor() {
    this.areSpecificOperationsLoaded = false;
    this._operations = new Map();
    this._operations.set("GET:/assets/styles/", Controller.getCssAssets);
    this._operations.set("GET:/assets/images/", Controller.getImageAssets);
  }

  private static getCssAssets(req: IncomingMessage, res: ServerResponse) {
    const assetName = req.url!.split("%")[1];
    const appCssPath = path.join(__dirname, "..", "..", "assets", "styles", assetName + ".css");
    const appCss = readFileSync(appCssPath);

    res.setHeader("Content-Type", "text/css; charset=utf8");
    res.write(appCss);
  }

  private static getImageAssets(req: IncomingMessage, res: ServerResponse) {
    const assetName = req.url!.split("%")[1];
    const appImage = readFileSync(path.join(__dirname, "..", "..", "assets", "images", assetName + ".webp"));
    res.setHeader("Content-Type", "image/webp;");
    res.write(appImage);
  }

  protected abstract getPage(res: ServerResponse): void;

  get operations (): operations {
    if (this.areSpecificOperationsLoaded) {
      return this._operations;
    }

    if (this.specificOperations.size == 0) {
      throw new Error("No specific operations where placed in the map.");
    }

    this.specificOperations.forEach((handler, key) => this._operations.set(key, handler));
    this.areSpecificOperationsLoaded = true;
    return this._operations;
  }
}
