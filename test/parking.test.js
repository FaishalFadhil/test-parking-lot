const ParkingSetup = require('../helper/parkingFunctions');
const ParkingLot = require('../helper/parkingClass')
const parkingLots = []
for (let i = 0; i < 1; i++) {
  parkingLots.push(new ParkingLot(i+1))
}

describe('create testing', () => {

  test('create succesfully', (done) => {
    expect(ParkingSetup.create('9')).toEqual(expect.arrayContaining(['Created parking lot with 9 slots']))
    done()
  });

  test('create invalid', (done) => {
    expect(ParkingSetup.create('enam')).toBe('invalid value')
    done()
  });
  
})

describe('park testing', () => {

  test('park succesfully', (done) => {
    expect(ParkingSetup.park('abc-def', parkingLots)).toBe('Allocated slot number: 1')
    done()
  });

  test('park full', (done) => {
    expect(ParkingSetup.park('ghi-jkl', parkingLots)).toBe('Sorry, parking lot is full')
    done()
  });

  test('park invalid car num', (done) => {
    expect(ParkingSetup.park(null, parkingLots)).toBe('invalid car input')
    done()
  });

  test('park invalid parking lots', (done) => {
    expect(ParkingSetup.park('ghi-jkl', [])).toBe('Parking Lot is not ready')
    done()
  });
  
})

describe('leave testing', () => {

  test('leave succesfully 1', (done) => {
    expect(ParkingSetup.leave('abc-def', '8', parkingLots)).toBe('Registration number abc-def with Slot Number 1 is free with Charge 70')
    done()
  });

  test('leave succesfully 2', (done) => {
    ParkingSetup.park('abc-def', parkingLots)
    expect(ParkingSetup.leave('abc-def', '1', parkingLots)).toBe('Registration number abc-def with Slot Number 1 is free with Charge 10')
    done()
  });

  test('leave succesfully 3', (done) => {
    ParkingSetup.park('abc-def', parkingLots)
    expect(ParkingSetup.leave('abc-def', '2', parkingLots)).toBe('Registration number abc-def with Slot Number 1 is free with Charge 10')
    done()
  });

  test('leave not found', (done) => {
    expect(ParkingSetup.leave('ghi-jkl', '7', parkingLots)).toBe('Registration number ghi-jkl not found')
    done()
  });

  test('park invalid car num', (done) => {
    expect(ParkingSetup.leave(null,'3', parkingLots)).toBe('invalid car input')
    done()
  });

  test('leave invalid hours', (done) => {
    expect(ParkingSetup.leave('abc-def','empat', parkingLots)).toBe('invalid hours input')
    done()
  });

  test('leave invalid parking lots', (done) => {
    expect(ParkingSetup.leave('ghi-jkl', '5', [])).toBe('Parking Lot is not ready')
    done()
  });
  
})

describe('status testing', () => {
  test('status succesfully with data', (done) => {
    ParkingSetup.park('abc-def', parkingLots)
    expect(ParkingSetup.status( parkingLots)).toEqual(expect.arrayContaining(['1           abc-def']))
    done()
  });

  test('status succesfully without data', (done) => {
    ParkingSetup.leave('abc-def', '1', parkingLots)
    expect(ParkingSetup.status( parkingLots)).toEqual(expect.arrayContaining(['Slot No.    Registration No.']))
    done()
  });

  test('status invalid parking lot', (done) => {
    expect(ParkingSetup.status( [])).toBe('Parking Lot is not ready')
    done()
  });

  // test('leave not found', (done) => {
  //   expect(ParkingSetup.leave('ghi-jkl', '7', parkingLots)).toBe('Registration number ghi-jkl not found')
  //   done()
  // });

  // test('park invalid car num', (done) => {
  //   expect(ParkingSetup.leave(null,'3', parkingLots)).toBe('invalid car input')
  //   done()
  // });

  // test('leave invalid hours', (done) => {
  //   expect(ParkingSetup.leave('abc-def','empat', parkingLots)).toBe('invalid hours input')
  //   done()
  // });

  // test('leave invalid parking lots', (done) => {
  //   expect(ParkingSetup.leave('ghi-jkl', '5', [])).toBe('Parking Lot is not ready')
  //   done()
  // });
  
})