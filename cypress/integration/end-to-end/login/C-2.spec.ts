import { Logger } from '../../../components/logger/logger';
import { LoginPageHelper } from '../../../page-objects/login-page/login-page-helper';

describe('C-1: Login Test Case - Verify Valid and Invalid Login', () => {
    beforeEach('Precondition - Navigate to Site', () => {
        LoginPageHelper.navigate();
    });

    it('1: Login Test Case - Verify Invalid Username', () => {
        Logger.stepNumber(1);
        Logger.stepAction('Enter invalid username');
        LoginPageHelper.enterInvalidUsername();
        LoginPageHelper.clickLogin();
        Logger.stepVerification('Verify user is not logged in and correct message is displayed');
        LoginPageHelper.verifyAlertMessageForInvalidLogin();
        LoginPageHelper.verifyUsernameTextboxIsVisible();
    });

    it('2: Login Test Case - Verify Invalid Password', () => {
        Logger.stepNumber(1);
        Logger.stepAction('Enter invalid password with a valid username');
        LoginPageHelper.enterInvalidPassword();
        LoginPageHelper.clickLogin();
        Logger.stepVerification('Verify user is not logged in and correct message is displayed');
        LoginPageHelper.verifyAlertMessageForInvalidLogin();
        LoginPageHelper.verifyUsernameTextboxIsVisible();
    });
});
