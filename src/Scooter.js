class Scooter {
  static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent() {
    if (this.charge <= 20) {
      throw new Error("Scooter needs to charge");
    }
    if (this.isBroken) {
      throw new Error("Scooter needs repair");
    }
    this.user = "exampleUser";
    this.station = null;
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  async recharge() {
    console.log("Starting charge");

    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;

    console.log("Charge complete");
  }

  requestRepair() {
    let repairInterval = setInterval(() => {
      this.isBroken = false;
      console.log("Repair completed");
      clearInterval(repairInterval);
    }, 5000);
  }
}

module.exports = Scooter;
