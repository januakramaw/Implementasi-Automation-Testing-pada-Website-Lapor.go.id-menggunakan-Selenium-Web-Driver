module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldEmail: by.xpath("//*[@id='registerEmail']")
    },

    performFill: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};
