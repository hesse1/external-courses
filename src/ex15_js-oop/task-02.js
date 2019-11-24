class ElectricalAppliances {
  constructor(name, power, isTurnOn) {
    this.name = name;
    this.power = power;
    this.isTurnOn = isTurnOn;
  }
}

class Room{
  constructor(nameRoom,devices) {
    this.room = nameRoom;
    this.devices = devices;
  }

  powerConsumption() {
    let allPower = 0;
    this.devices.forEach(devices => {
      if(devices.isTurnOn){
        allPower += devices.power
      }
    })
    return allPower
  }

  searchDevice(name) {
    return this.devices.filter(function(devices) {
      return devices.name === name
    })
  }
}

const tv = new ElectricalAppliances('TV', 60, true);
const laptop = new ElectricalAppliances('laptop', 30, false);
const pc = new ElectricalAppliances('pc', 30, true)
const robotVacuum = new ElectricalAppliances('robot vacuum', 10, true);
const parlor = new Room('parlor',[tv,laptop,pc,robotVacuum])

console.log(parlor.powerConsumption());
console.log(parlor.searchDevice('laptop'));

