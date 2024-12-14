import Controller from "../infra/Controller";
import { specificOperations } from "../types/operations";

export default class HubController extends Controller {
  protected specificOperations: specificOperations;

  constructor() {
    super("hub.html");
    this.specificOperations = new Map([
      ["GET:/hub", "get-view"]
    ])
  }

}
