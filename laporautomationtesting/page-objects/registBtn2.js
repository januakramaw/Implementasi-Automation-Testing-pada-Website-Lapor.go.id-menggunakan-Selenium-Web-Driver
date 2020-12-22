module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        registBtn2: by.xpath("//button[normalize-space()='Daftar']")
    },

    performClick: function () {

        var selector = page.registBtn2.elements.registBtn2;
        return driver.findElement(selector).click();
    }
}
