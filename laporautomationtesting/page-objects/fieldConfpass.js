module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldConfpass: by.xpath("//*//*[@id='password_confirmation']")
    },

    performFill: function () {

        var selector = page.fieldConfpass.elements.fieldConfpass;
        return driver.findElement(selector).sendKeys(shared.id.cpw);
    }
};
