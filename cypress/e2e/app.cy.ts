describe("Navigation", () => {
  it("should contains an heading", () => {
    cy.visit("http://127.0.0.1:3000/");
    cy.get("h1").should("contain.text", "Hello, Next.js!");
  });
});
