const detailRiwayatKendaraan = '//h4[normalize-space()="Model Laporan - Detail Riwayat Kendaraan"]';
const manajemenKendaraan = '//h4[normalize-space()="Model Laporan - Manajemen Kendaraan"]';
const manajemenPengemudi = '//h4[normalize-space()="Model Laporan - Manajemen Pengemudi"]';
const riwayatKendaraan = '//h4[normalize-space()="Model Laporan - Riwayat Kendaraan"]';
const ringkasanHarianKendaraan = '//h4[normalize-space()="Model Laporan - Ringkasan Harian Kendaraan"]';
const ringkasanHarianPengemudi = '//h4[normalize-space()="Model Laporan - Ringkasan Harian Pengemudi"]';
const parent = '/../../../../../..';

export class ReportPageElement {
    static get laporanNav() {
        return '//div//a[@href="/report/"]';
    }

    static get pageHeader() {
        return '//h4[normalize-space()="Laporan"]';
    }

    static get pickReport() {
        return '//div[@id="report-label"]//div//div[@class="multiselect__tags"]';
    }

    static get detailRiwayat() {
        return '//span[contains(text(),"Detail Riwayat Kendaraan")]';
    }

    static get manajemenKendaraan() {
        return '//span[contains(text(),"Manajemen Kendaraan")]';
    }

    static get manajemenDriver() {
        return '//span[contains(text(),"Manajemen Pengemudi")]';
    }

    static get riwayatKendaraan() {
        return '(//span[contains(text(),"Riwayat Kendaraan")])[2]';
    }

    static get ringkasanKendaraan() {
        return '//span[contains(text(),"Ringkasan Harian Kendaraan")]';
    }

    static get ringkasanHarianDriver() {
        return '//span[contains(text(),"Ringkasan Harian Pengemudi")]';
    }

    static get paramReport() {
        return '//button[@class="btn mc-btn-input d-inline-block btn-outline-primary"]';
    }

    static get allTableDriver() {
        return '//div[@class="col-md-8""]//input[@value="all""]';
    }

    static cancelButtonModal(number) {
        return `(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Batal"])[${number}]`;
    }

    // static get cancelButtonModalDetailFleetH() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Batal"])[1]';
    // }

    // static get cancelButtonModalManageFleet() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Batal"])[2]';
    // }

    // static get cancelButtonModalManageDriver() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Batal"])[3]';
    // }

    // static get cancelButtonModalFleetH() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Batal"])[4]';
    // }

    // static get cancelButtonModalFleetD() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Batal"])[5]';
    // }

    // static get cancelButtonModalDriverD() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Batal"])[6]';
    // }

    static applyButtonModal(number) {
        return `(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Terapkan"])[${number}]`;
    }

    // static get applyButtonModalDetailFleetH() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Terapkan"])[4]';
    // }

    // static applyButtonModalManageFleet() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Terapkan"])[2]';
    // }

    // static get applyButtonModalManageDriver() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Terapkan"])[1]';
    // }

    // static get applyButtonModalFleetH() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Terapkan"])[3]';
    // }

    // static get applyButtonModalFleetD() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Terapkan"])[5]';
    // }

    // static get applyButtonModalDriverD() {
    //     return '(//footer[contains(@id, "___BV_modal_footer_")]//button[@type="button"][normalize-space()="Terapkan"])[6]';
    // }

    static get periodReport() {
        return '//input[@placeholder="Periode Laporan"]';
    }

    static get threeDays() {
        return '//button[normalize-space()="3 Hari Terakhir"]';
    }

    static get sevenDays() {
        return '//button[normalize-space()="7 Hari Terakhir"]';
    }

    static get selectInterval() {
        return '//div[@id="interval-label"]//div//div[@class="multiselect__tags"]';
    }

    static get previewReport() {
        return '//button[normalize-space()="Pratinjau Laporan"]';
    }

    static get downloadButton() {
        return '//button[@id="unduh-dropdown__BV_toggle_"]';
    }

    static get downloadPDF() {
        return '//a[normalize-space()="Unduh Tabel PDF"]';
    }

    static get downloadExcel() {
        return '//a[normalize-space()="Unduh Tabel Excel"]';
    }

    static get searchTable() {
        return '(//input[@type="search"][contains(@placeholder,"Cari...")])[2]';
    }

