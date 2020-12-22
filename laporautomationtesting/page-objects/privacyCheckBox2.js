module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        privacyCheckBox2: by.xpath("//input[@id='tos']")
    },
    performClick: function () {
        var selector = page.privacyCheckBox2.elements.privacyCheckBox2;
        return driver.findElement(selector).isSelected();
    }
}