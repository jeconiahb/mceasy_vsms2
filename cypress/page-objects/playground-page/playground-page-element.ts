/// <reference types='cypress-xpath' />

export class PlaygroundPageElement {
    static get nameTextbox() {
        return '//input[@name="customer_name"]';
    }

    static get taxiTypeRadioButton() {
        const container = '//fieldset[contains(*, "Which taxi do you require?")]';
        return {
            get car() {
                return `${container}//input[@value="car"]`;
                // an alternative xpath could be: '//input[@name='taxi'][@value="car"]'
            },
            get van() {
                return `${container}//input[@value="taxi"]`;
            },
            get tukTuk() {
                return `${container}//input[@value="tuktuk"]`;
            },
        };
    }

    static get extrasCheckbox() {
        const extrasSection = '//fieldset[.//legend[text() = "Extras"]]';
        return {
            itemByIndex(indexNo: number) {
                return `${extrasSection}//p[${indexNo}]//input[@type="checkbox"]`;
            },
            itemByValue(value: string) {
                return `${extrasSection}//input[@value="${value}"]`;
            },
        };
    }

    static get employeeTable() {
        return {
            get alanSmithCell() {
                return '//table[@id="employee"]//td[text()="Alan Smith"]';
            },
        };
    }
}
