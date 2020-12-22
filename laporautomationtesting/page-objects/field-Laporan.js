module.exports = {

    url: 'https://www.lapor.go.id',

    elements: {
        fieldLaporan: by.xpath("//textarea")
    },

    performfill: function () {
        var selector = page.fieldLaporan.elements.fieldLaporan;
        return driver.findElement(selector).sendKeys(shared.id.Laporan);
    }
};
