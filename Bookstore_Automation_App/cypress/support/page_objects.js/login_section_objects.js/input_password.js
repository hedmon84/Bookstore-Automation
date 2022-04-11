export class Input_Password {
  password(pass) {
    cy.get("#password").type(pass);
    cy.wait(1500);
  }
}

export const onInputPassword = new Input_Password();
