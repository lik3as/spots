import Controller from "../infra/Controller";
import { specificOperations } from "../types/operations";

export default class HomeController extends Controller {
  protected specificOperations: specificOperations;

  constructor() {
    super("home.html");
    this.specificOperations = new Map([
      ["GET:/minha-casa", "get-view"]
    ]);
  }
  

}
