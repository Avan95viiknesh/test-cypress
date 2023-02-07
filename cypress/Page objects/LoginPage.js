class Login {
  setUserName(username) {
    cy.get("input[placeholder='Username']").type(username);
  }

  setUserPassword(password) {
    cy.get("input[placeholder='Password']").type(password);
  }

  clickSubmit() 
  {
   cy.get("button[type='submit']").click();
  }

verifyLogin()
{
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard")
}

}


export default Login;