import { PageObjectModel, EnhancedPageObject } from 'nightwatch'

const homePageCommands = {
    clickOnSignInButton(this: HomePage) {
        return this.assert.visible('@signInButton').click('@signInButton')
    }
}

const homePage = {
    commands: [homePageCommands],
    elements: {
        signInButton: {
            selector: '//*[@id="primary-menu-container"]/div[2]/div[1]/a/span',
            locateStrategy: 'xpath'
        }
    }
} satisfies PageObjectModel;

export interface HomePage extends EnhancedPageObject<typeof homePageCommands, typeof homePage.elements> {}

export default homePage;


