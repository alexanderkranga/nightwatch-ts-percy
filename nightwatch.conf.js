// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

require('dotenv').config();
const percy = require('@percy/nightwatch');

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test','nightwatch'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ["nightwatch/pages"],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [percy.path],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',

  waitForConditionTimeout : 5000,
  
  webdriver: {
    keep_alive: true,
    timeout_options: {
      timeout: 120000
    }
  },

  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  globals: {},

  test_settings: {
    // will run tests in production environment in Browserstack in Chrome
    prod_remote_chrome: {
      launch_url: 'https://www.browserstack.com',
      skip_testcases_on_fail: false,
      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      },

      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443
      },
      desiredCapabilities: {
        'bstack:options': {
          userName: process.env.BROWSERSTACK_USERNAME,
          accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
          "browserName": "chrome",
          "browserVersion": "latest",
          "os": "Windows",
          "osVersion": "11",
          "seleniumVersion": "4.4.0",
          "resolution": "1920x1080",
        }
      },

      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 60000,
          retry_attempts: 3
        },
        keep_alive: true,
        start_process: false
      }
    }
  }
};
