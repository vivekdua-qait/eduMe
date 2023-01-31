class LoginPage{
elements = {
userEmailId: ()=> cy.get("input[type='email']"),
continueButton: ()=> cy.get("button[data-automation='email-button']"),
userPassword: ()=> cy.get("input[type='password']"),
signInButton: ()=> cy.get("button[data-automation='password-button']")
}

typeUserEmailId(emailId) {
    this.elements.userEmailId().type(emailId)
}

clickOnContinueButton() {
    this.elements.continueButton().click()
}    

typeUserPassword(password) {
    this.elements.userPassword().type(password)
}

clickOnSignInButton() {
    this.elements.signInButton().click()
}

userLoginIntoApplication(emailId, password) {
    this.typeUserEmailId(emailId)
    this.clickOnContinueButton()
    this.typeUserPassword(password)
    this.clickOnSignInButton()
}
}

export default LoginPage; 