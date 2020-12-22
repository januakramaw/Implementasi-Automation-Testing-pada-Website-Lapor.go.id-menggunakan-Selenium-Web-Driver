module.exports = function () {

    this.Given(/^user browse signin page$/, function () {
        helpers.loadPage('https://www.lapor.go.id/')
        driver.then(function () {
            return page.signinBtn.performClick();

        })
    });

    this.Given(/^user fill email field$/, function () {
        driver.then(function () {
            return page.fieldEmailLogin.performFill();
        })
    });

    this.When(/^user fill password field$/, function () {
        driver.then(function () {
            return page.fieldPwLogin.performFill();
        })
    });

    this.Then(/^user click login button$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();
        })
    });

    // this.Then(/^user can see alert success$/, function() {
    //     helpers.loadPage('https://www.lapor.go.id/')
    //     // return driver.findElement(by.xpath("//div[@class='user-name']"))
    //     //     .then(function(elements){
    //     // //         expect(elements.length).to.equal(0);
    //     //     });     
    // });
}