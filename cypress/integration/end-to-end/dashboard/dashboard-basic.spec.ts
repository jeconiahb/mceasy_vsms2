import { Logger } from '../../../components/logger/logger';
import { DashboardPageHelper } from '../../../page-objects/dashboard-page/dashboard-page-helper';
import { LoginPageHelper } from '../../../page-objects/login-page/login-page-helper';

describe('C-xxx - TBA', () => {
    beforeEach('Precondition - Navigate to Site and Login', () => {
        LoginPageHelper.navigateToSiteAndLogin();
    });

    it('Verify Vehicle Total', () => {
        Logger.stepNumber(1);
        Logger.stepVerification('Verify vehicle statuses');
        DashboardPageHelper.verifyVehicleStatusesIsVisible();
        DashboardPageHelper.verifyKendaraanBerjalanCount(1);
    });
});
