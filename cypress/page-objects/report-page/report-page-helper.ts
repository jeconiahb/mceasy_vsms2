import { ElementHelper } from '../../components/element-helper';
import { Logger } from '../../components/logger/logger';
import { TextboxHelper } from '../../components/textbox-helper';
import { VerificationHelper } from '../../components/verification-helper';
import { ReportPageElement } from './report-page-element';
// import { GenericPageElement } from './generic-page-element';

// const elem = GenericPageElement;

export class ReportPageHelper {
    static laporanNav() {
        Logger.helper('Navigate to Laporan Page');
        ElementHelper.click(ReportPageElement.laporanNav);
    }

    static verifyTitle() {
        Logger.helper('Verify Laporan title is displayed');
        VerificationHelper.isVisible(ReportPageElement.pageHeader);
    }

    static verifyPreview() {
        Logger.helper('Verify Pratinjau Laporan is visible');
        VerificationHelper.isVisible(ReportPageElement.tabelPreview);
        cy.wait(10000);
    }

    static clickReportDropdown() {
        Logger.helper('Click Pilih jenis Laporan Dropdown');
        ElementHelper.click(ReportPageElement.pickReport);
    }

    static clickReportDetailFleet() {
        Logger.helper('Click Pilih jenis Laporan Dropdown');
        ElementHelper.click(ReportPageElement.detailRiwayat);
    }

    static search(keyword:string) {
        Logger.helper(`Search for ${keyword}`);
        ElementHelper.click(ReportPageElement.searchTable);
        TextboxHelper.type(ReportPageElement.searchTable, keyword);
    }

    static clearSearch() {
        Logger.helper('Clear Search box');
        TextboxHelper.clear(ReportPageElement.searchTable);
    }

    static clickPilihSemua() {
        Logger.helper('Click Pilih Semua');
        ElementHelper.click(ReportPageElement.detailRiwayatKendaraanElem.allParam());
    }

    static clickFilterPlate() {
        Logger.helper('Click Filter Plate');
        ElementHelper.click(ReportPageElement.detailRiwayatKendaraanElem.filterPlateNum());
    }

    static clickRadio() {
        Logger.helper('Click Radio Button');
        ElementHelper.click(ReportPageElement.detailRiwayatKendaraanElem.radioButtonTable());
    }

    static clickFilterDriver() {
        Logger.helper('Click Filter Driver');
        ElementHelper.click(ReportPageElement.detailRiwayatKendaraanElem.filterDriver());
    }

    static clickAllTable() {
        Logger.helper('Click Check all table');
        ElementHelper.click(ReportPageElement.detailRiwayatKendaraanElem.allTable());
    }

    static clickReportManageFleet() {
        Logger.helper('Click Pilih jenis Laporan Dropdown');
        ElementHelper.click(ReportPageElement.manajemenKendaraan);
    }

    static clickFilterPlateManageFleet() {
        Logger.helper('Click Plate Filter');
        ElementHelper.click(ReportPageElement.manajemenKendaraanElem.filterPlateNum());
    }

    static clickPilihSemuaManageFleet() {
        Logger.helper('Click Pilih Semua');
        ElementHelper.click(ReportPageElement.manajemenKendaraanElem.allParam());
    }

    static clickAllTableManageFleet() {
        Logger.helper('Click Check all table');
        ElementHelper.click(ReportPageElement.manajemenKendaraanElem.allTable());
    }

    static clickReportManageDriver() {
        Logger.helper('Click Pilih jenis Laporan Dropdown');
        ElementHelper.click(ReportPageElement.manajemenDriver);
    }

    static clickFilterDriverManageDriver() {
        Logger.helper('Click Filter Driver');
        ElementHelper.click(ReportPageElement.manajemenPengemudiElem.filterDriver());
    }

    static clickPilihSemuaManageDriver() {
        Logger.helper('Click Pilih Semua');
        ElementHelper.click(ReportPageElement.manajemenPengemudiElem.allParam());
    }

    static clickAllTableManageDriver() {
        Logger.helper('Click Check all table');
        ElementHelper.click(ReportPageElement.manajemenPengemudiElem.allTable());
    }

    static clickReportFleetHistory() {
        Logger.helper('Click Pilih jenis Laporan Dropdown');
        ElementHelper.click(ReportPageElement.riwayatKendaraan);
    }

    static clickFilterPlateFleetH() {
        Logger.helper('Click Filter Plate');
        ElementHelper.click(ReportPageElement.riwayatKendaraanElem.filterPlateNum());
    }

    static clickFilterDriverFleetH() {
        Logger.helper('Click Filter Driver');
        ElementHelper.click(ReportPageElement.riwayatKendaraanElem.filterDriver());
    }

    static clickPilihSemuaFleetH() {
        Logger.helper('Click Pilih Semua');
        ElementHelper.click(ReportPageElement.riwayatKendaraanElem.allParam());
    }

    static clickAllTableFleetH() {
        Logger.helper('Click check all table');
        ElementHelper.click(ReportPageElement.riwayatKendaraanElem.allTable());
    }

    static clickReportFleetDaily() {
        Logger.helper('Click Pilih jenis Laporan Dropdown');
        ElementHelper.click(ReportPageElement.ringkasanKendaraan);
    }

    static clickFilterPlateFleetD() {
        Logger.helper('Click filter Plate');
        ElementHelper.click(ReportPageElement.ringkasanHarianKendaraanElem.filterPlateNum());
    }

