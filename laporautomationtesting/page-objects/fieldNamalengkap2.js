module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldNamalengkap2: by.xpath("//*[@id='registerName']")
    },

    performFill: function () {

        var selector = page.fieldNamalengkap2.elements.fieldNamalengkap2;
        return driver.findElement(selector).sendKeys(shared.id2.namalengkap);
    }
};
