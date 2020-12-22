module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldUsername: by.xpath("//*[@id='registerUsername']")
    },

    performFill: function () {

        var selector = page.fieldUsername.elements.fieldUsername;
        return driver.findElement(selector).sendKeys(shared.id.uname);
    }
};
