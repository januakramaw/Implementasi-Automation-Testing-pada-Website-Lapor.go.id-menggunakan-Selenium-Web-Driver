module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        pengaduanBtn: by.xpath("//label[1]/span")
    },

    performClick: function () {

        var selector = page.pengaduanBtn.elements.pengaduanBtn;
        return driver.findElement(selector).click();
    }
};
