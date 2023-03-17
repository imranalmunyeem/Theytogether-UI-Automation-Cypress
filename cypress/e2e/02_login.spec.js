///<reference types = "cypress"/>

import LoginPage from "../support/pageobjects/LoginPage";
const login = new LoginPage()

describe('Login page test', () => {
    beforeEach('Will run before each it block',()=>{
        login.navigateToLogin();
    });

context('Url Test',()=>{
    it('Verify URL of the login page',()=>{
     cy.url().should('include', 'login');
     });
  });

context('Login Functionality Test',()=>{
    it('Login function should be worked successfully with valid inputs', () => {
        login.email().should('be.visible');
        login.email().clear();
        login.email().type('o.md.abdullahalmamun@gmail.com');
        login.password().should('be.visible');
        login.password().clear();
        login.password().type('10.mamun.30');
        login.loginButton().should('be.visible');
        login.loginButton().click();
        login.successfulLoginMessage().should('be.visible');
        login.successfulLoginMessage().should('contain','Booking your wedding');
    });

    
    it('Login function should not be worked successfully with incorrect inputs', () => {
        login.email().should('be.visible');
        login.email().clear();
        login.email().type('o.md.abdullahalmamun@gmail.com');
        login.password().should('be.visible');
        login.password().clear();
        login.password().type('wrongpassword');
        login.loginButton().should('be.visible');
        login.loginButton().click();
        login.incorrectPasswordMessage().should('be.visible');
        login.incorrectPasswordMessage().should('contain','Error: The password you entered for the email address');
    }); 
    
    it('Login function should not be worked successfully with empty input fields', () => {
        login.email().should('be.visible');
        login.email().clear();
        login.email().type('o.md.abdullahalmamun@gmail.com');
        login.loginButton().should('be.visible');
        login.loginButton().click();
        login.emptyPasswordFieldMessage().should('contain','Your password is required'); 

    });


    it('Lost password function should be worked successfully', () => {
        login.navigateToLostPassword();
        login.resetEmail().should('be.visible');
        login.resetEmail().clear();
        login.resetEmail().type('theytogether');
        login.getNewPassword().should('be.visible');
        login.getNewPassword().click();
        login.successfulResetMessage().should('be.visible');
        login.successfulResetMessage().should('contain','Check your email for the confirmation link');
    }); 

    it('Lost password function should not be worked successfully with non existing account', () => {
        login.navigateToLostPassword();
        login.resetEmail().should('be.visible');
        login.resetEmail().clear();
        login.resetEmail().type('tester1@mailinator.com');
        login.getNewPassword().should('be.visible');
        login.getNewPassword().click();
        login.nonExistingAccountMessage().should('be.visible');
        login.nonExistingAccountMessage().should('contain','Error: There is no account with that username or email address.');
    }); 
  });  
   
});