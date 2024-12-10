import HomeController from "./controllers/HomeController";
import HubController from "./controllers/HubController";
import AppEngine from "./infra/AppEngine";


AppEngine.init([
  new HubController(), new HomeController()
]);