    static clickFilterDriverFleetD() {
        Logger.helper('Click filter Driver');
        ElementHelper.click(ReportPageElement.ringkasanHarianKendaraanElem.filterDriver());
    }

    static clickPilihSemuaFleetD() {
        Logger.helper('Click Pilih Semua');
        ElementHelper.click(ReportPageElement.ringkasanHarianKendaraanElem.allParam());
    }

    static clickAllTableFleetD() {
        Logger.helper('Click check all table');
        ElementHelper.click(ReportPageElement.ringkasanHarianKendaraanElem.allTable());
    }

    static clickReportDriverDaily() {
        Logger.helper('Click Pilih jenis Laporan Dropdown');
        ElementHelper.click(ReportPageElement.ringkasanHarianDriver);
    }

    static clickFilterDriverDriverD() {
        Logger.helper('Click filter Driver');
        ElementHelper.click(ReportPageElement.ringkasanharianDriverElem.filterDriver());
    }

    static clickPilihSemuaDriverD() {
        Logger.helper('Click check all table');
        ElementHelper.click(ReportPageElement.ringkasanharianDriverElem.allParam());
    }

    static clickAllTableDriverD() {
        Logger.helper('Click check all table');
        ElementHelper.click(ReportPageElement.ringkasanharianDriverElem.allTable());
    }

    static clickReportParam() {
        Logger.helper('Click Pilih jenis Laporan Dropdown');
        ElementHelper.click(ReportPageElement.paramReport);
    }

    static clickApplyModal(number) {
        Logger.helper('CLik Apply / Terapkan');
        ElementHelper.click(ReportPageElement.applyButtonModal(number));
    }

    // static clickApplyModalDetailFleetH() {
    //     Logger.helper('CLik Apply / Terapkan');
    //     ElementHelper.click(ReportPageElement.applyButtonModalDetailFleetH);
    // }

    // static clickApplyModalManageFleet(number) {
    //     Logger.helper('CLik Apply / Terapkan');
    //     ElementHelper.click(ReportPageElement.applyButtonModalManageFleet(number));
    // }

    // static clickApplyModalManageDriver() {
    //     Logger.helper('CLik Apply / Terapkan');
    //     ElementHelper.click(ReportPageElement.applyButtonModalManageDriver);
    // }

    // static clickApplyModalFleetH() {
    //     Logger.helper('CLik Apply / Terapkan');
    //     ElementHelper.click(ReportPageElement.applyButtonModalFleetH);
    // }

    // static clickApplyModalFleetD() {
    //     Logger.helper('CLik Apply / Terapkan');
    //     ElementHelper.click(ReportPageElement.applyButtonModalFleetD);
    // }

    // static clickApplyModalDriverD() {
    //     Logger.helper('CLik Apply / Terapkan');
    //     ElementHelper.click(ReportPageElement.applyButtonModalDriverD);
    // }

    static clickCancelModal(number) {
        Logger.helper('CLik Cancel / Batal');
        ElementHelper.click(ReportPageElement.cancelButtonModal(number));
    }

    // static clickCancelModalDetailFleetH() {
    //     Logger.helper('CLik Cancel / Batal');
    //     ElementHelper.click(ReportPageElement.cancelButtonModalDetailFleetH);
    // }

    // static clickCancelModalManageFleet() {
    //     Logger.helper('CLik Cancel / Batal');
    //     ElementHelper.click(ReportPageElement.cancelButtonModalManageFleet);
    // }

    // static clickCancelModalManageDriver() {
    //     Logger.helper('CLik Cancel / Batal');
    //     ElementHelper.click(ReportPageElement.cancelButtonModalManageDriver);
    // }

    // static clickCancelModalFleetH() {
    //     Logger.helper('CLik Cancel / Batal');
    //     ElementHelper.click(ReportPageElement.cancelButtonModalFleetH);
    // }

    // static clickCancelModalFleetD() {
    //     Logger.helper('CLik Cancel / Batal');
    //     ElementHelper.click(ReportPageElement.cancelButtonModalFleetD);
    // }

    // static clickCancelModalDriverD() {
    //     Logger.helper('CLik Cancel / Batal');
    //     ElementHelper.click(ReportPageElement.cancelButtonModalDriverD);
    // }

    static clickReportPeriod() {
        Logger.helper('CLik Periode Tanggal');
        ElementHelper.click(ReportPageElement.periodReport);
    }

    static click3DaysPeriod() {
        Logger.helper('CLik Periode 3 hari');
        ElementHelper.click(ReportPageElement.threeDays);
    }

    static click7DaysPeriod() {
        Logger.helper('CLik Periode 7 hari');
        ElementHelper.click(ReportPageElement.sevenDays);
    }

    static clickPreviewReport() {
        Logger.helper('CLik Pratinjau Laporan');
        ElementHelper.click(ReportPageElement.previewReport);
    }

    static clickDownload() {
        Logger.helper('Click Unduh');
        ElementHelper.click(ReportPageElement.downloadButton);
    }

    static clickDownloadPDF() {
        Logger.helper('Click Unduh PDF');
        ElementHelper.click(ReportPageElement.downloadPDF);
        cy.wait(5000);
    }

    static clickDownloadExcel() {
        Logger.helper('Click Unduh Excel');
        ElementHelper.click(ReportPageElement.downloadExcel);
        cy.wait(5000);
    }
}
