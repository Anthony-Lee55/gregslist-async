import { AuthController } from './controllers/AuthController.js';
import { HousesController } from './controllers/HousesController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  HousesController = new HousesController()

  AuthController = new AuthController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
