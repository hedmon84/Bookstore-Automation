export class Search_Book {
  searchBook(name) {
    cy.get("#searchBox").type(name);
    cy.wait(500);
    cy.get("#basic-addon2 > span > svg").click();
  }
}

export const onSearchEngine = new Search_Book();
