import {Given, Then, When} from '@wdio/cucumber-framework';

Given('I am on the login page', async function () {
  console.log(1234);
  await driver.pause(500);
});

When(
  'I login with {string} and {string}',
  async function (_username: string, _password: string) {
    console.log(5678);
    await driver.pause(500);
  },
);

Then(
  'I should see a flash message saying {string}',
  async function (_message: string) {
    console.log(9000);
    await driver.pause(500);
  },
);
