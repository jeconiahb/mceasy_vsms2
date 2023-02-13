// const constant = new LoginPageConstant();

export class LoginPageElement {
    static get credentials() {
        return {
            get usernameTextbox() {
                return '//input[@placeholder="Email"]';
            },
            get passwordTextbox() {
                return '//input[@placeholder="Kata Sandi"]';
            },
        };
    }

    static get loginButton() {
        return '//button[text()="Masuk"]';
    }

    static get invalidLoginMessage() {
        return '//div[@role="alert"]';
    }
}
