import { onInputUsername } from "../../support/page_objects.js/login_section_objects.js/input_Username";
import { onInputPassword } from "../../support/page_objects.js/login_section_objects.js/input_password";
import { onLogin } from "../../support/page_objects.js/login_section_objects.js/login";
import { onNewUser } from "../../support/page_objects.js/login_section_objects.js/create_user_section";
import { onInputFirstname } from "../../support/page_objects.js/login_section_objects.js/input_firstname";
import { onInputLastname } from "../../support/page_objects.js/login_section_objects.js/input_lastname";
import { onRegister } from "../../support/page_objects.js/login_section_objects.js/register_user";
import { onCheckMessage } from "../../support/page_objects.js/login_section_objects.js/user_exist_message";

// -------------- Scenario 1 Be able to login ---------------------------
describe("Test to be able to login with a existing user", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
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
});
// --Scenario 2 error message when a user use a existing username
describe("Test_Create_User", () => {
  it("Open Application", () => {
    // cy.openMainPage();
    cy.visit("https://demoqa.com/login");
  });

  it(" Create User Section", () => {
    onNewUser.NewUser();
  });

  it("Input First name", () => {
    onInputFirstname.firstname("Juan");
  });
  it("Input Last name", () => {
    onInputLastname.lastname("lopez");
  });

  it("Input User_Name", () => {
    onInputUsername.username("hedmon84");
  });

  it("Input Password", () => {
    onInputPassword.password("Hdmon100*");
  });

  it("check raptcha", () => {
    cy.clickRecaptcha();
  });

  it("Register User Button", () => {
    onRegister.Register();
  });

  it("Check error message", () => {
    onCheckMessage.checkMessage("User exists!");
  });
});

// -----Scenario 3 create new user -------
describe("Test New User Section Create_User", () => {
  it("Open Application", () => {
    // cy.openMainPage();
    cy.visit("https://demoqa.com/login");
  });

  it(" Create User Section", () => {
    onNewUser.NewUser();
  });

  it("Input First name", () => {
    onInputFirstname.firstname("Juan");
  });
  it("Input Last name", () => {
    onInputLastname.lastname("lopez");
  });

  it("Input User_Name", () => {
    onInputUsername.username("hedmon85");
  });

  it("Input Password", () => {
    onInputPassword.password("Hdmon100*");
  });

  it("check raptcha", () => {
    cy.clickRecaptcha();
  });

  it("Register User Button", () => {
    onRegister.Register();
  });
});
