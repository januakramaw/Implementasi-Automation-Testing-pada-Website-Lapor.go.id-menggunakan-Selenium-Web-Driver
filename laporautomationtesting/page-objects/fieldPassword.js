module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldPassword: by.xpath("//*[@id='registerPassword']")
    },

    performFill: function () {

        var selector = page.fieldPassword.elements.fieldPassword;
        return driver.findElement(selector).sendKeys(shared.id.pw);
    }
};
