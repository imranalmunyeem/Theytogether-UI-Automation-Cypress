///<reference types = 'cypress'/>

import HomePage from "../support/pageobjects/HomePage";

const home = new HomePage();

describe('Title Test', () => {
    beforeEach('Will run before each it block',()=>{
        home.navigateToTitle();
    });

context('Url verification',()=>{
    it('Title should contain the correct content', () => {
        cy.title().should('eq', 'OurWeddingJourney');
    });

    it('Title should not contain the incorrect content', () => {
        cy.title().should('eq', 'wrongtitle');
    });
}); 
});