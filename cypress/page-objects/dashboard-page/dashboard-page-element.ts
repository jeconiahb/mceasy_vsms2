export class DashboardPageElement {
    static popUpAd() {
        return '//div[contains(@id,"modal-banner")]//i[contains(@class,"icon-outline_close")]';
    }

    static sideMenuByText(text: string) {
        return `//ul[@id="side-menu"]//a[contains(@class,"side-nav-link-ref")]//span[text()="${text}"]`;
    }

    static vehicleStatusCard(vehicleStatus: string) {
        return `//div[contains(@class,"card-body")][.//p[text()="${vehicleStatus}"]]`;
    }

    static vehicleStatusCardValue(vehicleStatus: string) {
        return `//div[contains(@class,"card-body")]//p[text()="${vehicleStatus}"]/following-sibling::h5`;
    }
}
