import {Given, Then} from '@wdio/cucumber-framework';
import breedDetails from '../pageobjects/breedDetailsScreen.page';

Given('I am on the breed details page', async function () {
  await breedDetails.isShown(5000);
});

Then('I should see {string} breed title', async function (breedName: string) {
  await breedDetails.breedTitleShown(breedName);
});

Then('I should see breed description', async function () {
  await breedDetails.breedDescriptionShown();
});
