/// <reference types = "Cypress"/>

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../../../pageObjects/HomePage";
import LoginPage from "../../../pageObjects/LoginPage";
import PeoplePage from "../../../pageObjects/PeoplePage";

const homePage = new HomePage()
const loginPage =  new LoginPage()
const peoplePage = new PeoplePage()
const randomInt = new Date().getTime();
var firstName, lastName, emailId, phoneNumber, invite;

Given("User Login into the application", function() {
cy.visit(Cypress.env('url'))
cy.title().should('eq', 'eduMe Control Panel')
loginPage.userLoginIntoApplication(this.testdata.emailAddress, this.testdata.password)
})

When("User clicks on the People tab", ()=> {
// Verify user has landed on home page    
homePage.verifyWelcomeText('Hello there, QA 😺')
homePage.clickOnPeopleTab()
})

When("User add a Single User and fill all the mandatory details with {string} and select team {string}", (inviteType, teamName) => {
firstName = "firstName".concat(randomInt.toString())
lastName = "LastName".concat(randomInt.toString())
emailId = randomInt.toString()+"@gmail.com";
phoneNumber = randomInt.toString()
invite = inviteType

peoplePage.clickToAddASingleUser()
peoplePage.enterRequiredDetails(firstName, lastName, emailId, phoneNumber, inviteType)
// Verify Contact Hint Message
peoplePage.verifyContactHintMessage('The user will get an '+inviteType+' invitation.', inviteType)
// Verify message appear prior selecting the team
peoplePage.verifyTeamSelectionMessage('Please choose at least one team for the new user.')
peoplePage.selectTeam(teamName)
peoplePage.clickOnAddUserButton()
// Verify User has been created success message
peoplePage.verifyUserAddedSuccessMessage('Awesome! The user has been added 🕺🏻')
})

Then("User search and verify the new user has been added successfully to the team {string}", (teamName) => {
peoplePage.navigateToTeamsTab(teamName)
// Verify the newly created user is displayed under the designated team
peoplePage.verifyUserAppearsOnTheList(firstName, lastName, emailId, phoneNumber, invite) 
})