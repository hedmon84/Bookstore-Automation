export class Back_BookStore {
  goBack() {
    cy.get("#addNewRecordButton").click();
  }
}

export const goBackBookStore = new Back_BookStore();
