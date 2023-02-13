// const constant = new LiveViewPageConstant();

import { Logger } from '../../components/logger/logger';
import { VerificationHelper } from '../../components/verification-helper';
import { LiveViewPageConstant } from './liveview-page-constant';
import { LiveViewPageElement } from './liveview-page-element';

const constant = new LiveViewPageConstant();
const elem = LiveViewPageElement;

export class LiveViewPageHelper {
    static verifyVehicleStatuses() {
        const status = constant.vehicleStatus;

        Logger.helper(`Verify status "${status.semua}" is displayed`);
        VerificationHelper.isVisible(elem.vehicleStatus(status.semua));

        Logger.helper(`Verify status "${status.berjalan}" is displayed`);
        VerificationHelper.isVisible(elem.vehicleStatus(status.berjalan));

        Logger.helper(`Verify status "${status.diam}" is displayed`);
        VerificationHelper.isVisible(elem.vehicleStatus(status.diam));

        Logger.helper(`Verify status "${status.parkir}" is displayed`);
        VerificationHelper.isVisible(elem.vehicleStatus(status.parkir));

        Logger.helper(`Verify status "${status.luring}" is displayed`);
        VerificationHelper.isVisible(elem.vehicleStatus(status.luring));
    }

    // static clickYellowCar() {
    //     Logger.helper('Click on Yellow fleet icon');
    //     cy.get('body').then(($body) => {
    //         if ($body.find('src:contains("yellow")').length > 0) {
    //             Logger.helper('Click on Yellow fleet icon');
    //             ElementHelper.click(LiveviewPageElement.carYellow);
    //             VerificationHelper.isVisible(LiveviewPageElement.modalFleet);
    //             cy.wait(3000);
    //         } else {
    //             Logger.helper('Yellow fleet not available');
    //         }
    //     });
    // }

    // static clickRedCar() {
    //     Logger.helper('Click on Red fleet icon');
    //     cy.get('img').then(($body) => {
    //         if ($body.find('src:contains("red")').length > 0) {
    //             Logger.helper('Click on red fleet icon');
    //             cy.log('visible');
    //             cy.xpath('//img[@src="/img/car-red.da1553d9.svg"])[1]').click();
    //             // ElementHelper.click(LiveviewPageElement.carRed);
    //             VerificationHelper.isVisible(LiveviewPageElement.modalFleet);
    //             cy.wait(3000);
    //         } else {
    //             Logger.helper('Red fleet not available');
    //         }
    //     });
    // }

    // static conditionalGroup() {
    //     Logger.helper('Search for fleet group');
    //     cy.get('body').then(($body) => {
    //         if ($body.find('class:contains("cluster")').length > 0) {
    //             cy.log('visible');
    //             Logger.helper('Click on Fleet group ');
    //             cy.xpath('//div[@class="cluster"]/div').click();
    //         } else {
    //             Logger.helper('Fleet group not available');
    //         }
    //     });
    // }
}
