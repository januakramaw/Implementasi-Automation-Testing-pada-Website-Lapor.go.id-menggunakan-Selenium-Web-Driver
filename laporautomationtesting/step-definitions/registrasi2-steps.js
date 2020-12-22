module.exports = function () {
    this.Given(/^pengguna mencari halaman daftar$/, function () {
        helpers.loadPage('https://www.lapor.go.id/account/register')
    });
    this.Given(/^pengguna mengisi namaLengkap untuk daftar$/, function () {
        driver.then(function () {
            return page.fieldNamalengkap2.performFill();
        })
    });
    this.Given(/^pengguna mengisi email untuk daftar$/, function () {
        driver.then(function () {
            return page.fieldEmail2.performFill();
        })
    });
    this.Given(/^pengguna mengisi password untuk daftar$/, function () {
        driver.then(function () {
            return page.fieldPassword2.performFill();
        })
    });
    this.Given(/^pengguna mengisi username untuk daftar$/, function () {
        driver.then(function () {
            return page.fieldUsername2.performFill();
        })
    });
    this.Given(/^pengguna mengisi notelp untuk daftar$/, function () {
        driver.then(function () {
            return page.fieldNotelp2.performFill();
        })
    });
    this.Given(/^pengguna mengkonfirmasi password untuk daftar$/, function () {
        driver.then(function () {
            return page.fieldConfpass2.performFill();
        })
    });
    this.Given(/^pengguna menceklist box keamanan$/, function () {
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
    this.When(/^pengguna klik tombol daftar$/, function () {
        driver.then(function () {
            return page.registBtn2.performClick();
        })
    });
    this.Then(/^pengguna diarahkan ke halaman home$/, function () {
        helpers.loadPage('https://www.lapor.go.id')
    });
}