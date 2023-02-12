const Scooter = require("../src/Scooter");
const User = require("../src/User");
// Scooter class test suite
describe("Scooter class tests", () => {
  let scooter;
  // test scooterId
  test("scooterId property is valid", () => {
    scooter = new Scooter("scooter1");
    expect(scooter.scooterId).toBe("scooter1");
  });
  // test station
  test("station property is valid", () => {
    scooter = new Scooter("scooter1");
    expect(scooter.station).toBe(null);
  });
  //isRented property
  test("isRented property is valid", () => {
    scooter = new Scooter("scooter1");
    expect(scooter.isRented).toBe(false);
  });
  //rent method
  test("rent method converts isRented property to true", () => {
    scooter = new Scooter("scooter1");
    scooter.rent();
    expect(scooter.isRented).toBe(true);
  });
  //return method
  test("return method converts isRented property to false", () => {
    scooter = new Scooter("scooter1");
    scooter.rent();
    scooter.return();
    expect(scooter.isRented).toBe(true);
  });
  //dock method
  test("dock method gives valid station property", () => {
    scooter = new Scooter("scooter1");
    scooter.dock("station1");
    expect(scooter.station).toBe("station1");
  });
  //undock method
  test("undock method sets station property to null", () => {
    scooter = new Scooter("scooter1");
    scooter.dock("station1");
    scooter.undock();
    expect(scooter.station).toBe(null);
  });

  //requestRepair method

  //charge method
});
