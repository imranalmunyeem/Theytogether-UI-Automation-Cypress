///<reference types = "cypress"/>
import SignupPage from "../support/pageobjects/SignupPage";
const signup = new SignupPage(); 
describe('Sign Up page test', () => {
    beforeEach('Will run before each it block',()=>{
        signup.navigateToSignup();
    });

context('Url Test',()=>{
    it('Verify URL of the sign up page',()=>{
     cy.url().should('include', 'sign-up');
     });
  });

context('Sign up form Test',()=>{
    it('Sign up function should be worked successfully with valid inputs', () => {
        signup.firstName().should('be.visible');
        signup.firstName().clear();
        signup.firstName().type('Test First Name')
        signup.lastName().should('be.visible');
        signup.lastName().clear();
        signup.lastName().type('Test Last Name');
        signup.userName().should('be.visible');
        signup.userName().clear();
        signup.userName().type('username123');
        signup.email().should('be.visible');
        signup.email().clear();   
        signup.email().type('test@mailinator.com'); 
        signup.phone().should('be.visible');
        signup.phone().clear(); 
        signup.phone().type('07394032549');
        signup.password().should('be.visible');
        signup.password().clear();  
        signup.password().type('TestPassword'); 
        signup.street().should('be.visible');
        signup.street().clear();  
        signup.street().type('Test Street 101');  
        signup.city().should('be.visible');
        signup.city().clear(); 
        signup.city().type('Test City');  
        signup.zip().should('be.visible');
        signup.zip().clear(); 
        signup.zip().type('TestLu1');
        signup.registerButton().click(); 
        signup.successfulRegistrationMessage().should('contain','Account registration successful. Please check your email inbox to activate your new account.');
});

    it('Sign up function should not be worked successfully with existing email address', () => {
        signup.firstName().should('be.visible');
        signup.firstName().clear();
        signup.firstName().type('Test2 First Name')
        signup.lastName().should('be.visible');
        signup.lastName().clear();
        signup.lastName().type('Test2 Last Name');
        signup.userName().should('be.visible');
        signup.userName().clear();
        signup.userName().type('Test2username');
        signup.email().should('be.visible');
        signup.email().clear();   
        signup.email().type('o.md.abdullahalmamun@gmail.com'); 
        signup.phone().should('be.visible');
        signup.phone().clear(); 
        signup.phone().type('07394032549');
        signup.password().should('be.visible');
        signup.password().clear();  
        signup.password().type('TestPassword'); 
        signup.street().should('be.visible');
        signup.street().clear();  
        signup.street().type('Test Street 102');  
        signup.city().should('be.visible');
        signup.city().clear(); 
        signup.city().type('Test2 City');  
        signup.zip().should('be.visible');
        signup.zip().clear(); 
        signup.zip().type('TestLu2');
        signup.registerButton().click(); 
        signup.existingEmailMessage().should('contain','This email address is already registered.')
    });

    it('Sign up function should not be worked successfully with invalid email and phone', () => {
        signup.firstName().should('be.visible');
        signup.firstName().clear();
        signup.firstName().type('invalid')
        signup.lastName().should('be.visible');
        signup.lastName().clear();
        signup.lastName().type('invalid');
        signup.userName().should('be.visible');
        signup.userName().clear();
        signup.userName().type('invalid');
        signup.email().should('be.visible');
        signup.email().clear();   
        signup.email().type('invalid'); 
        signup.phone().should('be.visible');
        signup.phone().clear(); 
        signup.phone().type('invalid');
        signup.password().should('be.visible');
        signup.password().clear();  
        signup.password().type('invalid'); 
        signup.street().should('be.visible');
        signup.street().clear();  
        signup.street().type('invalid');  
        signup.city().should('be.visible');
        signup.city().clear(); 
        signup.city().type('invalid');  
        signup.zip().should('be.visible');
        signup.zip().clear(); 
        signup.zip().type('invalid');
        signup.registerButton().click(); 
    });

    it('Sign up function should not be worked successfully with empty input fields', () => {
        signup.registerButton().click(); 
        signup.emptyFieldmessage().should('be.visible');
        signup.emptyFieldmessage().should('contain','This field is required. Please enter text.')
    });
  });  

});