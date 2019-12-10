const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); 

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://demo.1crmcloud.com/login.php');
    const username = By.name('user_name');
    const password = By.name('user_password');
    await driver.findElement(username).sendKeys('admin');
    await driver.findElement(password).sendKeys('admin'.Key.ENTER);
    
    const dash = By.className('meta-profile');
    await driver.sleep(100000);
    await driver.findElement(dash).then(res => {
        res.click();
    });
} 
example();

