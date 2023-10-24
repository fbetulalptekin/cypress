class LoginPage {
    
    getUserEmail() { 
        return cy.get('#login-email').type('mb@babayigit.net');
    }

    getUserPassword() {
        return cy.get('#login-password').type('M123456.b');
    }

    clickLoginButton(){
        return cy.get('#sign_up > :nth-child(3) > .btn').click()
    }

    getAssert(){
        return cy.get(':nth-child(6) > .icon > a').should('contains.text',"courses")
    }
    
}

export default LoginPage;