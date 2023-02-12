const User = require("../src/User");
// User tests here
describe("User class tests", () => {
  // test username
  test("valid username entered", () => {
    const user = new User("testUsername", "testPassword", 32);
    expect(user.username).toBe("testUsername");
  });
  // test password
  test("valid password entered", () => {
    const user = new User("testUsername", "testPassword", 32);
    expect(user.password).toBe("testPassword");
  });
  // test age
  test("valid age entered", () => {
    const user = new User("testUsername", "testPassword", 32);
    expect(user.age).toBe("32");
  });
  // test login
  test("when correct password is entered, user is logged in", () => {
    const user = new User("testUsername", "testPassword", 32);
    user.login("testPassword");
    expect(user.loggedIn).toBe(true);
  });
  // test login error for incorrect password
  test("when incorrect password is entered, throw an error", () => {
    const user = new User("testUsername", "testPassword", 32);
    expect(() => user.login("incorrectPassword")).toThrow("Incorrect password");
  });
  // test logout
  test("logout method actually logs out user", () => {
    const user = new User("testUsername", "testPassword", 32);
    user.login("testPassword");
    user.logout();
    expect(user.loggedIn).toBe(false);
  });
});
