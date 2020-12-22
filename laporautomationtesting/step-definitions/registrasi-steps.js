module.exports = function () {
    this.Given(/^user browse daftar page$/, function () {
        helpers.loadPage('https://www.lapor.go.id/account/register')
    });
    this.Given(/^user fill namaLengkap to daftar$/, function () {
        driver.then(function () {
            return page.fieldNamalengkap.performFill();
        })
    });
    this.Given(/^user fill email to daftar$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();
        })
    });
    this.Given(/^user fill password to daftar$/, function () {
        driver.then(function () {
            return page.fieldPassword.performFill();
        })
    });
    this.Given(/^user fill username to daftar$/, function () {
        driver.then(function () {
            return page.fieldUsername.performFill();
        })
    });
    this.Given(/^user fill notelp to daftar$/, function () {
        driver.then(function () {
            return page.fieldNotelp.performFill();
        })
    });
    this.Given(/^user confirm password to daftar$/, function () {
        driver.then(function () {
            return page.fieldConfpass.performFill();
        })
    });
    this.Given(/^user ceklist box privacy policy$/, function () {
        // driver.then(function () {
        //     return page.privacyCheckBox.performClick();
        // })
        // driver.then(function () {
        //     return page.privacyCheckBox.performClick();
        // })
        // checkBoxElement = driver.findElement(by.id("tos")).isSelected();
        var Selected = driver.findElement(by.xpath("//input[@id='tos']")).isSelected();
        //driver.findElement(By.xpath("//input[@id='tos']")).click();
        if (Selected == false) {
            checkBoxElement.click();
            // driver.findElement(by.id("tos"));
            // driver.executeScript("arguments[0].click()");
        }
    });
    this.When(/^user click daftar button$/, function () {
        driver.then(function () {
            return page.registBtn.performClick();
        })
    });
    this.Then(/^user can see home page$/, function () {
        helpers.loadPage('https://www.lapor.go.id')
    });
}

