import { ServerResponse } from "http";
import Controller from "../infra/Controller";
import { readFileSync } from "fs";
import path from "path";
import operations from "../types/operations";

export default class HubController extends Controller {
  protected specificOperations: operations;

  constructor() {
    super();
    this.specificOperations = new Map([
      ["GET:/hub", this.getPage]
    ])
  }

  protected getPage(res: ServerResponse) {
    const hubPage = readFileSync(path.join(__dirname, "..", "..", "pages", "hub.html"));
    res.setHeader("Content-Type", "text/html; charset=utf8");
    res.write(hubPage);
  }

}
