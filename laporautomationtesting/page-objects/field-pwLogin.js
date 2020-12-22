module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        // fieldPw: by.xpath(" //input[@id='userSigninPassword']")
        fieldPwLogin: by.xpath("//*[@id='userSigninPassword']")
    },

    performFill: function () {

        var selector = page.fieldPwLogin.elements.fieldPwLogin;
        return driver.findElement(selector).sendKeys(shared.idLogin.pw);
    }
}


