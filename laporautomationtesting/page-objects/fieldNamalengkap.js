module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldNamalengkap: by.xpath("//*[@id='registerName']")
    },

    performFill: function () {

        var selector = page.fieldNamalengkap.elements.fieldNamalengkap;
        return driver.findElement(selector).sendKeys(shared.id.namalengkap);
    }
};
