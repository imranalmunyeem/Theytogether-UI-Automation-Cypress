class ContactPage{
//--------------------------------URL--------------------------------------------//
    //Navigate to contact
    navigateToContact(){
        cy.visit('https://theytogether.com/contact/');
    }

//--------------------------------Contact Form--------------------------------------------//
    //Contact form title
    contactFormTitle(){
        return cy.get('.elementor-element-1506722 > .elementor-widget-container > .elementor-heading-title');
    }    
    //His name
    hisFirstName(){
        return cy.get('#wpforms-9-field_0');
    }

    hisLastName(){
        return cy.get('#wpforms-9-field_0-last');
    }

    //Her name
    herFirstName(){
        return cy.get('#wpforms-9-field_6');
    }

    herLastName(){
        return cy.get('#wpforms-9-field_6-last');
    } 
    
    //Email
    email(){
        return cy.get('#wpforms-9-field_1');      
    } 
    
    //Send message
    sendMessageButton(){
        return cy.get('#wpforms-submit-9');
    }

    //Successful contact message
    successfulContactMessage(){
        return cy.get('#wpforms-confirmation-9 > p');
    }

    //invalid email message
    invalidEmailMessage(){
        return cy.get('#wpforms-9-field_1-error');
    }

    //Empty Field Message
    emptyFieldMessage(){
        return cy.get('#wpforms-9-field_1-error');
    }
//-------------------------------------Headings and Tagline----------------------------------//
    //Left Heading
    leftHeading(){
        return cy.get('.elementor-element-b29413d > .elementor-widget-container > .elementor-heading-title');
    }
    //Right Heading
    rightHeading(){
        return cy.get('.elementor-element-1506722 > .elementor-widget-container > .elementor-heading-title');
    }

    //Tagline Message
    taglineMessage(){
        return cy.get('.elementor-element-93a1b2e > .elementor-widget-container > .elementor-heading-title');
    }

//----------------------------------Contact Info----------------------------------//
    // Contact information title
    contactInfoTitle(){
        return cy.get('.elementor-element-b29413d > .elementor-widget-container > .elementor-heading-title');
    }
    //Email field
    emailField(){
        return cy.get('.elementor-element-ce3153c > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-description');
    }

    //Phone field
    phoneField(){
        return cy.get('.elementor-element-9b19864 > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-description');
    }

    //Location field
    locationField(){
        return cy.get('.elementor-element-1184dd7 > .elementor-widget-container > .elementor-icon-box-wrapper > .elementor-icon-box-content > .elementor-icon-box-description');
    }    
}
export default ContactPage;