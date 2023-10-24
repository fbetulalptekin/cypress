import HomePage from "../POM/HomePage.cy";
import LoginPage from "../POM/LoginPage.cy";

describe('POM ile login', () => {
    it('Login testi', () => {
        const homePage = new HomePage();
        homePage.getVisit();
        homePage.clickLoginLink();

        const loginPage = new LoginPage();
        loginPage.getUserEmail();
        loginPage.getUserPassword();
        loginPage.clickLoginButton();
        loginPage.getAssert();
    });
});