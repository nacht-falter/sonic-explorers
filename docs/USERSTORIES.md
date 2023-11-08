# **Sonic Explorers** User Stories

[Go back to README.md](../README.md)

All user stories are categorized into four themes:

- [User Authentication and Profile Management](#theme-user-authentication-and-profile-management)
- [Sound Management](#theme-sound-management)
- [Discovering Sounds](#theme-discovering-sounds)
- [User Interaction](#theme-user-interaction)
- [User Experience](#theme-user-experience)
- [Geolocation](#theme-geolocation)
- [Reports and Notifications](#theme-reports-and-notifications)

Within those themes, user stories are further categorized into epics. A list of all epics can be found [here](https://github.com/nacht-falter/sonic-explorers/labels?q=EPIC).

Furthermore, user stories are prioritized using the MoSCoW proritization technique.

## User Stories Within Project Scope

ℹ️ The following user stories were included in the current scope of the project.

ℹ️ User stories marked with the https://github.com/nacht-falter/sonic-explorers/labels/MVP label make up the Minimum Viable Product.

### THEME: User Authentication and Profile Management

<hr>

#### EPIC: User Registration and Authentication

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **new user**, I can **create an account** so that I can **get access to all features of the application**. [(#1)](https://github.com/nacht-falter/sonic-explorers/issues/1)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can enter a username, email address, and password.
- [x] The user can submit the form.
- [x] The user will receive appropriate error messages.
- [x] The user is redirected to the login page.

### Tasks
- [x] Create sign up form component
- [x] Setup axios
- [x] Connect form to API

👉 Completed in [Sprint 1](https://github.com/nacht-falter/sonic-explorers/milestone/2?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Authentication%20and%20Profile%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20User%20Registration%20and%20Authentication
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **registered user**, I can **log in** so that I can **access my account**. [(#2)](https://github.com/nacht-falter/sonic-explorers/issues/2)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can enter their username and password.
- [x] The user can submit the form.
- [x] The user is redirected to the home page.


### Tasks
- [x] Create sign-in form
- [x] make login request with axios
- [x] redirect to home page

👉 Completed in [Sprint 1](https://github.com/nacht-falter/sonic-explorers/milestone/2?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Authentication%20and%20Profile%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20User%20Registration%20and%20Authentication
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **logged-in user**, I can **log out** so that I can **securely end my session**. [(#3)](https://github.com/nacht-falter/sonic-explorers/issues/3)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can click on a logout button.
- [x] The user is redirected to the home page.


### Task
- [x] Create handleSignOut function in NavBar component
- [x] Make request from handleSignOut function to API to log out user

👉 Completed in [Sprint 1](https://github.com/nacht-falter/sonic-explorers/milestone/2?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Authentication%20and%20Profile%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20User%20Registration%20and%20Authentication
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

<hr>

#### EPIC: User Profiles

✅ As a **registered user**, I can **click on a profile link in the menu** so that I can **review my profile or check out other user's profiles**. [(#4)](https://github.com/nacht-falter/sonic-explorers/issues/4)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see a profile page where they can see their profile data.
- [x] The user can see other user's profile pages.
- [x] There is a list of a user's sounds on the profile page.


### Tasks
- [x] Create profile page
- [x] Get profile information from API
- [x] Display profile information on profile page (avatar, followers, sounds etc.)
- [x] Conditionally display follow/unfollow button
- [x] Fetch the user's sounds from the API and display them underneath the profile data.

👉 Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Authentication%20and%20Profile%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20User%20Profiles
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ As a **registered user**, I can **edit my profile** so that I can **update my information**. [(#5)](https://github.com/nacht-falter/sonic-explorers/issues/5)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria 
- [x] The user can go to their profile page and click on a link to edit their profile.
- [x] The user can update their data like profile image, description, and display name.
- [x] The user can change the username.
- [x] The user can change the password.
- [x] The user is redirected to the profile page upon submitting the form.


### Tasks
- [x] Create profile edit form with fields to edit profile image, display name, and description
- [x] Make PUT request on submit to send new data to API
- [x] Create username edit form and send PUT request to dj-rest-auth/user endpoint
- [x] Create password edit form and send PUT request to dj-rest-auth/password/change endpoint
- [x] Redirect to home if user is not profile owner
- [x] Redirect user to profile page upon submit

👉 Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Authentication%20and%20Profile%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20User%20Profiles
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

### THEME: Sound Management

<hr>

#### EPIC: Sound Upload

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **registered user**, I can **upload a sound file** so that I can **share my sounds with other users**. [(#6)](https://github.com/nacht-falter/sonic-explorers/issues/6)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can upload a sound file.
- [x] The user can submit the form.
- [x] The user is redirected to the sound detail page.


### Tasks
- [x] Add SoundCreateForm component for sound upload
- [x] Connect from to API using axios.
- [x] Add options to upload audio files and images
- [x] Provide fields for location data
- [x] Include all other fields
- [x] Redirect to sound detail page

👉 Completed in [Sprint 2](https://github.com/nacht-falter/sonic-explorers/milestone/3?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Sound%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Sound%20Upload
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **registered user**, I can **add information (title, description, image, tags) to my sound file** so that I can **provide details for my sounds**. [(#8)](https://github.com/nacht-falter/sonic-explorers/issues/8)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can enter a title, description, and tags.
- [x] The user can add a location.
- [x] The user can upload an image.
- [x] The user can submit the form.
- [x] The user is redirected to the sound detail page.


### Tasks
- [x] Provide fields for title, description, and tags
- [x] Provide fields for image and audio file upload
- [x] Implement location input functionality
- [x] Implement form submission functionality
- [x] Redirect to the sound detail page on successful submit

👉 Completed in [Sprint 2](https://github.com/nacht-falter/sonic-explorers/milestone/3?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Sound%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Sound%20Upload
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ As a **registered user**, I can **add geoloaction data to my sound file, either by choosing a location on a map or by allowing the browser to access my location** so that I can **provide location data for my sounds**. [(#9)](https://github.com/nacht-falter/sonic-explorers/issues/9)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can choose a location on a map.
- [x] The user can allow the browser to access their location.
- [x] The user can submit the form.


### Tasks
- [x] Install and setup react-leaflet
- [x] Access HTML Geolocation API
- [x] Write functions for handling location retrieval and displaying map
- [x] Add Map component using leaflet

👉 Completed in [Sprint 2](https://github.com/nacht-falter/sonic-explorers/milestone/3?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Sound%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Sound%20Upload
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Should-Have

<hr>

</details>

<hr>

#### EPIC: Sound Editing

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **registered user**, I can **edit information for my sound file** so that I can **update my sound's details**. [(#10)](https://github.com/nacht-falter/sonic-explorers/issues/10)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can update the title, description, and tags.
- [x] The user can upload a new sound file
- [x] The user can upload a new image.
- [x] The user can update the location on a map.
- [x] The user can submit the form.
- [x] The user is redirected to the sound detail page.


### Tasks
- [x] Create edit sound form
- [x] pass previous sound data to fields
- [x] send updated data to API
- [x] Redirect to sound detail page

👉 Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Sound%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Sound%20Editing
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

### THEME: Discovering Sounds

<hr>

#### EPIC: Listing Sounds

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **user**, I can **see a list of sound files** so that I can **explore other user's sounds**. [(#11)](https://github.com/nacht-falter/sonic-explorers/issues/11)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see a list of sound files.
- [x] The user can see the sound's details (title, description, image, tags, location, likes, number of comments etc.).
- [x] The user can play the sound file from the list.
- [x] The user can click on a sound to access the sound detail page.


### Tasks
- [x] Create sound list page
- [x] Add routes
- [x] Send API request to get all sounds
- [x] Display list of sounds

👉 Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Discovering%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Listing%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

<hr>

#### EPIC: Searching and Filtering Sounds

✅ As a **registered user**, I can **search for sound files** so that I can **find specific sounds easily**. [(#13)](https://github.com/nacht-falter/sonic-explorers/issues/13)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can enter a search term.
- [x] The matching sounds will be displayed in real time as the user types.


### Tasks
- [x] Include search bar in post list page
- [x] Get search query from user input
- [x] Add search filter with query from search bar to API request

👉 Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Discovering%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Searching%20and%20Filtering%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ As a **registered user**, I can **see a sounds feed with sounds from followed users** so that I can **discover content from users I follow**. [(#14)](https://github.com/nacht-falter/sonic-explorers/issues/14)

 <details>

<hr>
<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see a list of sound files from followed users.
- [x] The user can see the sound's details (title, description, image, tags, location, likes, number of comments etc.).
- [x] The user can play the sound file from the list.
- [x] The user can click on a sound to access the sound detail page.


### Tasks
- [x] Add filter to sound list page to filter out sounds by users the current user is following
- [x] Add Feed route

👉 Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Discovering%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Listing%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ As a **user**, I can **see a list of sound files I liked** so that I can **access my favourite sounds**. [(#15)](https://github.com/nacht-falter/sonic-explorers/issues/15)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see a list of sound files they liked.
- [x] The user can see the sound's details (title, description, image, tags, location, likes, number of comments etc.).
- [x] The user can play the sound file from the list.
- [x] The user can click on a sound to access the sound detail page.


### Tasks
- [x] Add filter to sound list page to get sounds the user liked
- [x] Add route

👉 Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Discovering%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Listing%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

<hr>

#### EPIC: Sound Detail

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **user**, I can **access a sound detail page with an audio player and the sound's details** so that I can **get more information on a specific sound**. [(#17)](https://github.com/nacht-falter/sonic-explorers/issues/17)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can access a sound detail page by clicking on a sound in the list of sounds or on a map marker.
- [x] The user can see the sound's details (title, description, image, tags, location, likes, number of comments etc.).
- [x] The user can play the sound file from the audio player.


### Tasks
- [x] Create sound detail component
- [x] Create sound page
- [x] Add sound details to sound detail component
- [x] Create route
- [x] Include audio player
- [x] Link to sound detail page from sound list

👉 Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Discovering%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Sound%20Detail
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ As a **user**, I can **see a map with the sound's location on the sound detail page** so that I can **see the sound's location without going to the map view**. [(#18)](https://github.com/nacht-falter/sonic-explorers/issues/18)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see a map with the sound's location on the sound detail page.


### Tasks
- [x] Create map component using leaflet
- [x] Import map component in sound detail page
- [x] Show marker on map according to sound location data

👉 Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Discovering%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Sound%20Detail
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Should-Have

<hr>

</details>

### THEME: User Interaction

<hr>

#### EPIC: Liking and Commenting

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **registered user**, I can **like and unlike sounds** so that I can **express my appreciation for other user's sounds**. [(#19)](https://github.com/nacht-falter/sonic-explorers/issues/19)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can like a sound.
- [x] The user can unlike a sound.
- [x] The user can see the number of likes for each sound.
- [x] The number of likes is updated.


### Tasks
- [x] Add function for handling liking and unliking sounds
- [x] Make post/delete request to API for creating and deleting likes

👉 Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Interaction
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Liking%20and%20Commenting
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **registered user**, I can **comment on sounds** so that I can **provide feeback on other user's sounds**. [(#20)](https://github.com/nacht-falter/sonic-explorers/issues/20)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can enter a comment from the sound detail page.
- [x] The user can submit the form.
- [x] The user can see the comment on the sound detail page.


### Tasks
- [x] Create comment component
- [x] Create comment create form
- [x] Add comment create for to sound page for logged in users
- [x] Display comments on sound page

👉 Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Interaction
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Liking%20and%20Commenting
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **registered user**, I can **edit and delete my comments** so that I can **correct mistakes or withdraw comments**. [(#21)](https://github.com/nacht-falter/sonic-explorers/issues/21)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can edit own comments.
- [x] The user can delete own comments.
- [x] The user can see the updated comment on the sound detail page.
- [x] The user can see that the comment was deleted on the sound detail page.


### Tasks
- [x] Add handleDelete function to comment component to send DELETE request to API
- [x] Display confirmation modal before deleting comment
- [x] Add editing form for comment and create logic for displaying either a comment or the edit form.
- [x] Send PUT request to API with new comment data from edit form
- [x] Update comment list on sound detail page with new comment data

👉 Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Interaction
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Liking%20and%20Commenting
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

<hr>

#### EPIC: Following

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **registered user**, I can **follow and unfollow other users** so that I can **stay updated on their uploaded content**. [(#22)](https://github.com/nacht-falter/sonic-explorers/issues/22)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can follow other users.
- [x] The user can unfollow other users.
- [x] The user can see the number of followers for each user.
- [x] The number of followers is updated.


### Tasks
- [x] Create handleFollow and handleUnfollow functions for making POST and DELETE API requests
- [x] Update Follow count and follow button in profile page and popular profiles components

👉 Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Interaction
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Following
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ As a **user**, I can **see a widget with a list of the most followed users** so that I can **discover popular users**. [(#23)](https://github.com/nacht-falter/sonic-explorers/issues/23)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see a widget with a list of the most followed users.
- [x] The user can click on a user to access the user's profile page.


### Tasks
- [x] Create responsive component for displaying popular profiles
- [x] Create context for fetching profile data from the API and making it available across all components
- [x] Create profile component for displaying profiles in the widget

👉 Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Interaction
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Following
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Could-Have

<hr>

</details>

### THEME: Reports and Notifications

<hr>

#### EPIC: Notifications

✅ As a **registered user**, I can **receive notifications for new sounds by followed users** so that I can **stay updated on their content**. [(#24)](https://github.com/nacht-falter/sonic-explorers/issues/24)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see new notifications in the notification inbox.
- [x] The user can click on a notification to read it.
- [x] The user can mark notifications as read.

### Tasks
- [x] Create notification page and notification component
- [x] Retrieve notifications from API and list them on notification page
- [x] Create handleUpdate function for updating notifications
- [x] Display notifications as read or unread depending on is_read status

👉 Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Reports%20and%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ As a **registered user**, I can **receive notifications for new likes, comments, and followers** so that I can **stay engaged with my followers**. [(#25)](https://github.com/nacht-falter/sonic-explorers/issues/25)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see new notifications in the notification inbox.
- [x] The user can mark notifications as read.


### Tasks
- [x] Create notification page and notification component
- [x] Retrieve notifications from API and list them on notification page
- [x] Create handleUpdate function for updating notifications
- [x] Display notifications as read or unread depending on is_read status

👉 Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Reports%20and%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ As a **staff user**, I can **receive notifications for new reports** so that I can **take appropriate action on flagged content**. [(#26)](https://github.com/nacht-falter/sonic-explorers/issues/26)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see new report notifications in the notification inbox.
- [x] The user can click on a link to get to the report page from the notification.

### Tasks
- [x] Add condition for displaying report notifications to notification component
- [x] Link to reports page and to reported sound from report notification

👉 Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Reports%20and%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Should-Have

<hr>

</details>

✅ As a **registered user**, I can **delete notifications** so that I can **manage my notification inbox**. [(#27)](https://github.com/nacht-falter/sonic-explorers/issues/27)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can delete notifications from the notification inbox.
- [x] The user can see a confirmation message.


### Tasks
- [x] Add handleDelete method from Notification component to make DELETE request to API.
- [x] Update notification list on client side.

👉 Completed in [Sprint 4](https://github.com/nacht-falter/sonic-explorers/milestone/5?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Reports%20and%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Should-Have

<hr>

</details>

<hr>

#### EPIC: Reports

✅ As a **registered user**, I can **report sounds** so that I can **flag inappropriate content**. [(#28)](https://github.com/nacht-falter/sonic-explorers/issues/28)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can report sounds from the sound detail page.
- [x] The user can select a reason for the report.
- [x] The user can submit the form.
- [x] The user can see a confirmation message.


### Tasks
- [x] Add form for creating reports with select field for selecting a flag
- [x] Make POST request to reports endpoint from handleSubmit
- [x] Add link to report create form from sound model
- [x] Show message on submit

👉 Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Reports%20and%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Reports
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Should-Have

<hr>

</details>

✅ As a **staff user**, I can **mark reports as done** so that I can **keep track of which reports still need to be reviewed**. [(#29)](https://github.com/nacht-falter/sonic-explorers/issues/29)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see a list of reports on a report page.
- [x] The user can mark reports as done from the report page.


### Tasks
- [x] Display all reports on a reports page by fetching all reports from the api.
- [x] Display link to reports page in user dropdown menu for staff users
- [x] Add handle function for sending patch request to API to update report review status 
- [x] Create buttons for marking reports as open or closed.

👉 Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Reports%20and%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Reports
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Should-Have

<hr>

</details>

✅ As a **staff user**, I can **delete reports** so that I can **get rid of inappropriate reports or reports that are no longer relevant**. [(#30)](https://github.com/nacht-falter/sonic-explorers/issues/30)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can delete reports from the report detail page.
- [x] The user can see a confirmation message.


### Tasks
- [x] Create handleDelete function on reports component to make DELETE request to reports/id endpoint
- [x] Add delete button to report component

👉 Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Reports%20and%20Notifications
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Reports
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Should-Have

<hr>

</details>

### THEME: Geolocation

<hr>

#### EPIC: Map view

✅ As a **user**, I can **see a map with all uploaded sounds as map markers** so that I can **explore sounds based on their location**. [(#31)](https://github.com/nacht-falter/sonic-explorers/issues/31)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see a map with all uploaded sounds as map markers.
- [x] The user can click on a map marker to open a popup with the sound's details including an audio player.
- [x] The user can click on a link in the popup to access the sound detail page.


### Tasks
- [x] Create Map component 
- [x] Fetch all sounds from the API
- [x] Loop over results and create location marker for each sound
- [x] Add sound details to marker popup

👉 Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Geolocation
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Map%20view
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Could-Have

<hr>

</details>

✅ As a **user**, I can **filter sounds displayed on the map** so that I can **limit the sounds displayed on the map to match specific criteria**. [(#32)](https://github.com/nacht-falter/sonic-explorers/issues/32)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can filter sounds displayed on the map by tags, by uploader and other criteria.


### Tasks
- [x] Add search bar to map view
- [x] Add search query to API request and fetch new data if query exists
- [x] Update sounds data

👉 Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Geolocation
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Map%20view
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Could-Have

<hr>

</details>

### THEME: User Experience

<hr>

#### EPIC: Navigation

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **user**, I can **navigate through the application intuitively** so that I can **easily find the features I am looking for**. [(#33)](https://github.com/nacht-falter/sonic-explorers/issues/33)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see a navigation bar with links to the most important features, like Explore, Feed, Liked, Profiles, Map etc.
- [x] The user can see links to sign up/log in or log out depending on whether they are logged-in or not.


### Tasks
- [x] Install and setup react-router-dom
- [x] Create NavBar component
- [x] Import NavBar component
- [x] Add css module for NavBar
- [x] Conditionally display nav items depending on if user is authenticated and staff user.


👉 Completed in [Sprint 1](https://github.com/nacht-falter/sonic-explorers/milestone/2?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Experience
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Navigation
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

<hr>

#### EPIC: Responsive Design

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **user**, I can **access the application from different devices with a responsive and coherent design** so that I can **have a constistent user experience on all devices**. [(#34)](https://github.com/nacht-falter/sonic-explorers/issues/34)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The website is responsive and displays correctly on all screen sizes.
- [x] The website has a consistent design on all pages.

### Tasks
- [x] Use responsive layout in all components and all pages
- [x] Make sure that all text has enough space or wraps
- [x]  Use consistent colors, fonts, and font sizes on all elements.

👉 Completed in [Sprint 5](https://github.com/nacht-falter/sonic-explorers/milestone/6?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Experience
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Responsive%20Design
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ As a **user** I want to **see messages as feedback for my actions within the application** so that I can **know if my actions were successful**. [(#35)](https://github.com/nacht-falter/sonic-explorers/issues/35)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can see appropriate messages as feedback for user actions.

### Tasks
- [x] Create Message component
- [x] Add function for displaying messages to App.js
- [x] Pass function for creating messages to child components

👉 Completed in [Sprint 1](https://github.com/nacht-falter/sonic-explorers/milestone/2?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20User%20Experience
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Navigation
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Could-Have

<hr>

</details>

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As a **user**, I can **access an audio player** so that I can l**isten to my own and other user's sounds**. [(#38)](https://github.com/nacht-falter/sonic-explorers/issues/38)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] There is an audio player for listening to sounds.
- [x] The user can click on play and listen to a sound.
- [x] The user can pause and resume the playback.
- [x] The user can see how long the sound is an the playback progress.

### Tasks
- [x] Create audio player component
- [x] User wavesurfer.js for audio playback and waveform rendering
- [x] Audio player component accepts audio url as input.

👉 Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Sound%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Sound%20Detail
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

✅ As a **user**, I can **scroll down in a list of sounds and see more sounds appear in the list as I continue** so that I can **have short loading times and a smooth user experience**. [(#40)](https://github.com/nacht-falter/sonic-explorers/issues/40)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] When the user reaches the bottom of a list and there are more items available, more data is fetched from the API and displayed to the user.

### Tasks
- [x] Install react-infinite-scroll-component
- [x] Create utility component for fetching more data from the API
- [x] Add infinite scroll component to sound list page

👉 Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Sound%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Listing%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Should-Have

<hr>

</details>

✅ https://github.com/nacht-falter/sonic-explorers/labels/MVP As **the owner of a sound**, I can **delete sounds** so that I can **remove sounds I don't need anymore**. [(#42)](https://github.com/nacht-falter/sonic-explorers/issues/42)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [x] The user can click on a delete button to delete a sound.
- [x] The user will be asked for confirmation.
- [x] The sound will be deleted from the database.

### Tasks
- [x] Add delete button to sound detail component
- [x] Add confirmation modal component to confirm deletion
- [x] Create handleDelete function and call it from confirmation modal

👉 Completed in [Sprint 3](https://github.com/nacht-falter/sonic-explorers/milestone/4?closed=1)

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Sound%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Sound%20Editing
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Must-Have

<hr>

</details>

## User Stories Not Included in Current Scope

ℹ️ The following user stories were not included in the current scope of the project.

As a **registered user**, I can **record a sound file** so that I can **create and share new sounds on the spot**. [(#7)](https://github.com/nacht-falter/sonic-explorers/issues/7)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [ ] The user can record a sound file.
- [ ] The user can replay the recording.
- [ ] The user can re-record the sound file.
- [ ] The user can submit the form.
- [ ] The user is redirected to the sound detail page.

👉 Not completed, prioritized as *Won't-Have*

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Sound%20Management
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Sound%20Upload
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Won%27t-Have

<hr>

</details>

As a **registered user**, I can **sort and filter the list of sound files** so that I can **easily find specific sounds**. [(#12)](https://github.com/nacht-falter/sonic-explorers/issues/12)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [ ] The user can sort the list of sound files by date, by popularity and other criteria.
- [ ] The user can filter the list of sound files by tags or by uploader.
- [ ] The user can see the number of results for each filter.

👉 Not completed, prioritized as *Won't-Have*

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Discovering%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Searching%20and%20Filtering%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Won%27t-Have

<hr>

</details>

As a **registered user**, I can **see a widget with a list of the most popular sounds** so that I can **see which sounds I should listen to**. [(#16)](https://github.com/nacht-falter/sonic-explorers/issues/16)

 <details>

<hr>

<summary>Show details</summary>

### Acceptance Criteria
- [ ] The user can see a widget with a list of the most popular sounds.
- [ ] The user can click on a sound to access the sound detail page.

👉 Not completed, prioritized as *Won't-Have*

https://github.com/nacht-falter/sonic-explorers/labels/THEME%3A%20Discovering%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/EPIC%3A%20Listing%20Sounds
https://github.com/nacht-falter/sonic-explorers/labels/PRIORITY%3A%20Won%27t-Have

<hr>

</details>
