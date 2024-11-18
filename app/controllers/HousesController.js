import { housesService } from "../services/HousesService.js";


export class HousesController {
  constructor() {
    console.log('🏠🎮');
    this.getHouses()
  }

  async getHouses() {
    await housesService.getHouses()
  }
}