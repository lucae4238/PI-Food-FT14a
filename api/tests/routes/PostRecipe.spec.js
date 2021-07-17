/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");

const agent = session(app);

describe("POST /recipe", () => {
    beforeEach(() =>
    Recipe.sync({ force: true })
  );

    xit("should respond with 201", () =>
    agent.post("/recipe").send({ name: "test", summary: "sum" }).expect(201));

  xit("should respond with created Recipe", () =>
    agent
      .post("/recipe")
      .send({ name: "test", summary: "sum" })
      .expect(201)
      .then((res) =>
        expect(res.body).to.have.include.keys("name", "id", "image")
      ));

  xit("should respond with 400 and shouldnt POST if theres no name / summary", () =>
    agent
      .post("/recipe")
      .send({ name: "test" })
      .expect(422)
      .then((res) => {
        expect(res.text).to.be.equal('{"message":"name and summary required"}');
      }));
  xit("should respond with 400 and shouldnt POST if theres invalid score / healthScore", () =>
    agent
      .post("/recipe")
      .send({ name: "test", summary: "sum", score: 200 })
      .expect(422)
      .then((res) => {
        expect(res.text).to.be.equal(
          '{"message":"score must be between 0 -100"}'
        );
      }));

  xit("if score/healtScore is undefined it should assing 0", () => {
    return agent
      .post("/recipe")
      .send({ name: "test", summary: "sum" })
      .then((res) => {
        expect(res.body.score).to.be.equal(0);
      });
  });
});
