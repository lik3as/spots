import Controller from "../infra/Controller";
import { specificOperations } from "../types/operations";

export default class BlessedController extends Controller {
  protected specificOperations: specificOperations;

  constructor () {
    super("blessed.html");
    this.specificOperations = new Map([
      ["GET:/blessed", "get-view"]
    ])
  }
}
