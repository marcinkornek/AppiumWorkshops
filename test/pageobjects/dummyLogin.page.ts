import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  constructor() {
    super('LoginTestID');
  }
}

export default new LoginPage();
