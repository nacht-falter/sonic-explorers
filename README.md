# Sonic Explorers: Listen, Share, Connect 🌎🎙️

**Sonic Explorers** is a social media app dedicated to recording and sharing sounds.

In a world saturated with images and visual content, the sounds that surround us often go unnoticed, unless they are too loud or disruptive.
**Sonic Explorers** encourages you to open up your ears and sharpen your awareness of the diverse sounds of the world.
Whether you find yourself in the busy streets of a large city or enjoying the calm serenity of nature, record the sounds you encounter and share your sonic treasures with your friends and followers.

![Sonic Explorers Mockups](docs/screenshots/mockups.webp)

<hr>

**Key features:**

- **User Accounts & Profiles**: Create an account and customize your profile.
- **Sound Upload with Geolocation**: Share your sounds and add location data.
- **Tagging System**: Organize your sounds with tags.
- **Search for Sounds**: Find sounds by title, description, user, or tag.
- **Sound Map View**: Explore all sounds on a map.
- **User Interactions**: Like and comment on sounds, follow users you like.
- **Notifications**: Stay updated on user interactions and new content.
- **Report Inappropriate Content**: Help make the app a safe space for everyone.

<hr>

The deployed application can be found here: [Sonic Explorers](https://sonic-explorers-e821805686e9.herokuapp.com/)

## Table of Contents

...

## Features

### Existing Features

- **User authentication and profiles**: Users can create an account, log in and log out. They can customize their profile by adding a profile picture and a short bio.
- **Sound upload with geolocation**: Users can upload sounds and add location data. They can also edit and delete their sounds.
- **Tagging system**: Users can add tags to their sounds.
- **Sound list view with infinite scroll**: Users can see lists of sounds (all sounds, sounds by followed users, liked sounds). For better performance the lists are paginated, and additional sounds are loaded when the user scrolls to the bottom of the page.
- **Sound search**: Users can search for sounds by title, description, user, or tag.
- **Sound map view**: Users can view all sounds on a map.
- **User interactions**: Users can like and comment on sounds. They can also follow other users.
- **Notifications**: Users receive notifications for new likes and comments on their sounds, and for new sounds by users they follow. Staff users receive notifications for new reports.
- **Reporting inappropriate content**: Users can report inappropriate content.

#### User Authentication

- Signed-out users can see a list of all sounds and search for sounds, and explore the sound map. To use the other features of the app, they need to create an account and sign in.

![Screenshots Signed-out users](docs/screenshots/authentication1.webp)

- After signing in, users can access their feed, their liked sounds, and their notifications from the bottom navigation bar.
- Users can also upload sounds by clicking on the upload button in the top navigation bar.

![Screenshots Signed-in Users](docs/screenshots/authentication2.webp)

#### User Profiles

- Signed-in users can click on their username in the top navigation bar to access their profile.
- Users can edit their profile by clicking on the menu button in the top-right corner of the profile page.
- Additionally, they can change their username and password by clicking on the corresponding buttons on the profile page dropdown menu.
- Users can follow other users by clicking on the Follow button on their profile page or in the *Popular Explorers* widget (only available on larger screens).

![Screenshots User Profile](docs/screenshots/profiles.webp)

#### Sound Upload

- Users can upload sounds by clicking on the upload button in the top navigation bar.
- On the sound upload page, users can upload a sound file and add a title, description, location data, tags, and an image to their sound.
- Users can listen to their sound before uploading it by clicking on the play button.
- Location data can be added automatically if the user grants the application access to their current location. Alternatively, users can pick a location on a map.
- Users can add up to 15 tags to their sound by entering them as comma-separated values.
- After submitting the form, the user will be redirected to the sound detail page, which can also be accessed by clicking on a sound's title.

![Screenshots Sound Upload](docs/screenshots/upload.webp)

#### Editing and Deleting Sounds

- Users can edit and delete their sounds by clicking on the dropdown menu button on the sound detail page.
- Users can also report inappropriate sounds for inappropriate content by clicking on the report button on the sound detail dropdown menu.

![Screenshots Sound Detail](docs/screenshots/sound_dropdown.webp)

#### Comments and Likes

- Signed-in users can comment on sounds by submitting the comment form on the sound detail page.
- New comments will appear underneath the sound detail and can be edited or deleted by clicking on the link in the comment dropdown menu.
- The number of comments will appear underneath the sound's details.
- Users can like sounds by clicking on the heart icon on the sound detail page.

![Screenshots Comments and Likes](docs/screenshots/comments.webp)

#### Reports

- Staff users can access all reports by clicking on the reports link in the user dropdown menu in the top navigation bar.
- Staff users will also receive a notification when a new report is submitted.
- Staff users can review reports and mark them as closed from the reports page.
- If non-staff users try to access the reports page by entering the URL in the browser, they will see an *access denied* message.

![Screenshots Reports](docs/screenshots/reports.webp)

### Future Features

The following features have not been included in the current scope of the project, but might be added in the future:

- Users can record sounds directly in the browser instead of uploading pre-recorded sounds.
- Provide users with basic sound editing functionality like trimming, fading, etc.
- Users can search for sounds by address, city, country, or continent.
- Users can reply to comments.
- Users can send private messages to other users.
- Users can set their sounds to private or make them available only to their followers.
- Staff users can delete inappropriate content and block users.
- Gamification features:
    - Challenges for finding and recording specific sounds or going to specific places.
    - Users can earn badges for certain achievements (e.g. number of sounds uploaded, number of likes, completing challenges).
