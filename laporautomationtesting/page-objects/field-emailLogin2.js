module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        // fieldEmail: by.xpath("//input[@id='userSigninLogin']")
        fieldEmailLogin2: by.xpath("//*[@id='userSigninLogin']")
    },

    performFill: function () {

        var selector = page.fieldEmailLogin2.elements.fieldEmailLogin2;
        return driver.findElement(selector).sendKeys(shared.idLogin2.email);
    }
}

