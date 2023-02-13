import { Logger } from '../../../components/logger/logger';
import { DashboardPageHelper } from '../../../page-objects/dashboard-page/dashboard-page-helper';
import { LoginPageHelper } from '../../../page-objects/login-page/login-page-helper';

describe('C-1: As a user, I should be able to login with correct credentials so that I can perform my day-to-day tasks', () => {
    beforeEach('Precondition - Navigate to Site', () => {
        LoginPageHelper.navigate();
    });

    it('1: Login Test Case - Verify Valid Login', () => {
        Logger.stepNumber(1);
        Logger.stepAction('Enter correct username and password');
        LoginPageHelper.enterValidCredentialAndLogin();
        Logger.stepVerification('Verify user is logged in and Side Menu is displayed');
        DashboardPageHelper.verifyPage();
    });
});
