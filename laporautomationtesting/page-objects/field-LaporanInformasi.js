module.exports = {

    url: 'https://www.lapor.go.id',

    elements: {
        fieldLaporanInformasi: by.xpath("//div[3]/input")
    },

    performfill: function () {

        var selector = page.fieldLaporanInformasi.elements.fieldLaporanInformasi;
        return driver.findElement(selector).sendKeys(shared.id.fieldLaporanInformasi);
    }
};
