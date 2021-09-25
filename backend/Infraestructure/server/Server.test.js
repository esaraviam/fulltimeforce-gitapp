const Server = require("./Server");
describe("App Tests", () => {
  it("should create the app", () => {
    const app = new Server();
    expect(app).toBeTruthy();
  });
});
