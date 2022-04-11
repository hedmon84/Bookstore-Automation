export class Register_User {
  Register() {
    cy.wait(6000);
    cy.get("#register").click();
  }
}

export const onRegister = new Register_User();
