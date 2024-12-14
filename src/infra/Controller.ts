import { IncomingMessage, ServerResponse } from "http";
import operations, { specificOperations } from "../types/operations";
import path from "path";
import { existsSync, readFileSync } from "fs";

export default abstract class Controller {
  private _operations: operations
  private areSpecificOperationsLoaded: boolean;
  protected abstract specificOperations: specificOperations;


  constructor(
    protected viewFilename: `${string}.html` | null
  ) {
    this.areSpecificOperationsLoaded = false;
    this._operations = new Map();
    this._operations.set("GET:/assets/styles/", Controller.getCssAssets);
    this._operations.set("GET:/assets/images/", Controller.getImageAssets);
    this._operations.set("GET:/assets/scripts/", Controller.getScriptAssets);
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

  private static getScriptAssets(req: IncomingMessage, res: ServerResponse) {
    const assetName = req.url!.split("%")[1];
    const appJs = readFileSync(path.join(__dirname, "..", "..", "assets", "scripts", assetName + ".js"));
    res.setHeader("Content-Type", "text/js;");
    res.write(appJs);
  }

  protected getView(res: ServerResponse) {
    if (!this.viewFilename) {
      throw new Error("getPage handler provided without view details.");
    }
    const viewPath = path.join(__dirname, "..", "..", "pages", this.viewFilename);

    if (!existsSync(viewPath)) {
      throw new Error("this view path doesn't exists.");
    }

    const file = readFileSync(viewPath);

    res.setHeader("Content-Type", "text/html; charset=utf8")
    res.write(file);
  };

  get operations(): operations {
    if (this.areSpecificOperationsLoaded) {
      return this._operations;
    }

    if (this.specificOperations.size == 0) {
      throw new Error("No specific operations where placed in the map.");
    }

    this.specificOperations.forEach((handler, key) => {
      if (handler == "get-view") { 
        handler = this.getView;
      }

      this._operations.set(key, handler)
    });
    this.areSpecificOperationsLoaded = true;
    return this._operations;
  }
}
