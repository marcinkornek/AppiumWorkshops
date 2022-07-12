import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  constructor() {
    super('SecureTestID');
  }
}

export default new SecurePage();
