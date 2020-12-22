module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        laporBtn: by.xpath("//button[normalize-space()='LAPOR!']")
    },

    performClick: function () {

        var selector = page.laporBtn.elements.laporBtn;
        return driver.findElement(selector).click();
    }
};
