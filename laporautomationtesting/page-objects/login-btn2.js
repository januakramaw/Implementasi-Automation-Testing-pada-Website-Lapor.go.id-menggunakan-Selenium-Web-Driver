module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        loginBtn2: by.xpath("//button[normalize-space()='Masuk']")
    },

    performClick: function () {

        var selector = page.loginBtn2.elements.loginBtn2;
        return driver.findElement(selector).click();
    }
}