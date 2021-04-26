import * as app from "../../src/app";
import * as chai from "chai";
import chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("GET /", () => {
  it('should return "Hello World"', () => {
    return chai
      .request(app)
      .get("/")
      .then((res) => {
        chai.expect(res.text).to.eql("Hello World!");
      });
  });
});

describe("GET /not_found", () => {
  it("should return 404", () => {
    return chai
      .request(app)
      .get("/not_found")
      .then((res) => {
        chai.expect(res.status).to.eql(404);
      });
  });
});
