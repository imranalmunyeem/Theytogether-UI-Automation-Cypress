class SignupPage {
    //--------------------------------Credentials--------------------------------------------//    
    //Navigate
    navigateToSignup(){
        cy.visit('https://theytogether.com/sign-up/');
    }

    //--------------------------------Credentials--------------------------------------------//
    //First Name
    firstName(){
        return cy.get('#forminator-field-first-name-1_6439f85f87112');         
    }

    //Last Name
    lastName(){
        return cy.get('#forminator-field-last-name-1_6439f85f87112');
         
    }

    //User Name
    userName(){
        return cy.get('#forminator-field-text-1_6439f85f87112');   
    }
    
    //Email
    email(){
        return cy.get('#forminator-field-email-1_6439f85f87112');      
    }


    //Phone
    phone(){
        return cy.get('#forminator-field-phone-1_6439f85f87112');
    
    }

    //Password
    password(){
        return cy.get('#forminator-field-password-1_6439f85f87112');
   
    }
    
    
    //Street Address
    street(){
        return cy.get('#forminator-field-street_address-address-1_6439f85f87112');
       
    }
    
    //City
    city(){
        return cy.get('#forminator-field-city-address-1_6439f85f87112');    
    }
    
    
    //Zip Code
    zip(){
        return cy.get('#forminator-field-zip-address-1_6439f85f87112');       
    }    

    //Register
    registerButton(){
        return cy.get('.forminator-button');
    }

    //Successful registration message
    successfulRegistrationMessage(){
        return cy.get('.forminator-response-message');
    }
    //Existing email verification
    existingEmailMessage(){
        return cy.get('.forminator-response-message');
    }

    //Invalid Email Message
    invalidEmailMessage(){
        return cy.get('#email-1 > .forminator-field > .forminator-error-message');
    }

    //Invalid Phone Message
    invalidPhoneMessage(){
        return cy.get('#phone-1 > .forminator-field > .forminator-error-message');
    }

    //Empty field message
    emptyFieldmessage(){
        return cy.get('#text-1 > .forminator-field > .forminator-error-message');
    }

}
export default SignupPage;