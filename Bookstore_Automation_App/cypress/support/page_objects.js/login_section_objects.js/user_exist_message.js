export class User_Exist_Message {
  checkMessage(user_exist) {
    cy.get("#name").then((message) => {
      const value = message.text().trim();
      expect(value).to.equal(user_exist);
    });
  }
}

export const onCheckMessage = new User_Exist_Message();
