import Controller from "../infra/Controller";
import { specificOperations } from "../types/operations";

export default class KonderController extends Controller {
  protected specificOperations: specificOperations;
  constructor() {
    super("konder.html");
    this.specificOperations = new Map([
      ["GET:/konder", "get-view"]
    ]);
  }
}
