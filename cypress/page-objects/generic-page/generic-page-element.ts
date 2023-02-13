export class GenericPageElement {
    static elementWithText(text: string) {
        return `//*[text()="${text}"]`;
    }

    static get createButton() {
        return '//button[contains(text(),"Create")]';
    }
}
