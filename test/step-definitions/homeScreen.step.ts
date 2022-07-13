import {Given, When} from '@wdio/cucumber-framework';
import homeScreen from '../pageobjects/homeScreen.page';

Given('I am on the home page', async function () {
  await homeScreen.isShown(5000);
});

Given('I see breeds list', async function () {
  await homeScreen.breedsListShown();
});

When('I click {string} breed tile', async function (breedName: string) {
  await homeScreen.clickBreed(breedName);
});
