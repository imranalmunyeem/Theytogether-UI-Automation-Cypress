class LoginPage {
//--------------------------------URL--------------------------------------------//    
    //Navigate
    navigateToLogin(){
        cy.visit('https://theytogether.com/login/');
    }

    //--------------------------------Credentials--------------------------------------------//
    //Email
    email(){
        return cy.get('#forminator-field-text-1_6413cdd44b32b');      
    }


    //Password
    password(){
        return cy.get('#forminator-field-password-1_6413cdd44b32b');
   
    }
    
     //--------------------------------Login--------------------------------------------//   
    //Login
    loginButton(){
        return cy.get('.forminator-button');
    }

    //--------------------------------Messages--------------------------------------------//
    //Successful login message
    successfulLoginMessage(){
        return cy.get('.entry-title');
    }

    //Incorrect password message
    incorrectPasswordMessage(){
        return cy.get('.forminator-response-message');
    }

    //Empty field message
    emptyPasswordFieldMessage(){
        return cy.get('#password-1 > .forminator-field > .forminator-error-message');
    }

        //--------------------------------Reset--------------------------------------------//
    //navigate to lost password
    navigateToLostPassword(){
        cy.visit('https://theytogether.com/wp-login.php?action=lostpassword&redirect_to');
    }

    //Reset Email
    resetEmail(){
        return cy.get('#user_login');      
    }

    //Get new password
    getNewPassword(){
        return cy.get('#wp-submit');      
    } 
    
    //Successful Reset message
    successfulResetMessage(){
        return cy.get('#login-message');
    }
    
    //Nonexisting account message
    nonExistingAccountMessage(){
        return cy.get('#login_error');
    }
    
    
}
export default LoginPage;