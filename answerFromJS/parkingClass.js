class ParkingLot {
  constructor(noSlot, carNumber){
    this._noSlot = noSlot,
    this._carNumber = carNumber || ''
  }

  get noSlot() {
    return this._noSlot
  }

  get carNumber() {
    return this._carNumber
  }

  get list() {
    return `${this._noSlot}           ${this._carNumber}`
  }

  set inputCarNumber(value) {
    this._carNumber = value
  }

  charge(value) {
    if (value <= 2) {
      return 10
    } else {
      return 10 + ((value - 2) * 10)
    }
  }
}

module.exports = ParkingLot