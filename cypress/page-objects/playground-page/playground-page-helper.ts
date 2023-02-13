import { CheckboxHelper } from '../../components/checkbox-helper';
import { Logger } from '../../components/logger/logger';
import { RadioHelper } from '../../components/radio-helper';
import { TextboxHelper } from '../../components/textbox-helper';
import { PlaygroundPageElement } from './playground-page-element';

export class PlaygroundPageHelper {
    static enterName(name: string, toClear: boolean = true) {
        Logger.helper(`Enter the value "${name}" into the name textbox`);
        TextboxHelper.type(PlaygroundPageElement.nameTextbox, name, toClear);
    }

    static verifyName(name: string, exactMatch: boolean = true) {
        Logger.helper(`Verify name textbox has the value "${name}"`);
        TextboxHelper.verifyTextboxValue(PlaygroundPageElement.nameTextbox, name, exactMatch);
    }

    static selectRadioCar() {
        Logger.helper('Select Car radio button in Taxi Section');
        RadioHelper.check(PlaygroundPageElement.taxiTypeRadioButton.car);
    }

    static selectRadioVan() {
        Logger.helper('Select Van radio button in Taxi Section');
        RadioHelper.check(PlaygroundPageElement.taxiTypeRadioButton.van);
    }

    static selectRadioTukTuk() {
        Logger.helper('Select TukTuk radio button in Taxi Section');
        RadioHelper.check(PlaygroundPageElement.taxiTypeRadioButton.tukTuk);
    }

    static checkCheckboxExtras(checkboxElement: string, toCheck: boolean = true) {
        Logger.helper(`Set "${checkboxElement}" checkbox from Extras checkbox to ${toCheck}`);
        CheckboxHelper.check(checkboxElement, toCheck);
    }

    static verifyCheckboxExtras(checkboxElement: string, isChecked: boolean = true) {
        Logger.helper(`Verify "${checkboxElement}" element check status is "${isChecked}"`);
        CheckboxHelper.verifyChecked(checkboxElement, isChecked);
    }
}
