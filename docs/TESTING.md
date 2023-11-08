# Sonic Explorers API Testing

[Go back to README.md](../README.md)

## User Story Testing

All user stories have been tested to make sure, that all features have been implemented as planned. The results can be found here: [User Story Tests](/docs/testing/userstory_test_results.md)

## Automated Testing

The logic of the most important features of the application have been tested with automated tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

All tested features behave as expected. Error handling mechanisms are implemented in the code where appropriate.

### Performed Tests

The following automated tests have been performed:

#### Tests for ReportPage component

Path: `src/pages/reports/__tests__/ReportPage.test.js`

 - Renders logged-out message for logged-out users
 - Renders reports for logged-in users
 - Renders close button for each report

#### Tests for SoundEditForm component

Path: `src/pages/sounds/__tests__/SoundEditForm.test.js`

 - Renders SoundEditForm with all fields
 - User input works as expected
 - Shows success message on submit

#### Tests for SoundCreateForm component

Path: `src/pages/sounds/__tests__/SoundCreateForm.test.js`

 - Renders SoundCreateForm with all fields
 - User input works as expected
 - Renders submit button
 - Shows error message for empty form

#### Tests for SoundPage component

Path: `src/pages/sounds/__tests__/SoundPage.test.js`

 - Renders goBackButton
 - Renders SoundDetail
 - Renders comments
 - Renders sound dropdown for logged-in user
 - Renders comment dropdown for logged-in user

#### Tests for TopNavBar component

Path: `src/components/__tests__/TopNavBar.test.js`

 - Renders sign in link
 - Renders profile button for signed-in users
 - Renders upload button for signed-in users
 - Renders sign in and sign up links for signed-out users
 - Renders reports link for staff users

#### Tests for App component

Path: `src/App.test.js`

 - Renders main title and page heading
 - Render nav bars
 - Renders search bar
 - Renders sound list
 - Renders profile list

#### Tests for SoundListPage component

Path: `src/pages/sounds/__tests__/SoundListPage.test.js`

 - Renders popularProfiles widgets
 - Renders sound details for each sound
 - Renders audio player for each sound
 - Renders map for each sound
 - Renders search bar

#### Tests for Map component

Path: `src/pages/map/__tests__/Map.test.js`

 - Renders map with map marker for each sound

#### Tests for SignInForm component

Path: `src/pages/auth/__tests__/SignInForm.test.js`

 - Renders SignInForm with username and password fields
 - Renders sign in button
 - Sign up link works correctly

#### Tests for SignUpForm component

Path: `src/pages/auth/__tests__/SignUpForm.test.js`

 - Renders SignUpForm with username and password fields
 - Renders sign up button
 - Sign in link works correctly
 - Sign up button works correctly

#### Tests for NotificationPage component

Path: `src/pages/notifications/__tests__/NotificationPage.test.js`

 - Renders logged-out message for logged-out users
 - Renders notifications for logged-in users

#### Tests for BottomNavBar component

Path: `src/components/__tests__/BottomNavBar.test.js`

 - Renders BottomNavBar
 - Nav links work correctly

#### Tests for Avatar component

Path: `src/components/__tests__/Avatar.test.js`

 - Renders with image
 - Renders with text
 - renders with default height
 - Renders with custom height
 - Stacked image does not have right margin
 - Non stacked image has right margin

#### Tests for AudioPlayer component

Path: `src/components/__tests__/AudioPlayer.test.js`

 - Renders AudioPlayer with controls and waveform

#### Tests for Asset component

Path: `src/components/__tests__/Asset.test.js`

 - Renders with a spinner
 - Renders with an image
 - Renders with a message

#### Tests for Message component

Path: `src/components/__tests__/Message.test.js`

 - Renders message

### Results

All tests pass with no errors or warnings.

