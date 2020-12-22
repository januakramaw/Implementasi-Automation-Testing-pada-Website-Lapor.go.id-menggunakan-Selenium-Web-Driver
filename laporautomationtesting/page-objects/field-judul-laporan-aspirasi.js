module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        fieldJudulLaporanAspirasi: by.xpath("//input[@placeholder='Ketik Judul Laporan Anda *']")
    },

    performFill: function () {

        var selector = page.fieldJudulLaporanAspirasi.elements.fieldJudulLaporanAspirasi;
        return driver.findElement(selector).sendKeys(shared.id.judulLaporan);
    }
};


