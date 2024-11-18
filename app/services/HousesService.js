

class HousesService {

  async getHouses() {
    const response = await fetch('https://sandbox.codeworksacademy.com/api/houses')
    console.log('🏠📡', response);
  }
}

export const housesService = new HousesService()