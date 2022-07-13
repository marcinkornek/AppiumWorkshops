import {breedDetailsScreenIDs} from '../../src/utils/testIDs';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BreedDetailsScreen extends Page {
  constructor() {
    super(breedDetailsScreenIDs.breedDetails);
  }

  // Selectors
  private get breedDescription() {
    return this.getElement(breedDetailsScreenIDs.breedDescription);
  }

  private get breedTitle() {
    return this.getElement(breedDetailsScreenIDs.breedTitle);
  }

  // Actions
  async breedTitleShown(breedName: string) {
    const breedTitleText = await this.breedTitle.getText();
    expect(breedTitleText).toEqual(breedName);
  }

  async breedDescriptionShown() {
    await this.breedDescription.waitForDisplayed();
  }
}

export default new BreedDetailsScreen();
