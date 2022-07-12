# WebdriverIO + Appium + Cucumber setup

## Run webdriverio config bootstrap

```sh
npx wdio config
```

This will prompt some questions regarding the setup, you should answer like this:

```sh
? Where is your automation backend located? On my local machine
? Which framework do you want to use? cucumber
? Do you want to use a compiler? TypeScript (https://www.typescriptlang.org/)
? Where are your feature files located? ./test/features/**/*.feature
? Where are your step definitions located? ./test/step-definitions/*.step.ts
? Do you want WebdriverIO to autogenerate some test files? Yes
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? ./test/pageobjects/**/*.ts
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup? <no-plugin-should-be-selected>
? Do you want to add a service to your test setup? <no-service-should-be-selected>
? What is the base url? http://localhost:8080
? Do you want me to run `npm install` Yes
```

This will install following packages:

```sh
Installing wdio packages:
- @wdio/local-runner
- @wdio/cucumber-framework
- @wdio/spec-reporter
```

After the installation, you should have following structure created:

```
| test
| ---- | features |
| ---- | ---- | `<dummy-feature>`
| ---- | pageobjects |
| ---- | ---- | page.ts
| ---- | ---- | `<dummy-pageobjects-files>`
| ---- | step-definitions |
| ---- | ---- | `<dummy-step-definition-files>`
| ---- | tsconfig.json
| ---- | wdio.conf.ts
```

After finishing this guide and checking that everything is working, you can remove `dummy` files

## Add rest of dependencies

```sh
yarn add -D @wdio/cli @wdio/types @wdio/appium-service appium chromedriver ts-node wdio-chromedriver-service webdriverio
```

## Modify tsconfig.json

- add additional type definitions in `<root>/tsconfig.json`

```json
{
  "compilerOptions": {
    //...
    "types": [
      "node",
      "webdriverio/async",
      "@wdio/cucumber-framework"
    ]
    //...
  }
}
```

- exclude `**/*.spec.ts` from `<root>/tsconfig.json`

```json
{
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js",
    "**/*.spec.ts"
  ]
}
```

- delete `<root>/test/tsconfig.json`

- change tsconfig configuration in `<root>/test/wdio.conf.ts`

Use tsconfig from root directory

```diff
+ import * as path from 'path';

export const config: Options.TestRunner = {
  //...
  autoCompileOpts: {
    autoCompile: true,
    // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
    // for all available options
    tsNodeOpts: {
      transpileOnly: true,
-      project: 'test/tsconfig.json',
+      project: path.resolve(__dirname, '..', 'tsconfig.json'),
    },
    // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
    // do please make sure "tsconfig-paths" is installed as dependency
    // tsConfigPathsOpts: {
    //     baseUrl: './'
    // }
  },
  //...
};
```

## Add WebdriverIO configs for all platforms

- add shared mobile config

Create `<root>/test/wdio.mobile.conf.ts`

```ts
import {config as sharedConfig} from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  port: 4723,
  path: '/wd/hub/',
  services: (sharedConfig?.services ? sharedConfig.services : []).concat([
    [
      'appium',
      {
        args: {
          // This is needed to tell Appium that we can execute local ADB commands
          // and to automatically download the latest version of ChromeDriver
          relaxedSecurity: true,
        },
        // This will use the globally installed version of Appium
        command: 'appium',
      },
    ],
  ]),
};
```

- add android config

Create `<root>/test/wdio.android.conf.ts`

```ts
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
```

- add ios config

Create `<root>/test/wdio.ios.conf.ts`

```ts
import * as path from 'path';

import {config as sharedConfig} from './wdio.mobile.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  capabilities: [
    {
      'appium:app': path.join(
        process.cwd(),
        './ios/build/Build/Products/Release-iphonesimulator/AppiumWorkshop.app', // Remember to build RELEASE app before running tests (create shared Release ios scheme in XCode, if it's not already created)
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
```

- add web config

Create `<root>/test/wdio.web.conf.ts`

