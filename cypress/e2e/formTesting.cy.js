/// <reference types="Cypress" />

describe("Check the Todo Application", () => {
  it("check the initial basic structure", () => {
    cy.visit("http://localhost:3000/");

    cy.get("input").should("exist");

    cy.get("select").should("exist");

    cy.get("button").should("exist");
  });

  it("should able to add the tasks", () => {
    cy.visit("http://localhost:3000");

    cy.get(".dataContainer").children().should("have.length", 4);
  });
});
