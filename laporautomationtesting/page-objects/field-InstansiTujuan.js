module.exports = {

    url: 'https://www.lapor.go.id',

    elements: {
        fieldInstansiTujuan: by.xpath("//*[@id='select_institution_id-selectized']")
    },

    performfill: function () {
        var selector = page.fieldInstansiTujuan.elements.fieldInstansiTujuan;
        return driver.findElement(selector).sendKeys(shared.id.InstansiTujuan);
    }
};
