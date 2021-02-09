const ParkingLot = require('./parkingClass')

class ParkingSetup {
  static create(value){
    if (Number(value)) {
      const listParking = []
      for (let i = 0; i < Number(value); i++) {
        listParking.push(new ParkingLot(i+1))
      }
      return [`Created parking lot with ${value} slots`, listParking]
    } else {
      return  'invalid value'
    }
  }

  static park(carNum, parkingLots){
    let parked = false
    let noSlot
    if (parkingLots.length != 0 && carNum) {
      for (let i = 0; i < parkingLots.length; i++) {
        if (parkingLots[i].carNumber === '') {
          parkingLots[i].inputCarNumber = carNum
          parked = true
          noSlot = parkingLots[i].noSlot
          break
        }
      }
      if (parked) {
        return `Allocated slot number: ${noSlot}`;
      } else {
        return 'Sorry, parking lot is full';
      }
    } else {
      if (!carNum) {
        return 'invalid car input';
      }
      return 'Parking Lot is not ready'; 
    }
  }

  static leave(carNum, hours, parkingLots){
    let payment
    let noSlot
    let leave = false
    if (parkingLots.length != 0 && carNum && Number(hours)) {
      for (let i = 0; i < parkingLots.length; i++) {
        if (parkingLots[i].carNumber === carNum) {
          payment = parkingLots[i].charge(hours)
          noSlot = parkingLots[i].noSlot
          leave = true
          parkingLots[i].inputCarNumber = ''
          break
        }
      }
      if (!leave) {
        return `Registration number ${carNum} not found`;
      } else {
        return `Registration number ${carNum} with Slot Number ${noSlot} is free with Charge ${payment}`;
      }
    } else {
      if (!carNum) {
        return 'invalid car input';
      } else if(!Number(hours)) {
        return 'invalid hours input';
      } else {
        return 'Parking Lot is not ready'; 
      }
    }
  }

  static status(parkingLots){
  
    if (parkingLots.length != 0) {
      const result = ['Slot No.    Registration No.']
      for (let i = 0; i < parkingLots.length; i++) {
        if (parkingLots[i].carNumber != '') {
          result.push(parkingLots[i].list);
        }
      }
      return result
    } else {
      return 'Parking Lot is not ready'; 
    }
  }
}

module.exports = ParkingSetup