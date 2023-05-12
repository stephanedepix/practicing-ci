describe("Navigation", () => {
  it("should contains an heading", () => {
    cy.visit("/");
    cy.get("h1").should("contain.text", "Hello, Next.js!");
  });
});
