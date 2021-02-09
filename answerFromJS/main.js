const fs = require('fs')
const ParkingSetup = require('./parkingFunctions')
const path = process.argv[2]

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
                    parkingLots = ParkingSetup.create(e[1])
                    break;
                case 'park':
                    ParkingSetup.park(e[1], parkingLots)
                    break;
                case 'leave':
                    ParkingSetup.leave(e[1], e[2], parkingLots)
                    break;
                case 'status':
                    ParkingSetup.status(parkingLots)
                    break;
                default:
                    break;
            }

        })
    })    
}