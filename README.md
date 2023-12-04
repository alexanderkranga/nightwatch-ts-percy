# nightwatch-ts-percy

1. Run `npm i`
1. Put your browserstack and percy credentials in .env file
1. Run `test-percy` npm task

# Example log with failures:
```

nightwatch@1.0.0 test-percy
> percy exec --verbose --parallel -- nightwatch test/**/*.ts --env prod_remote_chrome && percy build:finalize

[percy:config] Config file not found (0ms)
[percy:client] Creating a new build... (12ms)
[percy:env] Detected ci as null (0ms)
[percy:env] Detected commit as null (0ms)
[percy:env] Detected branch as null (0ms)
[percy:env] Detected git as {"sha":"75a19e07c3f2002246c57a313a0f77890a69dde9","branch":"main\n","message":"Initial commit","authorName":"Alexander Cranga","authorEmail":"alexander.kranga@gmail.com","committedAt":"2023-12-04 03:21:06 -0800","committerName":"GitHub","committerEmail":"noreply@github.com"} (26ms)
[percy:env] Detected target as {"commit":null,"branch":null} (0ms)
[percy:env] Detected pullRequest as null (0ms)
[percy:env] Detected parallel as {"total":-1,"nonce":"2"} (0ms)
[percy:env] Detected partial as false (1ms)
[percy:env] Detected info as null (0ms)
[percy:core] Percy has started! (727ms)
[percy:cli:exec] Running "nightwatch test/home/HomeTests.ts --env prod_remote_chrome" (0ms)


[Home/ Home Tests] Test Suite
──────────────────────────────────────────────────────────
- Connecting to hub-cloud.browserstack.com on port 443...

(node:22776) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
ℹ Connected to hub-cloud.browserstack.com on port 443 (18235ms).
  Using: chrome (119.0.6045.106) on WINDOWS.


  Running User should be able to see home page:
───────────────────────────────────────────────────────────────────────────────────────────────────
- Loading url: https://www.browserstack.com

  ℹ Loaded url https://www.browserstack.com in 1588ms
[percy:core:snapshot] --------- (23046ms)
[percy:core:snapshot] Received snapshot: Snapshot for home page (0ms)
[percy:core:snapshot] - url: https://www.browserstack.com/ (0ms)
[percy:core:snapshot] - widths: 375px, 1280px (0ms)
[percy:core:snapshot] - minHeight: 1024px (0ms)
[percy:core:snapshot] - enableJavaScript: false (0ms)
[percy:core:snapshot] - cliEnableJavaScript: true (0ms)
[percy:core:snapshot] - disableShadowDOM: false (0ms)
[percy:core:snapshot] - discovery.allowedHostnames: www.browserstack.com (0ms)
[percy:core:snapshot] - clientInfo: @percy/nightwatch/2.2.0 (0ms)
[percy:core:snapshot] - environmentInfo: nightwatch/3.3.2 (0ms)
[percy:core:snapshot] - domSnapshot: true (0ms)
[percy:core] Snapshot taken: Snapshot for home page (1ms)
[percy:client] Creating snapshot: Snapshot for home page... (0ms)
[percy:client] Finalizing snapshot 1734035916... (273ms)
[percy:core] Encountered an error uploading snapshot: Snapshot for home page (232ms)
[percy:core] Error: Cannot finalize snapshots in app builds. Did you mean to call comparison finalize?
    at handleFinished (file:///Users/alexc/Documents/nightwatch-ts-percy/node_modules/@percy/client/dist/utils.js:186:17)
    at IncomingMessage.<anonymous> (file:///Users/alexc/Documents/nightwatch-ts-percy/node_modules/@percy/client/dist/utils.js:202:27)
    at IncomingMessage.emit (node:events:527:35)
    at endReadableNT (node:internal/streams/readable:1589:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) (0ms)
  ✔ Testing if element <Element [name=@signInButton]> is visible (895ms)
[percy:core:snapshot] --------- (5726ms)
[percy:core:snapshot] Received snapshot: Sign In page snapshot (0ms)
[percy:core:snapshot] - url: https://www.browserstack.com/users/sign_in (0ms)
[percy:core:snapshot] - widths: 375px, 1280px (0ms)
[percy:core:snapshot] - minHeight: 1024px (0ms)
[percy:core:snapshot] - enableJavaScript: false (0ms)
[percy:core:snapshot] - cliEnableJavaScript: true (0ms)
[percy:core:snapshot] - disableShadowDOM: false (0ms)
[percy:core:snapshot] - discovery.allowedHostnames: www.browserstack.com (0ms)
[percy:core:snapshot] - clientInfo: @percy/nightwatch/2.2.0 (0ms)
[percy:core:snapshot] - environmentInfo: nightwatch/3.3.2 (0ms)
[percy:core:snapshot] - domSnapshot: true (0ms)
[percy:core] Snapshot taken: Sign In page snapshot (0ms)
[percy:client] Creating snapshot: Sign In page snapshot... (0ms)
[percy:client] Finalizing snapshot 1734035966... (300ms)
[percy:core] Encountered an error uploading snapshot: Sign In page snapshot (245ms)
[percy:core] Error: Cannot finalize snapshots in app builds. Did you mean to call comparison finalize?
    at handleFinished (file:///Users/alexc/Documents/nightwatch-ts-percy/node_modules/@percy/client/dist/utils.js:186:17)
    at IncomingMessage.<anonymous> (file:///Users/alexc/Documents/nightwatch-ts-percy/node_modules/@percy/client/dist/utils.js:202:27)
    at IncomingMessage.emit (node:events:527:35)
    at endReadableNT (node:internal/streams/readable:1589:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) (0ms)

  ✨ PASSED. 1 assertions. (11.056s)

  Running User should be able to see home page 2:
───────────────────────────────────────────────────────────────────────────────────────────────────
ℹ Connecting to hub-cloud.browserstack.com on port 443...

ℹ Connected to hub-cloud.browserstack.com on port 443 (9980ms).
  Using: chrome (119.0.6045.106) on WINDOWS.

- Loading url: https://www.browserstack.com

  ℹ Loaded url https://www.browserstack.com in 1878ms
[percy:core:snapshot] --------- (14374ms)
[percy:core:snapshot] Received snapshot: Snapshot for home page (0ms)
[percy:core:snapshot] - url: https://www.browserstack.com/ (0ms)
[percy:core:snapshot] - widths: 375px, 1280px (0ms)
[percy:core:snapshot] - minHeight: 1024px (0ms)
[percy:core:snapshot] - enableJavaScript: false (0ms)
[percy:core:snapshot] - cliEnableJavaScript: true (0ms)
[percy:core:snapshot] - disableShadowDOM: false (0ms)
[percy:core:snapshot] - discovery.allowedHostnames: www.browserstack.com (0ms)
[percy:core:snapshot] - clientInfo: @percy/nightwatch/2.2.0 (0ms)
[percy:core:snapshot] - environmentInfo: nightwatch/3.3.2 (0ms)
[percy:core:snapshot] - domSnapshot: true (0ms)
[percy:core] Snapshot taken: Snapshot for home page (1ms)
[percy:client] Creating snapshot: Snapshot for home page... (0ms)
[percy:client] Finalizing snapshot 1734035916... (257ms)
[percy:core] Encountered an error uploading snapshot: Snapshot for home page (339ms)
[percy:core] Error: Cannot finalize snapshots in app builds. Did you mean to call comparison finalize?
    at handleFinished (file:///Users/alexc/Documents/nightwatch-ts-percy/node_modules/@percy/client/dist/utils.js:186:17)
    at IncomingMessage.<anonymous> (file:///Users/alexc/Documents/nightwatch-ts-percy/node_modules/@percy/client/dist/utils.js:202:27)
    at IncomingMessage.emit (node:events:527:35)
    at endReadableNT (node:internal/streams/readable:1589:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) (0ms)
  ✔ Testing if element <Element [name=@signInButton]> is visible (614ms)
[percy:core:snapshot] --------- (4923ms)
[percy:core:snapshot] Received snapshot: Sign In page snapshot (0ms)
[percy:core:snapshot] - url: https://www.browserstack.com/users/sign_in (0ms)
[percy:core:snapshot] - widths: 375px, 1280px (0ms)
[percy:core:snapshot] - minHeight: 1024px (0ms)
[percy:core:snapshot] - enableJavaScript: false (0ms)
[percy:core:snapshot] - cliEnableJavaScript: true (0ms)
[percy:core:snapshot] - disableShadowDOM: false (0ms)
[percy:core:snapshot] - discovery.allowedHostnames: www.browserstack.com (0ms)
[percy:core:snapshot] - clientInfo: @percy/nightwatch/2.2.0 (0ms)
[percy:core:snapshot] - environmentInfo: nightwatch/3.3.2 (0ms)
[percy:core:snapshot] - domSnapshot: true (0ms)
[percy:core] Snapshot taken: Sign In page snapshot (0ms)
[percy:client] Creating snapshot: Sign In page snapshot... (0ms)
[percy:client] Finalizing snapshot 1734035966... (248ms)

  ✨ PASSED. 1 assertions. (20.407s)
[percy:core] Encountered an error uploading snapshot: Sign In page snapshot (559ms)
[percy:core] Error: Cannot finalize snapshots in app builds. Did you mean to call comparison finalize?
    at handleFinished (file:///Users/alexc/Documents/nightwatch-ts-percy/node_modules/@percy/client/dist/utils.js:186:17)
    at IncomingMessage.<anonymous> (file:///Users/alexc/Documents/nightwatch-ts-percy/node_modules/@percy/client/dist/utils.js:202:27)
    at IncomingMessage.emit (node:events:527:35)
    at endReadableNT (node:internal/streams/readable:1589:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) (0ms)

  See more info, video, & screenshots on Browserstack:
  https://automate.browserstack.com/builds/9b5f0eeb7eee296bd2eaefb488baa151470d821e/sessions/045cc43d8648dfd99c4a5d8eee0f336544ab1443

  ✨ PASSED. 2 total assertions (50.4s)
 Wrote HTML report file to: /Users/alexc/Documents/nightwatch-ts-percy/tests_output/nightwatch-html-report/index.html

[percy:core:browser] Closing browser (160ms)
[percy:core:browser] Browser closed (0ms)
[percy:client] Finalizing build 31500325... (0ms)
[percy:core] Finalized build #2: https://percy.io/b1cd1fd0/nightwatch-ts-percy/builds/31500325 (251ms)
[percy] Finalizing parallel build...
[percy] Error: Finalizing build 31500325 failed: cannot finalize before all snapshots have comparisons created. This is likely an SDK error, please make sure that comparisons are created before calling finalize.
```