    static get titlePreview() {
        return '//h5[normalize-space()="Pratinjau Laporan"]';
    }

    static get tabelPreview() {
        return '(//th)[1]';
    }

    static get detailRiwayatKendaraanElem() {
        return {
            filterPlateNum() {
                return `(${detailRiwayatKendaraan}${parent}//label[normalize-space()="Plat Nomor"]/../../button)[3]`;
            },
            filterDriver() {
                return `(${detailRiwayatKendaraan}${parent}//label[normalize-space()="Pengemudi Utama"]/../../button)[2]`;
            },
            allParam() {
                return `(${detailRiwayatKendaraan}${parent}//label[@for='check-fleet'][normalize-space()='Pilih Semua']/..//input["@id=check-fleet"])[4]`;
            },
            allTable() {
                return `${detailRiwayatKendaraan}/../..//div[@class="col-md-8"]//input[@value="all"]`;
            },
            radioButtonTable() {
                return '//input [@type="radio"][contains(@id, "__BVID__")]';
            },
        };
    }

    static get manajemenKendaraanElem() {
        return {
            filterPlateNum() {
                return `(${manajemenKendaraan}${parent}//label[normalize-space()="Plat Nomor"]/../../button)[1]`;
            },
            allParam() {
                return `(${manajemenKendaraan}${parent}//label[@for='check-fleet'][normalize-space()='Pilih Semua']/..//input["@id=check-fleet"])[2]`;
            },
            allTable() {
                return `(${manajemenKendaraan}/../..//div[@class="col-md-8"]//input[@value="all"])[1]`;
            },
        };
    }

    static get manajemenPengemudiElem() {
        return {
            filterDriver() {
                return `(${manajemenPengemudi}${parent}//label[normalize-space()="Pengemudi"]/../../button)[1]`;
            },
            allParam() {
                return `(${manajemenPengemudi}${parent}//label[@for='check-fleet'][normalize-space()='Pilih Semua']/..//input["@id=check-fleet"])[1]`;
            },
            allTable() {
                return `${manajemenPengemudi}/../..//div[@class="col-md-8"]//input[@value="all"]`;
            },
        };
    }

    static get riwayatKendaraanElem() {
        return {
            filterPlateNum() {
                return `(${riwayatKendaraan}${parent}//label[normalize-space()="Plat Nomor"]/../../button)[2]`;
            },
            filterDriver() {
                return `(${riwayatKendaraan}${parent}//label[normalize-space()="Pengemudi Utama"]/../../button)[1]`;
            },
            allParam() {
                return `(${riwayatKendaraan}${parent}//label[@for='check-fleet'][normalize-space()='Pilih Semua']/..//input["@id=check-fleet"])[3]`;
            },
            allTable() {
                return `${riwayatKendaraan}/../..//div[@class="col-md-8"]//input[@value="all"]`;
            },
        };
    }

    static get ringkasanHarianKendaraanElem() {
        return {
            filterPlateNum() {
                return `(${ringkasanHarianKendaraan}${parent}//label[normalize-space()="Plat Nomor"]/../../button)[4]`;
            },
            filterDriver() {
                return `${ringkasanHarianKendaraan}${parent}//label[normalize-space()="Pengemudi Utama"]/../../button[1]`;
            },
            allParam() {
                return `(${ringkasanHarianKendaraan}${parent}//label[@for='check-fleet'][normalize-space()='Pilih Semua']/..//input["@id=check-fleet"])[5]`;
            },
            allTable() {
                return `${ringkasanHarianKendaraan}/../..//div[@class="col-md-8"]//input[@value="all"]`;
            },
        };
    }

    static get ringkasanharianDriverElem() {
        return {
            filterDriver() {
                return `(${ringkasanHarianPengemudi}${parent}//label[normalize-space()="Pengemudi"]/../../button)[2]`;
            },
            allParam() {
                return `(${ringkasanHarianPengemudi}${parent}//label[@for='check-fleet'][normalize-space()='Pilih Semua']/..//input["@id=check-fleet"])[6]`;
            },
            allTable() {
                return `${ringkasanHarianPengemudi}/../..//div[@class="col-md-8"]//input[@value="all"]`;
            },
        };
    }
}
