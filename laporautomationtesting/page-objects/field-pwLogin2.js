module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        // fieldPw: by.xpath(" //input[@id='userSigninPassword']")
        fieldPwLogin2: by.xpath("//*[@id='userSigninPassword']")
    },

    performFill: function () {

        var selector = page.fieldPwLogin2.elements.fieldPwLogin2;
        return driver.findElement(selector).sendKeys(shared.idLogin2.pw);
    }
}


