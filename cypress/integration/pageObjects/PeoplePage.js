class PeoplePage{

elements = {
    addNewUsersButton: ()=> cy.get("div[data-automation='all-teams-new-team-dropdown'] button"),
    addASingleUser: ()=> cy.get("button[data-automation='add-single-user-option']"),
    firstName: ()=> cy.get("input[data-automation='add-team-member-first-name-input']"),
    lastName: ()=> cy.get("input[data-automation='add-team-member-last-name-input']"),
    emailField: ()=> cy.get("input[data-automation='add-team-member-email-input']"),
    phoneField: ()=> cy.get("input[placeholder='Mobile number']"),
    contactHintMessage: ()=> cy.get("div[class*='contactHint'] span"),
    teamSelectionMessage: ()=> cy.get("span[class*='peopleAndTeams-EditMember-styles'] span[class*='textGrey']"),
    chooseTeamMessage: ()=> cy.get("span[class*='peopleAndTeams'] div[class*='styles_center'] span"),
    addUserButton: ()=> cy.get("button[data-automation='add-user-to-team-button']"),
    selectTeamsButton: ()=> cy.get("button[data-automation='edit-user-select-teams-button']"),
    selectButtonOnTeam: ()=> cy.get("button[data-automation='assign-team-select-button']"),
    userAddedMessage: ()=> cy.get("div[data-automation='notification-bar-people-addpersonsuccess'] span"),
    teamsTab: ()=> cy.get("li[data-automation='teams-tab']"),
    teamMemberName: ()=> cy.get("span[class*='peopleAndTeams-Members']:nth-child(1)"),
}

getTeamToSelect(teamName) {
    return cy.get("div[data-automation='team-option-"+teamName.replace(' ','-')+"'] div[class*='checkBox']"
    )
}    

getInviteTypeRadioButton(radioButtonType) {
    return cy.get("button span[data-for='"+radioButtonType+"']")
}

getShowAllTeamMember(teamName) {
    cy.wait(5000)
    return cy.xpath("//div[text()='"+teamName+"']/parent::div//span[contains(@class,'styles_link')]")
}

clickOnAddNewUsersButton() {
    this.elements.addNewUsersButton().click()
}

clickOnAddNewUsersButton() {
    this.elements.addASingleUser().click()
}

typeFirstName(firstName) {
    this.elements.firstName().type(firstName)
}

typeLastName(lastName) {
    this.elements.lastName().type(lastName)
}

typeEmail(emailId) {
    this.elements.emailField().type(emailId)
}

typePhone(phoneNumber) {
    this.elements.phoneField().type(phoneNumber)
}

verifyContactHintMessage(message, inviteType) {
    if(inviteType=="Email"){
        message=message.replace("Email", "email");
    }else{
        message=message.replace("Phone", "SMS");
    }
    this.elements.contactHintMessage().should('have.text', message) 
}

verifyTeamSelectionMessage(message) {
    this.elements.teamSelectionMessage().should('have.text', message)
}

clickOnAddUserButton() {
    this.elements.addUserButton().click()
}

clickOnSelectTeamButton() {
    this.elements.selectTeamsButton().click()
}

clickOnSelectButtonOnTeams() {
    this.elements.selectButtonOnTeam().click()
}

verifyUserAddedSuccessMessage(message) {
    this.elements.userAddedMessage().should('have.text', message)
}

clickOnTeamsTab() {
    this.elements.teamsTab.click()
}

clickToAddASingleUser() {
    this.elements.addNewUsersButton().click()
    this.elements.addASingleUser().click()
}

enterRequiredDetails(firstName, lastName, emailId, phoneNumber, inviteType) {
    this.typeFirstName(firstName)
    this.typeLastName(lastName)
    this.getInviteTypeRadioButton(inviteType).click()
    if(inviteType == "Email")
        this.typeEmail(emailId)
    else    
        this.typePhone(phoneNumber)
}

selectTeam(teamName) {
    this.clickOnSelectTeamButton()
    this.getTeamToSelect(teamName).click()
    this.clickOnSelectButtonOnTeams()
}

navigateToTeamsTab(teamName) {
    this.elements.teamsTab().click()
    this.getShowAllTeamMember(teamName).click()
}

verifyUserAppearsOnTheList(firstName, lastName, emailId, phoneNumber, invite){
    this.elements.teamMemberName().each(($memberName, index, $list) => {
        if($memberName.text().includes(firstName)) {
        expect($memberName.eq(index).text()).to.include(firstName+" "+lastName)
        this.elements.teamMemberName().eq(index).next().then(function(emailOrPhone){
        if(invite == "Email")
        expect(emailOrPhone.text()).to.equal(emailId)
        else
        expect(emailOrPhone.text()).to.equal("44"+phoneNumber)
        })
      }
    }) 
}


}

export default PeoplePage;