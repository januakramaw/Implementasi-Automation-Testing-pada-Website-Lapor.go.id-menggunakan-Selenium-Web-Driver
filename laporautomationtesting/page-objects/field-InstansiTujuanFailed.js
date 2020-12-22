module.exports = {

    url: 'https://www.lapor.go.id',

    elements: {
        InstansiTujuanFailed: by.xpath("//*[@id='select_institution_id-selectized']")
    },

    performfill: function () {
        var selector = page.InstansiTujuanFailed.elements.InstansiTujuanFailed;
        return driver.findElement(selector).sendKeys(shared.id.InstansiTujuanFailed);
    }
};
