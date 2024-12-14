import ArtGalleryController from "./controllers/ArtGalleryController";
import BlessedController from "./controllers/BlessedController";
import HomeController from "./controllers/HomeController";
import HubController from "./controllers/HubController";
import KonderController from "./controllers/KonderController";
import SktparkController from "./controllers/SktparkController";
import AppEngine from "./infra/AppEngine";

AppEngine.init([
  new HubController(), new HomeController(),
  new BlessedController(), new SktparkController(),
  new KonderController(), new ArtGalleryController()
]);
