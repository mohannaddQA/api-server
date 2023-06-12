"use strict";
const { app } = require("../src/server");
const { db } = require("../src/models/index");
const supertest = require("supertest");
const mockServerMethods = supertest(app);
beforeAll(async () => {
  await db.sync();
});

describe("API Server ", () => {
  it("testing home route /", async () => {
    const response = await mockServerMethods.get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("welcome to the server");
  });
  it("handle 404 error on a bad route", async () => {
    const response = await mockServerMethods.get("/abd");
    expect(response.status).toEqual(404);
  });
  it("handle 404 error on a bad method", async () => {
    const response = await mockServerMethods.post("/food/2");
    expect(response.status).toEqual(404);
  });

  it("create a new food type", async () => {
    const response = await mockServerMethods.post("/food").send({
      name: "mansaf",
      price: 5.5,
      isVegetarian: false,
    });
    expect(response.status).toBe(201);
  });
  it("get all the food", async () => {
    const response = await mockServerMethods.get("/food");
    expect(response.status).toBe(200);
  });
  it("get a certain food by its id", async () => {
    const response = await mockServerMethods.get("/food/1");
    expect(response.status).toBe(200);
  });
  it("Update a certain food by it's id", async () => {
    const response = await mockServerMethods.put("/food/1");
    expect(response.status).toBe(201);
  });
  it("delete a certain food by it's id", async () => {
    const response = await mockServerMethods.delete("/food/1");
    expect(response.status).toBe(204);
  });

  it("create a new food type", async () => {
    const response = await mockServerMethods.post("/clothes").send({
      size: "xl",
      type: "jeans",
    });
    expect(response.status).toBe(201);
  });
  it("get all clothes", async () => {
    const response = await mockServerMethods.get("/clothes");
    expect(response.status).toBe(200);
  });
  it("get a certain clothe by its id", async () => {
    const response = await mockServerMethods.get("/clothes/1");
    expect(response.status).toBe(200);
  });
  it("update a certain clothe by its id", async () => {
    const response = await mockServerMethods.put("/clothes/1");
    expect(response.status).toBe(201);
  });
  it("delete a certain clothe by its id", async () => {
    const response = await mockServerMethods.delete("/clothes/1");
    expect(response.status).toBe(204);
  });
});
afterAll(async () => {
  await db.drop();
});
