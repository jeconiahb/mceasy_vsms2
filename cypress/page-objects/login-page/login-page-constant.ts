export class LoginPageConstant {
    readonly url = '';

    readonly invalidLoginMessage = 'These credentials do not match our records.';

    validCredentials = Object.freeze({
        username: 'mceasy-demo@vsms.co.id',
        password: 'Mc34syD3m0',
    });

    invalidCredentials = Object.freeze({
        username: 'adminwrong@themesbrand.com',
        password: '12345',
    });
}
