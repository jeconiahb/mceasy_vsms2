/// <reference types='cypress-xpath' />

import { Logger } from './logger/logger';

export class ElementHelper {
    /**
     * Click a DOM element
     * https://docs.cypress.io/api/commands/click
     * You can also force the action to be performed on the element regardless of whether the element is visible or not
     * https://docs.cypress.io/api/commands/hover#Force-click
     * @param element
     * @param isForce
     */
    static click(element: string, isForce: boolean = false) {
        if (isForce) {
            cy.xpath(element).click({ force: true });
        } else {
            cy.xpath(element).click();
        }
    }

    /**
     * Right click a DOM element
     * https://docs.cypress.io/api/commands/rightclick
     * @param element
     */
    static rightClick(element: string) {
        cy.xpath(element).rightclick();
    }

    /**
     * Double-click a DOM element
     * https://docs.cypress.io/api/commands/dblclick
     * @param element
     */
    static doubleClick(element: string) {
        cy.xpath(element).dblclick();
    }

    /**
     * Simulating mouseover event to get popover to display
     * https://docs.cypress.io/api/commands/hover#Trigger
     * @param element
     */
    static hover(element: string) {
        cy.xpath(element).trigger('mouseover');
    }

    /**
     * Click a DOM element only if it is visible
     * @param element
     */
    static clickIfVisible(element: string) {
        cy.xpath(element).then(($el) => {
            if ($el.is(':visible')) {
                Logger.helper(`Element ${element} is visible, clicking on Element`);
                cy.xpath(element).click();
            } else {
                Logger.helper(`Element ${element} is not visible, nothing is clicked`);
            }
        });
    }
}
