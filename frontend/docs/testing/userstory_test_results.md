# Sonic Explorer User Story Tests

[Go back to TESTING.md](../TESTING.md)

All user stories for the API have been manually tested with the following results:

<hr>

**Test for [User Story #1](https://github.com/nacht-falter/sonic-explorers/issues/1)**

**User Story:** As a **new user**, I can **create an account** so that I can **get access to all features of the application**.

**Result:** Passed ✅ | Completed in [Sprint 1](https://github.com/nacht-falter/sonic-explorers/milestone/2?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to /signup by clicking on the "Sign up" link in the navigation bar
  2. Enter a username and a password, confirm the password in the second password field
  3. Click the Signup button

  **Expected Results:**

  1. The Signup page should open
  2. The form fields should accept user input
  3. A success message should appear, and the user should be redirected to the signup page

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Signup Test Result](/docs/testing/screenshots/signup_test1.png)

  <hr>

  ![Signup Test Result](/docs/testing/screenshots/signup_test2.png)

</details>

<hr>

**Test for [User Story #2](https://github.com/nacht-falter/sonic-explorers/issues/2)**

**User Story:** As a **registered user**, I can **log in** so that I can **access my account**.

**Result:** Passed ✅ | Completed in [Sprint 1](https://github.com/nacht-falter/sonic-explorers/milestone/2?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to /signin by clicking on the "Sign in" link in the navigation bar
  2. Enter a registered username and password
  3. Click the Login button

  **Expected Results:**

  1. The Sign in page should open
  2. The form fields should accept user input
  3. A success message should appear, and the user should be redirected to their account

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Signin Test Result](/docs/testing/screenshots/signin_test1.png)

  <hr>

  ![Signin Test Result](/docs/testing/screenshots/signin_test2.png)

</details>

<hr>

**Test for [User Story #3](https://github.com/nacht-falter/sonic-explorers/issues/3)**

**User Story:** As a **logged-in user**, I can **log out** so that I can **securely end my session**.

**Result:** Passed ✅ | Completed in [Sprint 1](https://github.com/nacht-falter/sonic-explorers/milestone/2?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Click on the User Dropdown menu
  2. Click on the "Log Out" button

  **Expected Results:**

  1. The User Dropdown menu should open in the top navigation bar
  2. The user should be logged out and redirected to the login page

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Signout Test Result](/docs/testing/screenshots/signout_test1.png)

  <hr>

  ![Signout Test Result](/docs/testing/screenshots/signout_test2.png)

</details>

<hr>

**Test for [User Story #4](https://github.com/nacht-falter/sonic-explorers/issues/4)**

**User Story:** As a **registered user**, I can **click on a profile link in the menu** so that I can **review my profile or check out other user's profiles**.

**Result:** Passed ✅ | Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Click on the User Dropdown menu in the top navigation bar
  2. Click on the username link

  **Expected Results:**

  1. The user's profile page should open
  2. The profile information should be displayed

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Profile Test Result](/docs/testing/screenshots/profile_test1.png)

  <hr>

  ![Profile Test Result](/docs/testing/screenshots/profile_test2.png)

</details>

<hr>

**Test for [User Story #5](https://github.com/nacht-falter/sonic-explorers/issues/5)**

**User Story:** As a **registered user**, I can **edit my profile** so that I can **update my information**.

**Result:** Passed ✅ | Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to the profile page by clicking on the username link in the top navigation bar
  2. Click on the dropdown menu button and then on the "Edit Profile" button
  3. Update profile information
  4. Click the "Save" button

  **Expected Results:**

  1. The profile page should open
  2. The profile edit page should open
  3. The user should be able to make changes
  4. A success message should appear, and the profile information should be updated

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Edit Profile Test Result](/docs/testing/screenshots/edit_profile_test1.png)

  <hr>

  ![Edit Profile Test Result](/docs/testing/screenshots/edit_profile_test2.png)

  <hr>

  ![Edit Profile Test Result](/docs/testing/screenshots/edit_profile_test3.png)

</details>

<hr>

**Test for [User Story #6](https://github.com/nacht-falter/sonic-explorers/issues/6)**

**User Story:** As a **registered user**, I can **upload a sound file** so that I can **share my sounds with other users**.

**Result:** Passed ✅ | Completed in [Sprint 2](https://github.com/nacht-falter/sonic-explorers/milestone/3?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to the sound upload page by clicking on the "Upload Sound" link in the navigation bar
  2. Select a sound file to upload
  3. Fill in sound details
  4. Click the "Upload" button

  **Expected Results:**

  1. The sound upload form should open
  2. The user should be able to select a sound file
  3. The user should be able to provide details for the sound
  4. A success message should appear, and the sound should be uploaded

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Sound Upload Test Result](/docs/testing/screenshots/sound_upload_test1.png)

  <hr>

  ![Sound Upload Test Result](/docs/testing/screenshots/sound_upload_test2.png)

</details>

<hr>

**Test for [User Story #7](https://github.com/nacht-falter/sonic-explorers/issues/7)**

**User Story:** As a **registered user**, I can **record a sound file** so that I can **create and share new sounds on the spot**.

**Result:** Not completed ❌ (Prioritized as *Won't-Have*, moved back to [Product Backlog](https://github.com/nacht-falter/sonic-explorers/milestone/1?closed=1))

<hr>

**Test for [User Story #8](https://github.com/nacht-falter/sonic-explorers/issues/8)**

**User Story:** As a **registered user**, I can **add information (title, description, image, tags) to my sound file** so that I can **provide details for my sounds**.

**Result:** Passed ✅ | Completed in [Sprint 2](https://github.com/nacht-falter/sonic-explorers/milestone/3?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to the sound upload page by clicking on the "Upload Sound" link in the navigation bar
  3. Add sound details such as title, description, image, and tags
  4. Click the "Upload sound" button

  **Expected Results:**

  1. The sound upload form should open
  2. The user should be able to add sound information
  3. A success message should appear, and the sound should be uploaded with the provided information

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Add Sound Details Test Result](/docs/testing/screenshots/add_sound_details_test1.png)

  <hr>

  ![Add Sound Details Test Result](/docs/testing/screenshots/add_sound_details_test2.png)

</details>

<hr>

**Test for [User Story #9](https://github.com/nacht-falter/sonic-explorers/issues/9)**

**User Story:** As a **registered user**, I can **add geolocation data to my sound file, either by choosing a location on a map or by allowing the browser to access my location** so that I can **provide location data for my sounds**.

**Result:** Passed ✅ | Completed in [Sprint 2](https://github.com/nacht-falter/sonic-explorers/milestone/3?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to the sound upload form by clicking on the "Upload Sound" link in the navigation bar
  2. Add location information either by selecting a location on the map or allowing browser access
  3. Add additional sound information
  4. Click the "Upload sound" button

  **Expected Results:**

  1. The location data should be added successfully
  2. A success message should appear, and the location data should be saved

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Geolocation Test Result](/docs/testing/screenshots/geolocation_test1.png)

  <hr>

  ![Geolocation Test Result](/docs/testing/screenshots/geolocation_test2.png)

</details>

<hr>

**Test for [User Story #10](https://github.com/nacht-falter/sonic-explorers/issues/10)**

**User Story:** As a **user**, I can **edit information for my sound file** so that I can **update my sound's details**.

**Result:** Passed ✅ | Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to the sound details page
  2. Click on the "Edit Sound" button
  3. Update sound information
  4. Click the "Update sound" button

  **Expected Results:**

  1. The sound details edit page should open
  2. The user should be able to update sound information
  3. A success message should appear, and the sound details should be updated

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Edit Sound Test Result](/docs/testing/screenshots/edit_sound_test1.png)

  <hr>

  ![Edit Sound Test Result](/docs/testing/screenshots/edit_sound_test2.png)

  <hr>

  ![Edit Sound Test Result](/docs/testing/screenshots/edit_sound_test3.png)

</details>

<hr>

**Test for [User Story #11](https://github.com/nacht-falter/sonic-explorers/issues/11)**

**User Story:** As a **user**, I can **see a list of sound files** so that I can **explore other user's sounds**.

**Result:** Passed ✅ | Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to the explore page by clicking on the "Explore" link in the bottom navigation bar

  **Expected Results:**

  1. The sound list page should display a list of the most recent sound files

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Sound List Test Result](/docs/testing/screenshots/sound_list_test.png)

</details>

<hr>

**Test for [User Story #12](https://github.com/nacht-falter/sonic-explorers/issues/12)**

**User Story:** As a **registered user**, I can **sort and filter the list of sound files** so that I can **easily find specific sounds**.

**Result:** Not completed ❌ (Prioritized as *Won't-Have*, moved back to [Product Backlog](https://github.com/nacht-falter/sonic-explorers/milestone/1?closed=1))

<hr>

**Test for [User Story #13](https://github.com/nacht-falter/sonic-explorers/issues/13)**

**User Story:** As a **registered user**, I can **search for sound files** so that I can **find specific sounds easily**.

**Result:** Passed ✅ | Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to the explore page by clicking on the "Explore" link in the bottom navigation bar
  2. Enter a search term in the search bar

  **Expected Results:**

  1. The search should filter sounds by tag, username, or title and display the results for the search term

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Sound Search Test Result](/docs/testing/screenshots/sound_search_test1.png)

  <hr>

  ![Sound Search Test Result](/docs/testing/screenshots/sound_search_test2.png)

</details>

<hr>

**Test for [User Story #14](https://github.com/nacht-falter/sonic-explorers/issues/14)**

**User Story:** As a **registered user**, I can **see a sounds feed with sounds from followed users** so that I can **discover content from users I follow**.

**Result:** Passed ✅ | Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to /feed by clicking on the "Feed" link in the bottom navigation bar

  **Expected Results:**

  1. The feed page should display sounds from followed users for logged-in users
  2. The feed page should display a message for logged-out users

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Sounds Feed Test Result](/docs/testing/screenshots/sound_feed_test.png)

</details>

<hr>

**Test for [User Story #15](https://github.com/nacht-falter/sonic-explorers/issues/15)**

**User Story:** As a **registered user**, I can **see a list of sound files I liked** so that I can **access my favorite sounds**.

**Result:** Passed ✅ | Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to /favourites by clicking on the "Favourites" link in the bottom navigation bar

  **Expected Results:**

  1. The favourites page should display a list of sounds the user liked for logged-in users
  2. The favourites page should display a message for logged-out users

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Favourites Test Result](/docs/testing/screenshots/favourites_test.png)

</details>

<hr>

**Test for [User Story #16](https://github.com/nacht-falter/sonic-explorers/issues/16)**

**User Story:** As a **user**, I can **see a widget with a list of the most popular sounds** so that I can **see which sounds I should listen to**.

**Result:** Not completed ❌ (Prioritized as *Won't-Have*, moved back to [Product Backlog](https://github.com/nacht-falter/sonic-explorers/milestone/1?closed=1))

<hr>

**Test for [User Story #17](https://github.com/nacht-falter/sonic-explorers/issues/17)**

**User Story:** As a **user**, I can **access a sound detail page with an audio player and the sound's details** so that I can **get more information on a specific sound**.

**Result:** Passed ✅ | Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Click on a sound's title to access its detail page

  **Expected Results:**

  1. The sound detail page should open with an audio player and sound details

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Sound Detail Test Result](/docs/testing/screenshots/sound_detail_test.png)

</details>

<hr>

**Test for [User Story #18](https://github.com/nacht-falter/sonic-explorers/issues/18)**

**User Story:** As a **user**, I can **see a map with the sound's location on the sound detail page** so that I can **see the sound's location without going to the map view**.

**Result:** Passed ✅ | Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to the sound detail page

  **Expected Results:**

  1. The sound's location should be displayed on the map on the sound detail page

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Sound Location Test Result](/docs/testing/screenshots/sound_location_test.png)

</details>

<hr>

**Test for [User Story #19](https://github.com/nacht-falter/sonic-explorers/issues/19)**

**User Story:** As a **user**, I can **like and unlike sounds** so that I can **express my appreciation for other user's sounds**.

**Result:** Passed ✅ | Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Navigate to a sound detail page
  2. Click the heart icon to like or unlike the sound

  **Expected Results:**

  1. The Like button should be clickable and reflect the current state

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Like and Unlike Sound Test Result](/docs/testing/screenshots/like_unlike_test1.png)

  <hr>

  ![Like and Unlike Sound Test Result](/docs/testing/screenshots/like_unlike_test2.png)

</details>

<hr>

**Test for [User Story #20](https://github.com/nacht-falter/sonic-explorers/issues/20)**

**User Story:** As a **registered user**, I can **comment on sounds** so that I can **provide feedback on other user's sounds**.

**Result:** Passed ✅ | Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to a sound detail page
  2. Enter a comment in the comment section
  3. Click the "Comment" button

  **Expected Results:**

  1. The comment form should accept user input
  2. The submitted comment should be displayed on the sound detail page

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Comment Test Result](/docs/testing/screenshots/comment_test1.png)

  <hr>

  ![Comment Test Result](/docs/testing/screenshots/comment_test2.png)

</details>

<hr>

**Test for [User Story #21](https://github.com/nacht-falter/sonic-explorers/issues/21)**

**User Story:** As a **registered user**, I can **edit and delete my comments** so that I can **correct mistakes or withdraw comments**.

**Result:** Passed ✅ | Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to a sound detail page with your comment
  2. Click on the "Edit" button in the comment dropdown menu to edit the comment
  3. Make changes and click the "Save" button
  4. Click on the "Delete" button

  **Expected Results:**

  1. The comment should be editable for the comment owner
  2. The edited comment should be saved successfully on submit
  3. A confirmation modal should appear
  3. The comment should be deleted if the user confirms
  4. The comment should not be deleted if the user cancels

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Edit and Delete Comment Test Result](/docs/testing/screenshots/edit_comment_test1.png)

  <hr>

  ![Edit and Delete Comment Test Result](/docs/testing/screenshots/edit_comment_test2.png)

  <hr>

  ![Edit and Delete Comment Test Result](/docs/testing/screenshots/edit_comment_test3.png)

  <hr>

  ![Edit and Delete Comment Test Result](/docs/testing/screenshots/delete_comment_test1.png)

  <hr>

  ![Edit and Delete Comment Test Result](/docs/testing/screenshots/delete_comment_test2.png)

  <hr>

  ![Edit and Delete Comment Test Result](/docs/testing/screenshots/delete_comment_test3.png)

</details>

<hr>

**Test for [User Story #22](https://github.com/nacht-falter/sonic-explorers/issues/22)**

**User Story:** As a **registered user**, I can **follow and unfollow other users** so that I can **stay updated on their uploaded content**.

**Result:** Passed ✅ | Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to another user's profile page
  2. Click the "Follow" button
  3. Click the "Unfollow" button

  **Expected Results:**

  1. The button should reflect the current state
  2. The follow state should be updated

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Follow and Unfollow User Test Result](/docs/testing/screenshots/follow_unfollow_test1.png)

  <hr>

  ![Follow and Unfollow User Test Result](/docs/testing/screenshots/follow_unfollow_test2.png)

</details>

<hr>

**Test for [User Story #23](https://github.com/nacht-falter/sonic-explorers/issues/23)**

**User Story:** As a **user**, I can **see a widget with a list of the most followed users** so that I can **discover popular users**.

**Result:** Passed ✅ | Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to /explore, /feed, or /favourites

  **Expected Results:**

  1. The page should include a widget with a list of the most followed users

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Popular Users Widget Test](/docs/testing/screenshots/popular_users_test.png)

</details>

<hr>

**Test for [User Story #24](https://github.com/nacht-falter/sonic-explorers/issues/24)**

**User Story:** As a **registered user**, I can **receive notifications for new sounds by followed users** so that I can **stay updated on their content**.

**Result:** Passed ✅ | Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Create a new user
  2. Login with main user account
  3. Follow the new user
  4. Login with the new user account and upload a new sound
  5. Login with main user account
  6. Go to /news by clicking on the "News" link in the bottom navigation bar

  **Expected Results:**

  1. Notifications for new sounds by followed users should be listed in the notification inbox

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Notifications for New Sounds Test Result](/docs/testing/screenshots/sound_notification_test.png)

</details>

<hr>

**Test for [User Story #25](https://github.com/nacht-falter/sonic-explorers/issues/25)**

**User Story:** As a **registered user**, I can **receive notifications for new likes, comments, and followers** so that I can **stay engaged with my followers**.

**Result:** Passed ✅ | Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Create a new user and login with the new user account
  2. Like a sound uploaded by the main user account
  3. Comment on a sound uploaded by the main user account
  4. Follow the main user account
  5. Login with the main user account
  6. Go to /news by clicking on the "News" link in the bottom navigation bar

  **Expected Results:**

  1. Notifications for new likes, comments, and followers should be listed in the notification inbox

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Notifications for Likes, Comments, and Followers Test Result](/docs/testing/screenshots/other_notifications_test.png)

</details>

<hr>

**Test for [User Story #26](https://github.com/nacht-falter/sonic-explorers/issues/26)**

**User Story:** As a **staff user**, I can **receive notifications for new reports** so that I can **take appropriate action on flagged content**.

**Result:** Passed ✅ | Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Create a new user and login with the new user account
  2. Report a sound uploaded by another user
  3. Login with a staff user account
  4. Go to /news by clicking on the "News" link in the bottom navigation bar

  **Expected Results:**

  1. Notifications for new reports should be listed in the notification inbox

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Notifications for New Reports Test Result](/docs/testing/screenshots/report_notification_test.png)

</details>

<hr>

**Test for [User Story #27](https://github.com/nacht-falter/sonic-explorers/issues/27)**

**User Story:** As a **registered user**, I can **delete notifications** so that I can **manage my notification inbox**.

**Result:** Passed ✅ | Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to /news by clicking on the "News" link in the bottom navigation bar
  2. Click on the "Delete" button for a notification
  3. Confirm deletion

  **Expected Results:**

  1. A confirmation modal should appear
  2. The notification should be deleted if the user confirms
  3. The notification should not be deleted if the user cancels

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Delete Notifications Test Result](/docs/testing/screenshots/delete_notification_test.png)

</details>

<hr>

**Test for [User Story #28](https://github.com/nacht-falter/sonic-explorers/issues/28)**
**User Story:** As a **registered user**, I can **report sounds** so that I can **flag inappropriate content**.

**Result:** Passed ✅ | Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to a sound's detail page
  2. Click on the "Report" button in the sound dropdown menu
  3. Select a reason for reporting and submit

  **Expected Results:**

  1. The reporting feature should be available
  2. A report modal should appear
  2. The user should be able to select a reason for reporting the sound
  3. The report should be submitted successfully

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Report Sounds Test Result](/docs/testing/screenshots/report_sound_test.png)

</details>

<hr>

**Test for [User Story #29](https://github.com/nacht-falter/sonic-explorers/issues/29)**

**User Story:** As a **staff user**, I can **mark reports as done** so that I can **keep track of which reports still need to be reviewed**.

**Result:** Passed ✅ | Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Login with a staff user account
  2. Go to the list of reported sounds by clicking on the "Reports" link in the user dropdown menu in the top navigation bar
  3. Click on the "Close" button for a report

  **Expected Results:**

  1. The report should be marked as closed
  2. The "Close" button should change to "Reopen"

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Mark Reports as Done Test Result](/docs/testing/screenshots/reports_page_test1.png)

  <hr>

  ![Mark Reports as Done Test Result](/docs/testing/screenshots/reports_page_test2.png)

  <hr>

  ![Mark Reports as Done Test Result](/docs/testing/screenshots/reports_page_test3.png)

  <hr>

  ![Mark Reports as Done Test Result](/docs/testing/screenshots/reports_page_test4.png)

  <hr>

  ![Mark Reports as Done Test Result](/docs/testing/screenshots/reports_page_test5.png)

</details>

<hr>

**Test for [User Story #30](https://github.com/nacht-falter/sonic-explorers/issues/30)**

**User Story:** As a **staff user**, I can **delete reports** so that I can **get rid of inappropriate reports or reports that are no longer relevant**.

**Result:** Passed ✅ | Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Login with a staff user account
  2. Go to the list of reported sounds by clicking on the "Reports" link in the user dropdown menu in the top navigation bar
  3. Click on the "Delete" button for a report

  **Expected Results:**

  2. The report should be deleted

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Delete Reports Test Result](/docs/testing/screenshots/delete_reports_test1.png)

  <hr>

  ![Delete Reports Test Result](/docs/testing/screenshots/delete_reports_test2.png)

</details>

<hr>

**Test for [User Story #31](https://github.com/nacht-falter/sonic-explorers/issues/31)**

**User Story:** As a **user**, I can **see a map with all uploaded sounds as map markers** so that I can **explore sounds based on their location**.

**Result:** Passed ✅ | Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to /map by clicking on the "Map" link in the bottom navigation bar

  **Expected Results:**

  1. The map view should appear
  2. The map should include map markers for all uploaded sounds
  2. The markers should be clickable and provide sound details

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Map with Sound Markers Test Result](/docs/testing/screenshots/sound_map_test.png)

</details>

<hr>

**Test for [User Story #32](https://github.com/nacht-falter/sonic-explorers/issues/32)**

**User Story:** As a **user**, I can **filter sounds displayed on the map** so that I can **limit the sounds displayed on the map to match specific criteria**.

**Result:** Passed ✅ | Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Use the search bar to search for sounds by tag, username, or title

  **Expected Results:**

  1. The sounds displayed on the map should change based on the search term

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Filter Sounds on Map Test Result](/docs/testing/screenshots/sound_map_search_test.png)

</details>

<hr>

**Test for [User Story #33](https://github.com/nacht-falter/sonic-explorers/issues/33)**

**User Story:** As a **user**, I can **navigate through the application intuitively** so that I can **easily find the features I am looking for**.

**Result:** Passed ✅ | Completed in [Sprint 1](https://github.com/nacht-falter/sonic-explorers/milestone/2?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Navigate through the application by clicking on links in the top and bottom navigation bars

  **Expected Results:**

  1. All main pages should be accessible from the navigation bars
  2. Feedback messages should be displayed for pages requiring authentication

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Intuitive Navigation Test Result](/docs/testing/screenshots/navigation_test1.png)

  <hr>

  ![Intuitive Navigation Test Result](/docs/testing/screenshots/navigation_test2.png)

  <hr>

  ![Intuitive Navigation Test Result](/docs/testing/screenshots/navigation_test3.png)

</details>

<hr>

**Test for [User Story #34](https://github.com/nacht-falter/sonic-explorers/issues/34)**

**User Story:** As a **user**, I can **access the application from different devices with a responsive and coherent design** so that I can **have a consistent user experience on all devices**.

**Result:** Passed ✅ | Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Access the application from various devices (desktop, tablet, mobile)

  **Expected Results:**

  1. The application should be accessible and responsive on all devices
  2. The application should have a coherent design for a uniform on all devices

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Responsive Design Test Result](/docs/testing/screenshots/responsive_design_test1.png)

  <hr>

  ![Responsive Design Test Result](/docs/testing/screenshots/responsive_design_test2.png)

  <hr>

  ![Responsive Design Test Result](/docs/testing/screenshots/responsive_design_test3.png)
  ![Responsive Design Test Result](/docs/testing/screenshots/responsive_design_test4.png)

</details>

<hr>

**Test for [User Story #35](https://github.com/nacht-falter/sonic-explorers/issues/35)**

**User Story:** As a **user**, I want to **see messages as feedback for my actions within the application** so that I can **know if my actions were successful**.

**Result:** Passed ✅ | Completed in [Sprint 1](https://github.com/nacht-falter/sonic-explorers/milestone/2?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Login with a registered user account
  2. Perform different actions (sign in, sign out, upload sound, edit profile, delete notification etc.)
  2. Verify that feedback messages are displayed

  **Expected Results:**

  1. Feedback messages should be displayed for successful and unsuccessful actions

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Feedback Messages Test Result](/docs/testing/screenshots/messages_test1.png)

  <hr>

  ![Feedback Messages Test Result](/docs/testing/screenshots/messages_test2.png)

  <hr>

  ![Feedback Messages Test Result](/docs/testing/screenshots/messages_test3.png)

  <hr>

  ![Feedback Messages Test Result](/docs/testing/screenshots/messages_test4.png)

</details>

<hr>

**Test for [User Story #38](https://github.com/nacht-falter/sonic-explorers/issues/38)**

**User Story:** As a **user**, I can **access an audio player** so that I can **listen to my own and other user's sounds**.

**Result:** Passed ✅ | Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to /explore or to a sound's detail page
  2. Click the play button on the audio player

  **Expected Results:**

  1. The audio player should be available and display the sound's waveform
  2. The sound should be played and a pause button should be displayed
  3. The current playback position should be displayed

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Audio Player Test Result](/docs/testing/screenshots/audio_player_test.png)

</details>

<hr>

**Test for [User Story #40](https://github.com/nacht-falter/sonic-explorers/issues/40)**

**User Story:** As a **user**, I can **scroll down in a list of sounds and see more sounds appear in the list as I continue** so that I can **have short loading times and a smooth user experience**.

**Result:** Passed ✅ | Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Go to /explore by clicking on the "Explore" link in the bottom navigation bar
  2. Scroll down to the bottom of the page

  **Expected Results:**

  1. If more sounds are available a loading spinner should appear while more sounds are loaded.
  2. If there more sounds are available the sounds should be loaded and displayed.

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Infinite Scroll Test Result](/docs/testing/screenshots/infinite_scroll_test1.png)

  <hr>

  ![Infinite Scroll Test Result](/docs/testing/screenshots/infinite_scroll_test2.png)

</details>

<hr>

**Test for [User Story #42](https://github.com/nacht-falter/sonic-explorers/issues/42)**

**User Story:** As **the owner of a sound**, I can **delete sounds** so that I can **remove sounds I don't need anymore**.

**Result:** Passed ✅ | Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

<details>
  <summary>Show detailed results</summary>

<br>

  **Test Steps:**

  1. Open the detail page of a sound you own by clicking on the sound's title
  2. Click the "Delete" button in the sound dropdown menu

  **Expected Results:**

  1. A confirmation modal should appear
  2. The sound should be deleted if the user confirms
  3. The sound should not be deleted if the user cancels

  **Actual Results:**

  The test passed with the expected results.

  **Screenshots:**

  ![Delete Sound Test Result](/docs/testing/screenshots/delete_sound_test1.png)

  <hr>

  ![Delete Sound Test Result](/docs/testing/screenshots/delete_sound_test2.png)

  <hr>

  ![Delete Sound Test Result](/docs/testing/screenshots/delete_sound_test3.png)

</details>

<hr>
