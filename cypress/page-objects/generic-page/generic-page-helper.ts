import { ElementHelper } from '../../components/element-helper';
import { Logger } from '../../components/logger/logger';
import { GenericPageElement } from './generic-page-element';

const elem = GenericPageElement;

export class GenericPageHelper {
    static clickCreate() {
        Logger.helper('Click Create Button');
        ElementHelper.click(elem.createButton);
    }
}
