export class Delete_Book {
  Delete() {
    cy.get("#delete-record-undefined").click();
    cy.get("#closeSmallModal-ok").click();
  }
}

export const onDeleteBook = new Delete_Book();
