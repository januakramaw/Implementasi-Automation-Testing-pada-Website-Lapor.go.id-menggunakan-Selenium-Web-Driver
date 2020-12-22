module.exports = {

    url: 'https://www.lapor.go.id/#',

    elements: {
        // signinBtn: by.xpath("//a[normalize-space()='Masuk']")
        signinBtn2: by.xpath("/html/body/header/div[2]/div[2]/ul[2]/li/a")
    },

    performClick: function () {

        var selector = page.signinBtn2.elements.signinBtn2;
        return driver.findElement(selector).click();
    }
}