module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldNotelp: by.xpath("//*[@id='registerPhone']")
    },

    performFill: function () {

        var selector = page.fieldNotelp.elements.fieldNotelp;
        return driver.findElement(selector).sendKeys(shared.id.notelp);
    }
};
