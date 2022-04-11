export class Go_To_Store {
  gotostore() {
    cy.get("#gotoStore").click();
  }
}

export const onGo_To_Store = new Go_To_Store();
