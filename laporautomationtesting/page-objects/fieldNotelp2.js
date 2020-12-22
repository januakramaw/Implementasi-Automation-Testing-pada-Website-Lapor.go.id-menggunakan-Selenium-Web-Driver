module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldNotelp2: by.xpath("//*[@id='registerPhone']")
    },

    performFill: function () {

        var selector = page.fieldNotelp2.elements.fieldNotelp2;
        return driver.findElement(selector).sendKeys(shared.id2.notelp);
    }
};
