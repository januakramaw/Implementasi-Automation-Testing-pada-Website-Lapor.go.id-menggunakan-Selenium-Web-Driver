module.exports = {

    url: 'https://www.lapor.go.id',

    elements: {
        AnonimBtn: by.xpath("//*[@id='complaint-box']/div/div/div[1]/form/div[10]/div/div[2]/div[1]/label")
    },

    performClick: function () {

        var selector = page.AnonimBtn.elements.AnonimBtn;
        return driver.findElement(selector).click();
        
    }
};
