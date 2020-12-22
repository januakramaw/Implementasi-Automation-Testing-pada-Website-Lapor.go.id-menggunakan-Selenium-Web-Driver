module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        fieldKategoriLaporan: by.xpath("//input[@role='textbox']")
    },

    performFill: function () {

        var selector = page.fieldKategoriLaporan.elements.fieldKategoriLaporan;
        return driver.findElement(selector).sendKeys(shared.laporan.kategori);
    }
};
