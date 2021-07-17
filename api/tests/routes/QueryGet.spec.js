/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");

const agent = session(app);
const recipe = {
  name: "Milanea a la napolitana",
  summary: "summary",
};

xdescribe("GET /recipes?name=", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  );

  xit("should get 200", () => agent.get("/recipes?name=milanesa").expect(200));

  it("shoud get 400 if theres no query parameter", () => {
    agent.get("/recipes").then((res) => expect(res).to.have.status(400));
  });

  xit("should return an array of results", () =>
    agent
      .get("/recipes?name=salad")
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an("array");
        // expect(Array.isArray(res.body)).to.be.true;
      }));

  xit("should return properties of diets", () =>
    agent.get("/recipes?name=salad").then((res) => {
      expect(res.body[0]).to.have.all.keys(
        "name",
        "id",
        "score",
        "image",
        "diets"
      );
    }));

  xit("should return error message if theres no results", () => {
    return agent
      .get("/recipes?name=mdasda")
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.deep.equal({
          message: "couldnt find any results",
        });
      });
  });
});
