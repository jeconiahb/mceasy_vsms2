import { Logger } from '../../../components/logger/logger';
import { DashboardPageHelper } from '../../../page-objects/dashboard-page/dashboard-page-helper';
import { LiveViewPageHelper } from '../../../page-objects/liveview-page/liveview-page-helper';
import { LoginPageHelper } from '../../../page-objects/login-page/login-page-helper';

describe('C-xxx - TBA', () => {
    beforeEach('Precondition - Navigate to Site and Login', () => {
        LoginPageHelper.navigateToSiteAndLogin();
    });

    it('Verify Liveview statuses', () => {
        Logger.stepNumber(1);
        Logger.stepAction('Navigate to Live View');
        DashboardPageHelper.goToLiveView();
        Logger.stepVerification('Verify vehicle statuses are displayed');
        LiveViewPageHelper.verifyVehicleStatuses();
    });
});
