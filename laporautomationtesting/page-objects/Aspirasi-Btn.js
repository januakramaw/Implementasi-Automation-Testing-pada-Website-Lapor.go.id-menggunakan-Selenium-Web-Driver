module.exports = {

    url: 'https://www.lapor.go.id',

    elements: {
        AspirasiBtn: by.xpath("//label[2]/span")
    },

    performClick: function () {

        var selector = page.AspirasiBtn.elements.AspirasiBtn;
        return driver.findElement(selector).click();
    }
};
