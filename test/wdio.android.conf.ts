import * as path from 'path';

import {config as sharedConfig} from './wdio.mobile.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  capabilities: [
    {
      'appium:app': path.join(
        process.cwd(),
        './android/app/build/outputs/apk/release/app-release.apk', // Remember to build RELEASE app before running tests
      ),
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Pixel_4_API_30', // Pass name of your emulator/device
      'appium:newCommandTimeout': 2400,
      'appium:noReset': false,
      'appium:orientation': 'PORTRAIT',
      'appium:platformVersion': '11',
      maxInstances: 1,
      platformName: 'Android',
    },
  ],
};
