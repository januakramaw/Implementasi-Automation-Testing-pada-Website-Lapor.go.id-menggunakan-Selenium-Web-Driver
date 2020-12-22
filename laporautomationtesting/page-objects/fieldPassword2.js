module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldPassword2: by.xpath("//*[@id='registerPassword']")
    },

    performFill: function () {

        var selector = page.fieldPassword2.elements.fieldPassword2;
        return driver.findElement(selector).sendKeys(shared.id2.pw);
    }
};
