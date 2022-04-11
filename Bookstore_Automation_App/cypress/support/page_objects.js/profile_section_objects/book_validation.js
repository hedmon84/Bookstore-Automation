export class Book_Validation {
  book(title) {
    cy.get("#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1) > div > div:nth-child(3)").then((message) => {
      const value = message.text().trim();
      expect(value).to.equal(title);
    });
  }
}

export const onBookValidation = new Book_Validation();
