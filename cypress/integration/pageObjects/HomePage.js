class HomePage{
    elements = {
        welcomeText: ()=> cy.get("h2[data-automation='welcome-text']"),
        peopleTab: ()=> cy.get("a[data-automation='header-item-people']")
    }

    verifyWelcomeText(message) {
        this.elements.welcomeText().should('have.text', message)
    }

    clickOnPeopleTab() {
        this.elements.peopleTab().click({force:true})
    }

}

export default HomePage; 