module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        fieldJudulLaporan: by.xpath("//input[@placeholder='Ketik Judul Laporan Anda *']")
    },

    performFill: function () {

        var selector = page.fieldJudulLaporan.elements.fieldJudulLaporan;
        return driver.findElement(selector).sendKeys(shared.laporan.judul);
    }
};
