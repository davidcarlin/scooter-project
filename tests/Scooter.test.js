const Scooter = require("../src/Scooter");
const User = require("../src/User");

// Scooter class tests
describe("Scooter class tests", () => {
  
  // test station
  test("scooter has a station", () => {
    let station = "Belfast";
    let scooter = new Scooter(station);
    expect(scooter.station).toBe(station);
  });

  // test null user default
  test("scooter doesn't have user by default", () => {
    let scooter = new Scooter("Belfast");
    expect(scooter.user).toBeNull();
  });

  // test full charge default
  test("scooter has full charge by default", () => {
    let scooter = new Scooter("Belfast");
    expect(scooter.charge).toBe(100);
  });

  // test not broken by default
  test("scooter is not broken by default", () => {
    let scooter = new Scooter("Belfast");
    expect(scooter.isBroken).toBe(false);
  });

  // test rent method
  test("scooter can be rented", () => {
    let station = "Belfast";
    let scooter = new Scooter(station);
    scooter.rent();
    expect(scooter.station).toBeNull();
    expect(scooter.user).toBe("exampleUser");
  });

  // test error when trying to rent scooter with low charge
  test("scooter can't be rented when charge is not more than 20", () => {
    let station = "Belfast";
    let scooter = new Scooter(station);
    scooter.charge = 19;
    expect(() => scooter.rent()).toThrowError("Scooter needs to charge");
  });

  // test error when trying to rent a broken scooter
  test("can't rent a broken scooter - throws an error", () => {
    let station = "Belfast";
    let scooter = new Scooter(station);
    scooter.isBroken = true;
    expect(() => scooter.rent()).toThrowError("Scooter needs repair");
  });

  // test dock method
  test("scooter can be docked", () => {
    let station = "Belfast";
    let scooter = new Scooter(station);
    let newStation = "Derry";
    scooter.rent();
    scooter.dock(newStation);
    expect(scooter.station).toBe(newStation);
    expect(scooter.user).toBeNull();
  });

  // test charge method
  test("scooter can be charged", async () => {
    let station = "Belfast";
    let scooter = new Scooter(station);
    scooter.charge = 19;
    await scooter.recharge(); // we need to wait for the charge!
    expect(scooter.charge).toBe(100);
  });

  // test repair method
  test("scooter can be repaired", () => {
    let station = "Belfast";
    let scooter = new Scooter(station);
    scooter.isBroken = true;
    scooter.requestRepair();
    setTimeout(() => {
      expect(scooter.isBroken).toBe(false);
    }, 5000);
  });
});
