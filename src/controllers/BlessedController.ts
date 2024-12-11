import { ServerResponse } from "http";
import Controller from "../infra/Controller";
import operations from "../types/operations";
import path from "path";
import { readFileSync } from "fs";

export default class BlessedController extends Controller {
  protected specificOperations: operations;

  constructor () {
    super();
    this.specificOperations = new Map([
      ["GET:/blessed", this.getPage]
    ])
  }

  protected getPage(res: ServerResponse): void {
    const filePath = path.join(__dirname, "..", "..", "pages", "blessed.html");
    const file = readFileSync(filePath);

    res.setHeader("Content-Type", "text/html; charset=utf8")
    res.write(file);
  }

}
