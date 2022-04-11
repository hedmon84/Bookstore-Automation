import { onClickBook } from "../../support/page_objects.js/book_store_objects.js/click_book";
import { goBackBookStore } from "../../support/page_objects.js/book_store_objects.js/back_bookstore";
import { goAddBook } from "../../support/page_objects.js/book_store_objects.js/add_book";
import { onSearchEngine } from "../../support/page_objects.js/book_store_objects.js/search_book";

// // -------------- Scenario 1 Be able click in a book and go back   ---------------------------
describe("Click in a book and go back", () => {
  it("Open Application", () => {
    // cy.openMainPage();
    cy.visit("https://demoqa.com/books");
  });

  it("Select book", () => {
    onClickBook.SelectBook();
  });

  it(" Back button", () => {
    goBackBookStore.goBack();
  });
});

// Scenario 2 Search a book by author
describe("Search Engine by author", () => {
  it("Open Application", () => {
    // cy.openMainPage();
    cy.visit("https://demoqa.com/books");
  });

  it("Type author ", () => {
    onSearchEngine.searchBook("Richard E. Silverman");
    cy.visit("https://demoqa.com/books");
    onSearchEngine.searchBook("Glenn Block et al.");
  });
});

// -------------- Scenario 3 User Be able to add a book  ---------------------------

describe("Add book ", () => {
  it("Open Application", () => {
    // cy.openMainPage();
    cy.visit("https://demoqa.com/books");
  });
  it("Select book", () => {
    onClickBook.SelectBook();
  });

  it(" Add button", () => {
    goAddBook.add();
  });
});
