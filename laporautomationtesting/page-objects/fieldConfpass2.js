module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldConfpass2: by.xpath("//*//*[@id='password_confirmation']")
    },

    performFill: function () {

        var selector = page.fieldConfpass2.elements.fieldConfpass2;
        return driver.findElement(selector).sendKeys(shared.id2.cpw);
    }
};
