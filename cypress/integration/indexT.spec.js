describe("Contac US", function () {
  it("should find The Logo in Home Page", function () {
    cy.visit("/");
    cy.get("#header_logo");
    cy.screenshot();
  });
  it("should displays the CUSTOMER SERVICE-CONTACT US Page ", function () {
    cy.visit("/");
    cy.get("#contact-link").click();
    cy.location()
      .its("href")
      .should(
        "equal",
        "http://automationpractice.com/index.php?controller=contact"
      );
    cy.screenshot();
  });
  it("shouldVerify that all the controllers displays properly", function () {
    cy.visit("/index.php?controller=contact");
    cy.get(".page-heading").contains("CUSTOMER SERVICE - CONTACT US", { matchCase: false });
    cy.screenshot()
  });
});
