import * as path from 'path';

import {config as sharedConfig} from './wdio.mobile.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  capabilities: [
    {
      'appium:app': path.join(
        process.cwd(),
        './ios/build/Build/Products/Release-iphonesimulator/AppiumWorkshop.app', // Remember to build RELEASE app before running tests (create shared Release ios scheme in XCode)
      ),
      'appium:automationName': 'XCUITest',
      'appium:deviceName': 'iPhone 8', // Pass name of your emulator/device
      'appium:newCommandTimeout': 240,
      'appium:noReset': false,
      'appium:orientation': 'PORTRAIT',
      'appium:platformVersion': '14.5',
      maxInstances: 1,
      platformName: 'iOS',
    },
  ],
};
