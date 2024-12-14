import Controller from "../infra/Controller";
import { specificOperations } from "../types/operations";

export default class ArtGalleryController extends Controller {
  protected specificOperations: specificOperations;

  constructor () {
    super("art-gallery.html");
    this.specificOperations = new Map([
      ["GET:/artes", "get-view"]
    ]);
  }
}
