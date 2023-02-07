class Login {
  txtUserName = "input[placeholder='Username']";
  txtPassword = "input[placeholder='Password']";
  btnSubmit = "button[type='submit']";
  labelText = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

  setUserName(username) {
    cy.get(this.txtUserName).type(username);
  }

  setUserPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }

  verifyLogin() {
    cy.get(this.labelText).should(
      "have.text",
      "Dashboard"
    );
  }
}

export default Login;
