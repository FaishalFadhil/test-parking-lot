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
        console.log(`Allocated slot number: ${noSlot}`);
      } else {
        console.log('Sorry, parking lot is full');
      }
    } else {
      if (!carNum) {
        console.log('invalid car input');
      }
      console.log('Parking Lot is not ready'); 
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
        console.log(`Registration number ${carNum} not found`);
      } else {
        console.log(`Registration number ${carNum} with Slot Number ${noSlot} is free with Charge ${payment}`);
      }
    } else {
      if (!carNum) {
        console.log('invalid car input');
      } else if(!hours) {
        console.log('invalid hours input');
      }
      console.log('Parking Lot is not ready'); 
    }
  }

  static status(parkingLots){
  
    if (parkingLots.length != 0) {
      console.log('Slot No.    Registration No.');
      for (let i = 0; i < parkingLots.length; i++) {
        if (parkingLots[i].carNumber != '') {
          console.log(parkingLots[i].list);
        }
      }
    } else {
      console.log('Parking Lot is not ready'); 
    }
  }
}

module.exports = ParkingSetup