module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        fieldIsiLaporan: by.xpath("//textarea[@placeholder='Ketik Isi Laporan Anda *']")
    },

    performFill: function () {

        var selector = page.fieldIsiLaporan.elements.fieldIsiLaporan;
        return driver.findElement(selector).sendKeys(shared.laporan.isi);
    }
};
