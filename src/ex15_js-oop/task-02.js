class ElectricalAppliances {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isTurnOn = false;
  }

  isTurn() {
    if (!this.isTurnOn) {
      this.isTurnOn = true
    }
    return
  }
}

class Laptop extends ElectricalAppliances {
  constructor(name, power, wireless, amountChargeInHourse, diagonal) {
    super(name, power);
    this.wireless = wireless
    this.amountChargeInHourse = amountChargeInHourse
    this.diagonal = diagonal
  }
}

class RobotVacuum extends ElectricalAppliances {
  constructor(name, power, wireless, amountChargeInHourse) {
    super(name, power);
    this.wireless = wireless
    this.amountChargeInHourse = amountChargeInHourse
  }
}

class Room {
  constructor(devices) {
    this.devices = devices
  }

  searchDevice(value) {
    return this.devices.filter(element => element.name === value);
  }
}

const laptop = new Laptop('hp', 40, true, 5, 21);
const robotVacuum = new RobotVacuum('robot vacuum', 20, true, 7);
const tv = new ElectricalAppliances('samsung', 25)
const room = new Room([laptop, robotVacuum, tv])
tv.isTurn()
laptop.isTurn()
console.log(room.searchDevice('robot vacuum'));