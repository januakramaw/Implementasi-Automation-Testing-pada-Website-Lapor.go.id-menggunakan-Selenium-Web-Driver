module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        fieldTanggalLaporan: by.xpath("//input[@id='date_of_incident']")
    },

    performFill: function () {

        var selector = page.fieldTanggalLaporan.elements.fieldTanggalLaporan;
        return driver.findElement(selector).sendKeys(shared.laporan.tanggal);
    }
};
