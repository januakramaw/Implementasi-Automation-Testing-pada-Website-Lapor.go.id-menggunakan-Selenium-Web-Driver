module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        privacyCheckBox: by.xpath("//input[@id='tos']")
    },
    performClick: function () {
        var selector = page.privacyCheckBox.elements.privacyCheckBox;
        return driver.findElement(selector).click();
    }
}
//div[@class='form-group light-checkbox']
//div[@class='form-group light-checkbox']
//input[@id='tos']


