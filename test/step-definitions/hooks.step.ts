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
