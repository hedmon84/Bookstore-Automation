export class Input_Firstname {
  firstname(firstname) {
    cy.get("#firstname").type(firstname);
    cy.wait(1500);
  }
}

export const onInputFirstname = new Input_Firstname();
