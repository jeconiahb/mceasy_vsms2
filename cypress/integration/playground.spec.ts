import { Logger } from '../components/logger/logger';
import { PlaygroundPageConstant } from '../page-objects/playground-page/playground-page-constant';
import { PlaygroundPageElement } from '../page-objects/playground-page/playground-page-element';
import { PlaygroundPageHelper } from '../page-objects/playground-page/playground-page-helper';

const testGoal = `
This is a playground where you can test out different web elements in our sample site
`;

const constant = new PlaygroundPageConstant();

describe('Playground', () => {
    before('Precondition - Navigate to Site', () => {
        Logger.testGoal(testGoal);
        cy.visit('https://davidgunadi.github.io/elementsPlayground');
    });

    it('Save Variable and Reuse', () => {
        Logger.stepNumber(1);

        // Save variable
        cy.xpath(PlaygroundPageElement.employeeTable.alanSmithCell).then(($el) => {
            const text = $el.text();
            cy.wrap(text).as('elementText');
        });

        // Verify Variable Value
        cy.get('@elementText').then((el) => {
            expect(el).to.equals('Alan Smith');
            expect(el).to.contains('Alan');
        });

        // Type Variable Value into a Textbox
        cy.get('@elementText').then((el) => {
            PlaygroundPageHelper.enterName(el.toString());
        });
    });

    it('Perform checkbox operations', () => {
        Logger.stepNumber(1);
        const elemCheckboxOne = PlaygroundPageElement.extrasCheckbox.itemByIndex(1);
        const elemWheelchair = PlaygroundPageElement.extrasCheckbox.itemByValue(constant.extraCheckbox.wheelchairAccess);
        const elemStockTip = PlaygroundPageElement.extrasCheckbox.itemByValue(constant.extraCheckbox.stockTip);

        Logger.stepAction(`
            - Check the first item in Extras Checkbox
            - Uncheck Wheelchair Access
            - Check Stock Tip`);
        PlaygroundPageHelper.checkCheckboxExtras(elemCheckboxOne);
        PlaygroundPageHelper.checkCheckboxExtras(elemWheelchair, false);
        PlaygroundPageHelper.checkCheckboxExtras(elemStockTip);

        Logger.stepVerification('Verify checkbox statuses as per the step action');
        PlaygroundPageHelper.verifyCheckboxExtras(elemCheckboxOne);
        PlaygroundPageHelper.verifyCheckboxExtras(elemWheelchair, false);
        PlaygroundPageHelper.verifyCheckboxExtras(elemStockTip);
    });
});
