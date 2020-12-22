module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fieldUsername2: by.xpath("//*[@id='registerUsername']")
    },

    performFill: function () {

        var selector = page.fieldUsername2.elements.fieldUsername2;
        return driver.findElement(selector).sendKeys(shared.id2.uname);
    }
};
