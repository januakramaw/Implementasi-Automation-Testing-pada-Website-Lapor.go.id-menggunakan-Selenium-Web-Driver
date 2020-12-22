module.exports = function () {

    this.Given(/^user browser log in page$/, function () {
        helpers.loadPage('https://www.lapor.go.id/')
        driver.then(function () {
            return page.signinBtn2.performClick();
        })
    });

    this.Given(/^user fill wrong email field$/, function () {
        driver.then(function () {
            return page.fieldEmailLogin2.performFill();
        })
    });

    this.When(/^user fill wrong password field$/, function () {
        driver.then(function () {
            return page.fieldPwLogin2.performFill();
        })
    });

    this.Then(/^user click button to login$/, function () {
        driver.then(function () {
            return page.loginBtn2.performClick();
        })
    });

}