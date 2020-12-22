module.exports = {

    url: 'https://www.lapor.go.id',

    elements: {
        fieldJudulLaporanInformasi: by.xpath("//div[3]/input")
    },

    performFill: function () {

        var selector = page.fieldJudulLaporanInformasi.elements.fieldJudulLaporanInformasi;
        return driver.findElement(selector).sendKeys(shared.id.fieldJudulLaporanInformasi);
    }
};
