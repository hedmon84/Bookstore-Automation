export class Add_Book {
  add() {
    cy.get("#addNewRecordButton").click();

    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  }
}

export const goAddBook = new Add_Book();
