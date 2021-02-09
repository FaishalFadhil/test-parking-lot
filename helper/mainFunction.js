const ParkingSetup = require('./parkingFunctions')
const fs = require('fs')

function mainFunction(path) {
  if (!path) {
      console.log('must input the path to file');
  } else {
      fs.readFile(path, 'utf8', (err, data) => {
          if (err) console.log('invalid path to file');
          const arrData = data.split('\n').map(e => e.split(' '))
          let parkingLots
          arrData.map(e => {
              switch (e[0]) {
                  case 'create_parking_lot':
                      let makeParking = ParkingSetup.create(e[1])
                      if (Array.isArray(makeParking)) {
                          parkingLots = makeParking[1]
                          console.log(makeParking[0]);
                      } else {
                          console.log(makeParking);
                      }
                      break;
                  case 'park':
                      let parkingProgress = ParkingSetup.park(e[1], parkingLots)
                      console.log(parkingProgress);
                      break;
                  case 'leave':
                      let leaveProgress = ParkingSetup.leave(e[1], e[2], parkingLots)
                      console.log(leaveProgress);
                      break;
                  case 'status':
                      let statusParking = ParkingSetup.status(parkingLots)
                      if (Array.isArray(statusParking)) {
                          statusParking.map(e => console.log(e))
                      } else {
                          console.log(statusParking);
                      }
                      break;
                  default:
                      console.log('invalid command');
                      break;
              }
  
          })
      })    
  }
}

module.exports = mainFunction