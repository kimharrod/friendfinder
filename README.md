# friendfinder
Best Friend Finder - a friend matching app


### Overview

This friend matching app is a full-stack site implemented with node and express.


### User Interface


Best Friend Finder works as follows:

1. Users are welcomed to Best Friend Finder on the site's landing page

2. There is a call to action button to take the quiz and be matched with a best friend

![Best Friend Finder landing page](http://fios.vc/FriendFinderLandingPage.png "Landing Page")

3. On the quiz page, users enter their name and a link to a photo 

4. Next, they react to ten statements using a 1 (strongly disagree) through 5 (strongly agree)

![Quiz questions](http://fios.vc/FriendFinderQuiz.png "Quiz question interface")

5. When the user hits submit, the app compares the user's total score to the potential friends who are already in the database 

6. The friend with the lowest absolute numerical difference is displayed in a modal view. Once the modal is dismissed, the user is returned to the landing page.

![Best Friend Match Display](http://fios.vc/FriendFinderMatchModal.png "Display closest match")


### Dependencies and Packages

The app requires the 'express', 'body-parser' and 'path' npm packages.

For this implementation, the friends data is stored in an array of JSON objects.