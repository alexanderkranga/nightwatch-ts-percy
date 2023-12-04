import { NightwatchTests, NightwatchBrowser } from "nightwatch"
import { HomePage } from '../../nightwatch/pages/HomePage'

const homeTests: NightwatchTests = {

  beforeEach: (browser: NightwatchBrowser) => {
    browser.window.maximize()
    browser.url(browser.baseUrl)
  },

  afterEach: (browser: NightwatchBrowser) => {
    browser.end()
  },

  'User should be able to see home page': () => {
    let homePage = browser.page.HomePage() as HomePage

    browser.percySnapshot('Snapshot for home page')

    homePage
      .clickOnSignInButton()

    browser.percySnapshot('Sign In page snapshot')
  },

  'User should be able to see home page 2': () => {
    let homePage = browser.page.HomePage() as HomePage

    browser.percySnapshot('Snapshot for home page')

    homePage
      .clickOnSignInButton()

    browser.percySnapshot('Sign In page snapshot')
  }
}

export default homeTests
