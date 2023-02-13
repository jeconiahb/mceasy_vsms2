export class LiveViewPageElement {
    static vehicleStatus(status: string) {
        return `//div[@aria-hidden="false"]//button[contains(@class,"mc-sidebar-liveview__filter-btn")][normalize-space()="${status}"]`;
    }
}
