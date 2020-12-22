module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldEmail2: by.xpath("//*[@id='registerEmail']")
    },

    performFill: function () {

        var selector = page.fieldEmail2.elements.fieldEmail2;
        return driver.findElement(selector).sendKeys(shared.id2.email);
    }
};
