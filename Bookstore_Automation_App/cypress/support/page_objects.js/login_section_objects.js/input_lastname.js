export class Input_Lastname {
  lastname(lastname) {
    cy.get("#lastname").type(lastname);
    cy.wait(1500);
  }
}

export const onInputLastname = new Input_Lastname();