<details>

  <summary>Show console output from running all tests with `npm test -- --verbose`</summary>

  ```
  PASS  src/pages/sounds/__tests__/SoundEditForm.test.js
  ✓ renders SoundEditForm with all fields (146 ms)
  ✓ user input works as expected (55 ms)
  ✓ shows success message on submit (149 ms)

  PASS  src/App.test.js
  ✓ renders main title and page heading (212 ms)
  ✓ render nav bars (51 ms)
  ✓ renders search bar (29 ms)
  ✓ renders sound list (254 ms)
  ✓ renders profile list (172 ms)

  PASS  src/pages/sounds/__tests__/SoundListPage.test.js
  ✓ renders popularProfiles widgets (362 ms)
  ✓ renders sound details for each sound (578 ms)
  ✓ renders audio player for each sound (106 ms)
  ✓ renders map for each sound (101 ms)
  ✓ renders search bar (22 ms)

  PASS  src/pages/sounds/__tests__/SoundPage.test.js
  ✓ renders goBackButton (300 ms)
  ✓ renders SoundDetail (233 ms)
  ✓ renders comments (94 ms)
  ✓ renders sound dropdown for logged-in user (451 ms)
  ✓ renders comment dropdown for logged-in user (295 ms)

  PASS  src/pages/sounds/__tests__/SoundCreateForm.test.js
  ✓ renders SoundCreateForm with all fields (111 ms)
  ✓ user input works as expected (64 ms)
  ✓ renders submit button (92 ms)
  ✓ shows error message for empty form (86 ms)

  PASS  src/components/__tests__/TopNavBar.test.js
  ✓ renders sign in link (139 ms)
  ✓ renders profile button for signed-in users (59 ms)
  ✓ renders upload button for signed-in users (22 ms)
  ✓ renders sign in and sign up links for signed-out users (242 ms)
  ✓ renders reports link for staff users (87 ms)

  PASS  src/pages/auth/__tests__/SignUpForm.test.js
  ✓ renders SignUpForm with username and password fields (107 ms)
  ✓ renders sign up button (45 ms)
  ✓ sign in link works correctly (50 ms)
  ✓ sign up button works correctly (80 ms)

  PASS  src/pages/map/__tests__/Map.test.js
  ✓ renders map with map marker for each sound (388 ms)

  PASS  src/pages/reports/__tests__/ReportPage.test.js
  ✓ renders logged-out message for logged-out users (44 ms)
  ✓ renders reports for logged-in users (299 ms)
  ✓ renders close button for each report (261 ms)

  PASS  src/pages/auth/__tests__/SignInForm.test.js
  ✓ renders SignInForm with username and password fields (104 ms)
  ✓ renders sign in button (32 ms)
  ✓ sign up link works correctly (37 ms)

  PASS  src/components/__tests__/Message.test.js
  ✓ renders message (32 ms)

  PASS  src/components/__tests__/BottomNavBar.test.js
  ✓ renders BottomNavBar (65 ms)
  ✓ nav links work correctly (43 ms)

  PASS  src/pages/notifications/__tests__/NotificationPage.test.js
  ✓ renders logged-out message for logged-out users (55 ms)
  ✓ renders notifications for logged-in users (96 ms)

  PASS  src/components/__tests__/Asset.test.js
  ✓ renders with a spinner (26 ms)
  ✓ renders with an image (4 ms)
  ✓ renders with a message (3 ms)

  PASS  src/components/__tests__/Avatar.test.js
  ✓ renders with image (18 ms)
  ✓ renders with text (2 ms)
  ✓ renders with default height (20 ms)
  ✓ renders with custom height (6 ms)
  ✓ stacked image does not have right margin (5 ms)
  ✓ non stacked image has right margin (5 ms)

  PASS  src/components/__tests__/AudioPlayer.test.js
  ✓ renders AudioPlayer with controls and waveform (30 ms)

  Test Suites: 16 passed, 16 total
  Tests:       53 passed, 53 total
  Snapshots:   0 total
  Time:        6.403 s
  Ran all test suites.

  Watch Usage: Press w to show more.
  ```
