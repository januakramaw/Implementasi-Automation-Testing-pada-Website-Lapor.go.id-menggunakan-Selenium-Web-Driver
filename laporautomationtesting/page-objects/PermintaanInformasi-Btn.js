module.exports = {

    url: 'https://www.lapor.go.id',

    elements: {
        PermintaanInformasiBtn: by.xpath("//label[3]/span")
    },

    performClick: function () {

        var selector = page.PermintaanInformasiBtn.elements.PermintaanInformasiBtn;
        return driver.findElement(selector).click();
    }
};