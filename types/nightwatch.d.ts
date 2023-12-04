import 'nightwatch';
import { HomePage } from '../nightwatch/pages/HomePage';
import { SnapshotOptions } from '@percy/nightwatch';

declare module 'nightwatch' {
  interface NightwatchCustomPageObjects {
    homePage(): HomePage;
  }

  interface NightwatchCustomCommands {
    percySnapshot(
      this: NightwatchAPI,
      name?: string,
      options?: SnapshotOptions
    ): this
  }
}