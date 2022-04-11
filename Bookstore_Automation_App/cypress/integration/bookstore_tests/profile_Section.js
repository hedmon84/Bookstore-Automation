import { onInputUsername } from "../../support/page_objects.js/login_section_objects.js/input_Username";
import { onInputPassword } from "../../support/page_objects.js/login_section_objects.js/input_password";
import { onLogin } from "../../support/page_objects.js/login_section_objects.js/login";
import { onDeleteBook } from "../../support/page_objects.js/profile_section_objects/delete_book";
import { onSearchEngine } from "../../support/page_objects.js/book_store_objects.js/search_book";
import { onBookValidation } from "../../support/page_objects.js/profile_section_objects/book_validation";
import { onGo_To_Store } from "../../support/page_objects.js/profile_section_objects/go_to_store";

// -------------- 1 Test to be able to Delete a book ---------------------------
describe("Test to be able to Delete a book", () => {
  it("Open Application", () => {
    // cy.openMainPage();
    cy.visit("https://demoqa.com/login");
  });

  it("Input User_Name", () => {
    onInputUsername.username("hedmon84");
  });

  it("Input Password", () => {
    onInputPassword.password("Hdmon100*");
  });

  it("Login", () => {
    onLogin.login();
  });
  it("Delete book", () => {
    onDeleteBook.Delete();
  });
});

// -------------- 2 Scenario Search book by author ---------------------------
describe("Search book by author", () => {
  it("Search Book", () => {
    onSearchEngine.searchBook("Kyle Simpson");
  });

  it("Book was found ?", () => {
    onBookValidation.book("Kyle Simpson");
  });
});

// -------------- 3 Scenario User go back to store  ---------------------------

describe("Go back to store", () => {
  it("Go back Button ", () => {
    onGo_To_Store.gotostore();
  });
});
