import { ElementHelper } from '../../components/element-helper';
import { Logger } from '../../components/logger/logger';
import { VerificationHelper } from '../../components/verification-helper';
import { DashboardPageConstant } from './dashboard-page-constant';
import { DashboardPageElement } from './dashboard-page-element';

const constant = new DashboardPageConstant();
const elem = DashboardPageElement;

export class DashboardPageHelper {
    static verifyPage() {
        Logger.helper('Verify Dasbor is Displayed');
        VerificationHelper.isVisible(elem.sideMenuByText(constant.sideMenuByText.dasbor));
    }

    static closePopUpAdIfVisible() {
        Logger.helper('Close Pop Up Ad if visible');
        ElementHelper.clickIfVisible(elem.popUpAd());
    }

    static GoToDasbor() {
        Logger.helper('Click on Dasbor Side Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.dasbor));
    }

    static goToLiveView() {
        Logger.helper('Click on Live View Side Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.liveView));
    }

    static goToPenilaianPengemudi() {
        Logger.helper('Click on Penilaian Pengemudi Side Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.penilaianPengemudi));
    }

    static goToNotifikasi() {
        Logger.helper('Click on Notifikasi Side Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.notifikasi));
    }

    static goToLisensi() {
        Logger.helper('Click on Lisensi Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.lisensi));
    }

    static goToLaporan() {
        Logger.helper('Click on Laporan Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.laporan));
    }

    static goToDataMaster() {
        Logger.helper('Click on Data Master Side Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.dataMaster));
    }

    static goToPelacakanSementara() {
        Logger.helper('Click on Pelacakan Sementara Side Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.pelacakanSementara));
    }

    static goToPengaturan() {
        Logger.helper('Click on Pengaturan Side Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.pengaturan));
    }

    static goToBantuan() {
        Logger.helper('Click on Bantuan Side Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.bantuan));
    }

    static goToKontakKami() {
        Logger.helper('Click on Kontak Kami Side Menu');
        ElementHelper.click(elem.sideMenuByText(constant.sideMenuByText.kontakKami));
    }

    static verifyVehicleStatusesIsVisible() {
        const { vehicleStatus } = constant;

        Logger.helper(`Verify "${vehicleStatus.kendaraanBerjalan}" card is displayed`);
        VerificationHelper.isVisible(elem.vehicleStatusCard(vehicleStatus.kendaraanBerjalan));

        Logger.helper(`Verify "${vehicleStatus.kendaraanDiam}" card is displayed`);
        VerificationHelper.isVisible(elem.vehicleStatusCard(vehicleStatus.kendaraanDiam));

        Logger.helper(`Verify "${vehicleStatus.kendaraanParkir}" card is displayed`);
        VerificationHelper.isVisible(elem.vehicleStatusCard(vehicleStatus.kendaraanParkir));

        Logger.helper(`Verify "${vehicleStatus.kendaraanLuring}" card is displayed`);
        VerificationHelper.isVisible(elem.vehicleStatusCard(vehicleStatus.kendaraanLuring));
    }

    static verifyKendaraanBerjalanCount(count: number) {
        Logger.helper(`Verify "${constant.vehicleStatus.kendaraanBerjalan}" value is equal to "${count}"`);
        VerificationHelper.containValue(elem.vehicleStatusCardValue(constant.vehicleStatus.kendaraanBerjalan), count.toString());
    }

    static verifyKendaraanDiamCount(count: number) {
        Logger.helper(`Verify "${constant.vehicleStatus.kendaraanDiam}" value is equal to "${count}"`);
        VerificationHelper.containValue(elem.vehicleStatusCardValue(constant.vehicleStatus.kendaraanDiam), count.toString());
    }

    static verifyKendaraanParkirCount(count: number) {
        Logger.helper(`Verify "${constant.vehicleStatus.kendaraanParkir}" value is equal to "${count}"`);
        VerificationHelper.containValue(elem.vehicleStatusCardValue(constant.vehicleStatus.kendaraanParkir), count.toString());
    }

    static verifyKendaraanLuringCount(count: number) {
        Logger.helper(`Verify "${constant.vehicleStatus.kendaraanLuring}" value is equal to "${count}"`);
        VerificationHelper.containValue(elem.vehicleStatusCardValue(constant.vehicleStatus.kendaraanLuring), count.toString());
    }
}