</details>

## Manual Testing

- The website was manually tested on a variety of devices (desktop, laptop, tablet, and smartphone) and browsers. The following browsers and operating systems have been tested:
  - Linux: Firefox, Google Chrome
  - macOS: Safari
  - Microsoft Windows: Microsoft Edge
  - iOS: Safari, Firefox

- The website is working as expected in Firefox, Google Chrome, and Microsoft Edge.
- There is an issue with Safari on macOS and iOS when the "Prevent cross-site tracking" option is enabled (which is the default on macOS and iOS). When this option is enabled, users are prevented from logging in. The application works as expected when this option is disabled. For more details see [Unfixed Bugs](#unfixed-bugs).
- All links, buttons, and forms were thoroughly tested to make sure they work as expected.
- Friends and family members were asked to review the application and documentation to point out any bugs or user experience issues.

## Validators and Linters

### W3C Validators

The generated HTML passes the [W3C Markup Validator](https://validator.w3.org) with no erros. The warnings about trailing slashes are due to the structure of the index.html file generated by Create React App and can be ignored: [W3C Markup Validator results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsonic-explorers-e821805686e9.herokuapp.com%2F)

Validating the generated CSS files with the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) results in a few errors and quite a few warnings. All the errors and almost all warnings come from Bootstrap and Leaflet. Some of the warnings also come from CSS generated by React: [W3C CSS Validator results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsonic-explorers-e821805686e9.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

Nevertheless, the application works as expected in all browsers and on all screen sizes.

### ESlint

I used [ESlint](https://eslint.org) in my code editor ([Neovim](https://neovim.io/)) to lint all JavaScript and JSX code written for the project. All code passes the linter with no errors or warnings.

### Lighthouse

[Chrome Lighthouse](https://developers.google.com/web/tools/lighthouse) was used to test the performance, accessibility, best practices and SEO of the deployed application. I generated reports for three sample pages (`/explore`, `/map`, and `/signin`) with the following results:

**Lighthouse report for `/explore`** (Landing Page)

![Lighthouse report for the landing page](/docs/testing/lighthouse/lighthouse_summary_explore.png)

**Lighthouse report for `/map`**

![Lighthouse report for the map page](/docs/testing/lighthouse/lighthouse_summary_map.png)

**Lighthouse report for `/signin`**

![Lighthouse report for the signin page](/docs/testing/lighthouse/lighthouse_summary_signin.png)

Detailed reports can be found here: [Lighthouse reports](/docs/testing/lighthouse/detailed_reports/)

## Bugs

### Fixed Bugs

| Issue | Bug | Fix | Commit |
|---|---|---|---|
| https://github.com/nacht-falter/sonic-explorers/issues/36 | In Chrome and Edge scrollbars appeared for a split second when the help popovers in SoundCreationForm are activated, which caused the whole page to wiggle every time the popover was hovered. | This was fixed by hiding scrollbars on body element. | [Commit](https://github.com/nacht-falter/sonic-explorers/commit/c55773536f2cb5ebbcc3fc6920fbc4d508d3c0dc) |
| https://github.com/nacht-falter/sonic-explorers/issues/37 | The useEffect loop in the TagField component caused an infinite loop because it updated the tags array, which in turn triggered a re-render. | This was fixed by adding a condition to useEffect hook, so that it only re-renders if the tags have actually changed. | [Commit](https://github.com/nacht-falter/sonic-explorers/commit/c55773536f2cb5ebbcc3fc6920fbc4d508d3c0dc) |
| https://github.com/nacht-falter/sonic-explorers/issues/39 | When sending the sound create form, the API treated an array of tags as a single string instead of creating a separate tag for each item. | This was fixed by looping over the array and appending each tag separately. | [Commit](https://github.com/nacht-falter/sonic-explorers/commit/a0f9be3ab5e4b4521fa2c73b27cba5c70b822418) |
| https://github.com/nacht-falter/sonic-explorers/issues/41 | The map display in the dropdown for showing sound details was not centering properly due to the component being rendered when the dropdown is still collapsed and not re-rendering when it is expanded. | This was fixed by forcing SoundDetailMap component to re-render when accordion items are expanded. | [Commit](https://github.com/nacht-falter/sonic-explorers/commit/34169b5defc2c7cc339c5c4ff6963f604c2bc6cd) |
| https://github.com/nacht-falter/sonic-explorers/issues/43 | The form fields on the SoundEditForm were reset to their initial values on each rerender of the component because of a missing check if the data has been changed after the initial mount. | This was fixed by checking if hasLoaded is true before retrieving initial data. If hasLoaded is true, the initial data is not refetched. | [Commit](https://github.com/nacht-falter/sonic-explorers/commit/0337a9e5bfe5be7fdb167980d54707f81cd16b18) |

### Unfixed Bugs

#### Safari Cross-Site Tracking Issue

There is an unfixed issue with Safari on macOS and iOS when the "Prevent cross-site tracking" option is enabled (which is the default on macOS and iOS). With this option enabled users are prevented from logging in because the API request made by the `CurrentUserContext` used for setting the current user after signing in is blocked by the browser. This is because Safari seems to block cross-site requests which are not actively initiated by the user. The application works as expected when this option is disabled.

This is a known bug inherited from the *Moments* walkthrough project. For more information check out the [thread on the Code Institue Slack Channel](https://code-institute-room.slack.com/archives/C02MTH5MBDG/p1674671530746669) (NOTE: this link is not a public link))

A workaround for this problem could be to let the user initiate the API requests for setting the user by clicking a button. But since the `CurrentUserContext` requests the user data from the API on every re-render of the application the user would have to initiate a request every time a component reloads which would be a terrible user experience. Since avoiding this would have required drastic changes to the entire application logic, I decided to leave this issue unfixed. Instead I implemented a warning message which is displayed to Safari users on the sign-in page.

<details>
  <summary>Show warning message screenshot</summary>

  ![Screenshot of warning message](/docs/testing/screenshots/safari_warning.png)

</details>

[Commit](https://github.com/nacht-falter/sonic-explorers/commit/754a91df7e72cde8eb5eb533ea19d6d6c1cda08f)

#### Sound Edit Form Issue

There is an unfixed issue with the `SoundCreateForm` component. When a sound file is selected in the audio field, the title and description fields are reset to their initial values. This has to do with the fact, that I had to stop the audio field from re-rendering everytime the component re-renders because this caused a massive performance issue while typing in the text fields.

I could not find out why exactly this happens and how to fix it. I decided to leave this issue unfixed because selecting the sound file should be the first step users take when uploading a sound anyway so that in most cases this should not be a problem.

[Commit](https://github.com/nacht-falter/sonic-explorers/commit/778c1ba444baf8947c5bfee951f39386142aa47d)

### Console Errors and Warnings

There are three 401 errors in the console which are caused by the API returning 401 errors when the user is not logged in. This is expected behaviour and does not affect the application's functionality.

There are a few console warnings which seem to be caused by the Leaflet and WaveSurfer.js libraries:

  `An AudioContext was prevented from starting automatically. It must be created or resumed after a user gesture on the page.`

  `Invalid URI. Load of media resource  failed.`

Since these warnings do not affect the application's functionality, I decided to not investigate them further.

## Known limitations

- So far it is not possible to record audio directly in the application. Users have to record audio with a separate application and then upload the audio file to the Sonic Explorers application. Unfortunately, this feature could not be implemented within the current scope of the project. But since it is an important feature, it should be implemented in the future. This could be implemented using the [MediaStream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API).
- Users cannot trim or otherwise edit audio files before uploading them. Uploaded audio files are automatically trimmed to the first 30 seconds by the API.
- Staff users currently cannot delete sounds by other users due to limitations of the API. This should be implemented in the future, because otherwise staff users cannot properly moderate the content of the application.
