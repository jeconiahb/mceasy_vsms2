import { Logger } from '../../../components/logger/logger';
import { DashboardPageHelper } from '../../../page-objects/dashboard-page/dashboard-page-helper';
import { LiveViewPageHelper } from '../../../page-objects/liveview-page/liveview-page-helper';
import { LoginPageHelper } from '../../../page-objects/login-page/login-page-helper';

const testGoal = `
1. To ensure function  in live view page are working correctly
`;

const testData = {
    fleetKeyword: '6890 DR',
    notifKeyword: '9101',
    color: 'red',
};

describe('VSMS-3: Live View test case', () => {
    before('Test Goal', () => {
        Logger.testGoal(testGoal);
    });

    beforeEach('Precondition - Navigate to Site', () => {
        LoginPageHelper.navigate();
        LoginPageHelper.enterValidCredentialAndLogin();
        Logger.stepVerification('Verify user is logged in and Side Menu is displayed');
        DashboardPageHelper.verifyPage();
        DashboardPageHelper.goToLiveView();
        Logger.stepVerification('Verify user is already in Live View Page');
        LiveViewPageHelper.verifyLiveviewPage();
    });

    it('VSMS-3-1: Main Map', () => {
        Logger.stepNumber(1);
        Logger.stepAction('functional test icon on map');
        LiveViewPageHelper.clickcarRed();
        LiveViewPageHelper.verifymodalFleet();
        LiveViewPageHelper.clickCloseModalFleet();
        LiveViewPageHelper.clickzoomOut();
        LiveViewPageHelper.clickzoomOut();
        LiveViewPageHelper.clickzoomOut();
        LiveViewPageHelper.clickzoomOut();
        LiveViewPageHelper.clickzoomOut();
        LiveViewPageHelper.clickzoomOut();
        LiveViewPageHelper.clickzoomOut();
        LiveViewPageHelper.clickzoomOut();
        LiveViewPageHelper.clickzoomOut();
        LiveViewPageHelper.clickzoomOut();
        LiveViewPageHelper.clickmapGroup();
        LiveViewPageHelper.clickcarGreen();
        LiveViewPageHelper.verifymodalFleet();
        LiveViewPageHelper.clickCloseModalFleet();
        LiveViewPageHelper.clickcarYellow();
        LiveViewPageHelper.verifymodalFleet();
        LiveViewPageHelper.clickCloseModalFleet();
    });

    it('VSMS-3-2: Trip history', () => {
        Logger.stepNumber(2);
        Logger.stepAction('preview trip history from a selected fleet');
        LiveViewPageHelper.clickCarIcon();
        LiveViewPageHelper.verifymodalFleet();
        LiveViewPageHelper.clicktripHistoryModal();
        LiveViewPageHelper.clickbackButton();
        LiveViewPageHelper.clickCloseModalFleet();
        Logger.stepAction('clik on trip history icon from the first fleet on the list');
        LiveViewPageHelper.clicksearchFleet(testData.fleetKeyword);
        LiveViewPageHelper.clicktripHistoryFleet();
        LiveViewPageHelper.verifyTripHistoryFleetList();
        LiveViewPageHelper.clickotherInfo();
        LiveViewPageHelper.clickplayAll();
        LiveViewPageHelper.clickperiodDate();
        LiveViewPageHelper.clickthreeDaysperiod();
        LiveViewPageHelper.clickapplyButton();
        LiveViewPageHelper.verifyTripHistoryFleetList();
        LiveViewPageHelper.clickplayOne();
    });

    it('VSMS-3-3: Configure Live View', () => {
        Logger.stepNumber(3);
        Logger.stepAction('Check map configuration');
        LiveViewPageHelper.clickmapConfig();
        LiveViewPageHelper.clicktoggleGeolokasi();
        LiveViewPageHelper.clicktoggleClusterFleet();
        LiveViewPageHelper.clicktoggleTraffic();
        LiveViewPageHelper.clicktoggleAutoReload();
        LiveViewPageHelper.clicktoggleFleetTag();
        LiveViewPageHelper.clicktoggleGeoTag();
        LiveViewPageHelper.clicktoggleGoogleLoc();
        LiveViewPageHelper.clickcloseConfig();
        LiveViewPageHelper.clickmapConfig();
        LiveViewPageHelper.clicktoggleGeolokasi();
        LiveViewPageHelper.clicktoggleClusterFleet();
        LiveViewPageHelper.clicktoggleTraffic();
        LiveViewPageHelper.clicktoggleAutoReload();
        LiveViewPageHelper.clicktoggleFleetTag();
        LiveViewPageHelper.clicktoggleGeoTag();
        LiveViewPageHelper.clicktoggleGoogleLoc();
    });

    it('VSMS-3-4: Fleet List', () => {
        Logger.stepNumber(4);
        Logger.stepAction('Check fleet list and it functionality');
        LiveViewPageHelper.clickstatusSemua();
        LiveViewPageHelper.clickstatusBerjalan();
        LiveViewPageHelper.clickstatusBerjalan();
        LiveViewPageHelper.clickstatusDiam();
        LiveViewPageHelper.clickstatusDiam();
        LiveViewPageHelper.clickstatusParkir();
        LiveViewPageHelper.clickstatusParkir();
        LiveViewPageHelper.clickstatusLuring();
        LiveViewPageHelper.clickstatusLuring();
        LiveViewPageHelper.clickexpandFleetList();
        LiveViewPageHelper.clickcollapseFleetList();
        LiveViewPageHelper.clicksearchFleet(testData.fleetKeyword);
        LiveViewPageHelper.clearsearchFleet();
        LiveViewPageHelper.clickbuttonSort();
        LiveViewPageHelper.clickplatDESC();
        LiveViewPageHelper.clickbuttonSort();
        LiveViewPageHelper.clickstatusASC();
        LiveViewPageHelper.clickbuttonSort();
        LiveViewPageHelper.clickstatusDESC();
        LiveViewPageHelper.clickbuttonSort();
        LiveViewPageHelper.clickplatASC();
    });

    it('VSMS-3-5: Notification List', () => {
        Logger.stepNumber(5);
        Logger.stepAction('Check notification list and it functionality');
        LiveViewPageHelper.clicktabNotifikasi();
        LiveViewPageHelper.clicknotifPerilaku();
        LiveViewPageHelper.clicknotifUmum();
        LiveViewPageHelper.clicknotifSemua();
        LiveViewPageHelper.clicksearchNotif(testData.notifKeyword);
        LiveViewPageHelper.clearsearchNotif();
        LiveViewPageHelper.clickexpandNotifList();
        LiveViewPageHelper.clickcollapseNotifList();
        LiveViewPageHelper.clickmoreNotif();
    });

    // it.only('VSMS-3-x: UJI COBA', () => {
    //     Logger.stepNumber(1);
    //     LiveViewPageHelper.conditionalGroup();
    //     LiveViewPageHelper.clickRedCar();
    //     // LiveViewPageHelper.verifymodalFleet();
    //     LiveViewPageHelper.clickCloseModalFleet();
    //     LiveViewPageHelper.clickzoomOut();
    //     LiveViewPageHelper.clickzoomOut();
    //     LiveViewPageHelper.clickzoomOut();
    //     LiveViewPageHelper.clickzoomOut();
    //     LiveViewPageHelper.clickzoomOut();
    //     LiveViewPageHelper.clickzoomOut();
    //     LiveViewPageHelper.clickzoomOut();
    // });
});
