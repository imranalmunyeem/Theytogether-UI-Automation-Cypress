///<reference types = 'cypress'/>

import ContactPage from "../support/pageobjects/ContactPage";

const contact = new ContactPage();

describe('Contact Page', () => {
    beforeEach('Will run before each it block',()=>{
        contact.navigateToContact();
    });

context('Url,Tagline,Heading Test',()=>{
    it('Url should contain the correct content', () => {
        cy.url().should('contain','contact');
    });

    it('Tagline should contain the correct content', () => {
        contact.taglineMessage().should('be.visible');
        contact.taglineMessage().should('contain','We are optimists who love to work together');
    });

    it('Left area of should contain the correct heading', () => {
        contact.leftHeading().should('be.visible');
        contact.leftHeading().should('contain','You can find us at:');
    });

    it('Right area of should contain the correct heading', () => {
        contact.rightHeading().should('be.visible');
        contact.rightHeading().should('contain',"Let's get in touch:");
    });
});

context('Contact Information Test',()=>{
    it('Contact information title should contain the correct title', () => {
        contact.contactInfoTitle().should('be.visible');
        contact.contactInfoTitle().should('contain','You can find us at:');
    });

    it('Email field should contain the correct email address', () => {
        contact.emailField().should('be.visible');
        contact.emailField().should('contain','Ourweddingjourney@gmail.com');
    });

    it('Phone number field should contain the correct number', () => {
        contact.phoneField().should('be.visible');
        contact.phoneField().should('contain','+447307509256');
    });

    it('Location field should contain the correct location', () => {
        contact.locationField().should('be.visible');
        contact.locationField().should('contain','Luton, United Kingdom');
    });
});

context('Contact Form Test',()=>{
    it('Contact form title should contain the correct title', () => {
        contact.contactFormTitle().should('be.visible');
        contact.contactFormTitle().should('contain',"Let's get in touch:");
    });

    it('Contact form should be submitted successfully with valid inputs', () => {
        contact.hisFirstName().should('be.visible');
        contact.hisFirstName().clear();
        contact.hisFirstName().type('John');
        contact.hisLastName().should('be.visible');
        contact.hisLastName().clear();
        contact.hisLastName().type('Doe');
        contact.herFirstName().should('be.visible');
        contact.herFirstName().clear();
        contact.herFirstName().type('Sarah');
        contact.herLastName().should('be.visible');
        contact.herLastName().clear();
        contact.herLastName().type('Jane');
        contact.email().should('be.visible');
        contact.email().clear();
        contact.email().type('o.md.abdullahalmamun@gmail.com');
        contact.sendMessageButton().should('be.visible');
        contact.sendMessageButton().click();
        contact.successfulContactMessage().should('be.visible');
        contact.successfulContactMessage().should('contain','Thanks for contacting us! We will be in touch with you shortly.');
    });

    it('Contact form should not be submitted successfully with invalid email', () => {
        contact.hisFirstName().should('be.visible');
        contact.hisFirstName().clear();
        contact.hisFirstName().type('John');
        contact.hisLastName().should('be.visible');
        contact.hisLastName().clear();
        contact.hisLastName().type('Doe');
        contact.herFirstName().should('be.visible');
        contact.herFirstName().clear();
        contact.herFirstName().type('Sarah');
        contact.herLastName().should('be.visible');
        contact.herLastName().clear();
        contact.herLastName().type('Jane');
        contact.email().should('be.visible');
        contact.email().clear();
        contact.email().type('wrongemail.com');
        contact.sendMessageButton().should('be.visible');
        contact.sendMessageButton().click();
        contact.invalidEmailMessage().should('be.visible');
        contact.invalidEmailMessage().should('contain','Please enter a valid email address.');
    });
    
    it('Contact form should not be submitted successfully with empty email field', () => {
        contact.hisFirstName().should('be.visible');
        contact.hisFirstName().clear();
        contact.hisFirstName().type('John');
        contact.hisLastName().should('be.visible');
        contact.hisLastName().clear();
        contact.hisLastName().type('Doe');
        contact.herFirstName().should('be.visible');
        contact.herFirstName().clear();
        contact.herFirstName().type('Sarah');
        contact.herLastName().should('be.visible');
        contact.herLastName().clear();
        contact.herLastName().type('Jane');
        contact.sendMessageButton().click();
        contact.emptyFieldMessage().should('be.visible');
        contact.emptyFieldMessage().should('contain','This field is required.');
    });    
}); 


});