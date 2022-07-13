import {homeScreenIDs} from '../../src/utils/testIDs';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomeScreen extends Page {
  constructor() {
    super(homeScreenIDs.homeScreen);
  }

  // Selectors
  private get breedsList() {
    return this.getElement(homeScreenIDs.breedsList);
  }

  breedTile = (breedName: string) => {
    return this.getElement(`${homeScreenIDs.breedItem}-${breedName}`);
  };

  // Actions
  async breedsListShown() {
    await this.breedsList.waitForDisplayed();
  }

  async clickBreed(breedName: string) {
    await this.breedTile(breedName).click();
  }
}

export default new HomeScreen();
