export class Login {
  login() {
    cy.get("#login").click();
  }
}

export const onLogin = new Login();
