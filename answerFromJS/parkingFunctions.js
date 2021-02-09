const ParkingLot = require('./parkingClass')

class ParkingSetup {
  static async create(value){
    try {
      const listParking = []
      for (let i = 0; i < value; i++) {
        listParking.push(new ParkingLot(i+1))
      }
      console.log(`Created parking lot with ${value} slots`);
      return listParking
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ParkingSetup