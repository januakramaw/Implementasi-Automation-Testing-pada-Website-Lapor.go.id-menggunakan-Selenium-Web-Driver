
module.exports = {

    url: 'https://www.lapor.go.id',

    elements: {
        fieldAsalPelapor: by.xpath("//*[@id='location_id-selectized']")
    },

    performfill: function () {
        var selector = page.fieldAsalPelapor.elements.fieldAsalPelapor;
        return driver.findElement(selector).sendKeys(shared.id.AsalPelapor);
    }
};
