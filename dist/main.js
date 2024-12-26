"use strict";

class User {
  constructor(_ref) {
    let {
      email
    } = _ref;
    this.email = email;
  }
  sendMessage() {
    console.log("Mensagem enviada para:", this.email);
  }
}
let user = new User({
  email: "rodrigo@email.com"
});
user.sendMessage();