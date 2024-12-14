import Controller from "../infra/Controller";
import { specificOperations } from "../types/operations";

export default class SktparkController extends Controller {
  protected specificOperations: specificOperations;

  constructor () {
    super("skatepark.html");
    this.specificOperations = new Map([
      ["GET:/pista", "get-view"]
    ]);
  }
}
