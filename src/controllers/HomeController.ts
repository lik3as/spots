import {  ServerResponse } from "http";
import Controller from "../infra/Controller";
import path from "path";
import { readFileSync } from "fs";
import operations from "../types/operations";

export default class HomeController extends Controller {
  protected specificOperations: operations;

  constructor() {
    super();
    this.specificOperations = new Map([
      ["GET:/minha-casa", this.getPage]
    ]);
  }
  
  protected getPage(res: ServerResponse) {
    const homeHtmlPath = path.join(__dirname, "..", "..", "pages", "home.html");
    const homeHtml = readFileSync(homeHtmlPath);

    res.setHeader("Content-Type", "text/html; charset=utf8");
    res.write(homeHtml);
  }

}
