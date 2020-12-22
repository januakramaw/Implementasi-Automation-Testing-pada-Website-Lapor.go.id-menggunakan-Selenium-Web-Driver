module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        // fieldEmail: by.xpath("//input[@id='userSigninLogin']")
        fieldEmailLogin: by.xpath("//*[@id='userSigninLogin']")
    },

    performFill: function () {

        var selector = page.fieldEmailLogin.elements.fieldEmailLogin;
        return driver.findElement(selector).sendKeys(shared.idLogin.email);
    }
}

