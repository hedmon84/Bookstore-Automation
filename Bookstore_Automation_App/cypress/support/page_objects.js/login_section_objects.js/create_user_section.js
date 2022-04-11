export class Create_User {
  NewUser() {
    cy.get("#newUser").click();
    cy.wait(1500);
  }
}

export const onNewUser = new Create_User();
