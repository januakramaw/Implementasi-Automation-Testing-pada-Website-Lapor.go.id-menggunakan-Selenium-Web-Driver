module.exports = {

    url: 'https://www.lapor.go.id/',

    elements:{
        loginBtn: by.xpath("//button[normalize-space()='Masuk']")
    },

    performClick: function () {

        var selector = page.loginBtn.elements.loginBtn;
        return driver.findElement(selector).click();
    }
}