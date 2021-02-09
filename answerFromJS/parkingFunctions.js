const ParkingLot = require('./parkingClass')

class ParkingSetup {
  static create(value){
    if (Number(value)) {
      const listParking = []
      for (let i = 0; i < Number(value); i++) {
        listParking.push(new ParkingLot(i+1))
      }
      console.log(`Created parking lot with ${value} slots`);
      return listParking
    } else {
      console.log(error); 
    }
  }

  static park(value, parkingLots){
    let parked = false
    let noSlot
    if (parkingLots.length != 0) {
      for (let i = 0; i < parkingLots.length; i++) {
        if (parkingLots[i].carNumber === '') {
          parkingLots[i].inputCarNumber = value
          parked = true
          noSlot = parkingLots[i].noSlot
          break
        }
      }
      if (parked) {
        console.log(`Allocated slot number: ${noSlot}`);
      } else {
        console.log('Sorry, parking lot is full');
      }
      
    } else {
      console.log('Parking Lot is not ready'); 
    }
  }
}

module.exports = ParkingSetup