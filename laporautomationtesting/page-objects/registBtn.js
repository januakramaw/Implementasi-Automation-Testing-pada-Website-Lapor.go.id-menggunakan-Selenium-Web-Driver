module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        registBtn: by.xpath("//button[normalize-space()='Daftar']")
    },

    performClick: function () {

        var selector = page.registBtn.elements.registBtn;
        return driver.findElement(selector).click();
    }
}
