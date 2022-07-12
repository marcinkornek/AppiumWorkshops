import {getPlatformSelector, isIos, isMobile} from '../utils/DriverUtils';

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  private selector?: string;

  constructor(selector?: string) {
    this.selector = selector;
  }

  getElement = (testID: string) => {
    return $(getPlatformSelector(testID));
  };

  getElementByExactText(text: string, index = '1') {
    if (!isMobile) {
      return $(`(//*[text()="${text}"])[${index}]`);
    }
    return isIos
      ? $(
          `(//*[@name="${text}" or @value="${text}" or @label="${text}" and @accessible='true'])[${index}]`,
        )
      : $(`(//*[@text="${text}"])[${index}]`);
  }

  getElementByPartialText = (text: string, index = '1') => {
    if (!isMobile) {
      return $(`(//*[contains(text(),"${text}")])[${index}]`);
    }
    return isIos
      ? $(
          `(//*[contains(@name,"${text}") or contains(@value,"${text}") or contains(@label,"${text}") and @accessible='true'])[${index}]`,
        )
      : $(`(//*[contains(@text,"${text}")])[${index}]`);
  };

  isShown = async (timeout = 10000): Promise<boolean> => {
    if (this.selector) {
      const element = await this.getElement(this.selector);
      try {
        await element.waitForDisplayed({timeout});
        return element.isDisplayed();
      } catch (error) {
        console.error(
          `Element not visible even after ${(timeout / 1000).toFixed(1)}s`,
        );
        return false;
      }
    }
    return false;
  };

  waitForIsShown = async (isShown = true): Promise<boolean | void> => {
    if (!this.selector) {
      throw new Error(
        'No selector passed in for BaseScreen - unable to access page-level waitForIsShown',
      );
    }
    return this.getElement(this.selector).waitForDisplayed({reverse: !isShown});
  };
}
