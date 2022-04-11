export class Click_Book {
  SelectBook() {
    cy.get("#see-book-Git\\ Pocket\\ Guide > a").click();
  }
}

export const onClickBook = new Click_Book();
