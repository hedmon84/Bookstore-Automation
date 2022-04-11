export class Input_Username {
  username(user) {
    cy.get("#userName").type(user);

    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  }
}

export const onInputUsername = new Input_Username();