```ts
import 'webdriverio';
import {config as sharedConfig} from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  runner: 'local',
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 5,
      //
      browserName: 'chrome',
      acceptInsecureCerts: true,
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
      'goog:chromeOptions': {
        args: ['--incognito'],
      },
      platformName: 'web',
    },
  ],
};
```

Create `<root>/test/wdio.web.headless.conf.ts`

```ts
import 'webdriverio';
import {config as sharedConfig} from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  runner: 'local',
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 5,
      //
      browserName: 'chrome',
      acceptInsecureCerts: true,
      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
      'goog:chromeOptions': {
        args: ['--incognito'],
      },
      'wdio:devtoolsOptions': {
        headless: true,
      },
      platformName: 'web',
    },
  ],
};
```

- add test scripts to `<root>/package.json`

```json
{
  "scripts": {
    //...
    "test-e2e:android": "wdio run ./test/wdio.android.conf.ts",
    "test-e2e:android:build": "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..",
    "test-e2e:ios": "wdio run ./test/wdio.ios.conf.ts",
    "test-e2e:ios:build": "xcodebuild -workspace ios/AppiumWorkshop.xcworkspace -scheme AppiumWorkshopRelease -sdk iphonesimulator -derivedDataPath ios/build",
    "test-e2e:web": "wdio run ./test/wdio.web.conf.ts",
    "test-e2e:web:headless": "wdio run ./test/wdio.web.headless.conf.ts",
    //...
  },
}
```

## Create test utils & hooks

- Create `<root>/test/utils/DriverUtils.ts`

```ts
import {DesiredCapabilities} from '@wdio/types/build/Capabilities';

const browserName = (driver.capabilities as DesiredCapabilities).browserName;
export const isIos = driver.isIOS;
export const isAndroid = driver.isAndroid;
export const isMobileBrowser =
  (driver.isAndroid || driver.isIOS) && !!browserName;
export const isSafari = isMobileBrowser && browserName === 'safari';
export const isChrome = isMobileBrowser && browserName === 'chrome';
export const isMobile =
  (driver.isAndroid && !isChrome) || (driver.isIOS && !isSafari);
export const isDesktopWeb = !isMobileBrowser && !isMobile;

export const getPlatformSelector = (testID: string) => {
  if (!isMobile) {
    return `[data-testid="${testID}"]`;
  }

  // xPath locator for Android isn't ideal, but `id` selector strategy does not seem to work as expected
  return driver.isIOS
    ? `~${testID}`
    : `//*[@resource-id="${testID}" or @content-desc="${testID}"]`;
};

```

These utils will make it easier to write platform-specific test code & locate displayed elements with the same API on each platform

- Create `<root>/test/step-definitions/hooks.step.ts`

```ts
import {After, Before} from '@wdio/cucumber-framework';
import {isAndroid, isIos} from '../utils/DriverUtils';

/**
 * Global before & after hooks
 *
 * On mobile launches and terminates app between each scenario
 */

Before(async function () {
  if (isAndroid) {
    // If you have different app/bundle id on different platforms, remember to change it here
    await driver.activateApp('com.appiumworkshop');
  } else if (isIos) {
    await driver.activateApp('org.reactjs.native.example.AppiumWorkshop');
  } else {
    await driver.url('/');
  }
});

After(async function () {
  if (isAndroid) {
    // If you have different app/bundle id on different platforms, remember to change it here
    await driver.terminateApp('com.appiumworkshop');
  } else if (isIos) {
    await driver.terminateApp('org.reactjs.native.example.AppiumWorkshop');
  }
});
```

Those hooks will take care of opening/closing app between test suites

## Create base methods & selectors

Modify `<root>/test/pageobjects/Page.ts`

```ts
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
      return $(`(//*[text()="${text}"])[${index}]`)
    }
    return isIos
      ? $(
          `(//*[@name="${text}" or @value="${text}" or @label="${text}" and @accessible='true'])[${index}]`,
        )
      : $(`(//*[@text="${text}"])[${index}]`)
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
```

These methods are helpers to locate elements based on testID or text, also there are assert helpers for detecting if element is visible on the screen
