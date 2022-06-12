# Pages to be added in voting app

- Home page
- Create poll page
- viewing all polls on a page (maybe add some pagination)

## Features on the create poll page

- [x] Create a poll
- [x] Add upto six options in a single poll
- [x] Only logged in user can create a poll and vote on a poll
- [x] Store the poll results in the database
- [x] All polls will be associated to a particular user
- [x] Add the navbar bar at the top of the page to navigate
- [x] Add ablibty to vote in the all polls section
- [x] Add pagination to All polls page
- [x] Make a user Schema
- [x] Make a client side and server side route so that we can view a particular poll
- [ ] Make the app look pretty
- [x] Make a proper landing page for the web app
- [x] Users should not be able to vote on the poll that they already voted who are logged in
- [x] User should be logged in to vote
- [ ] Make backend safe using different mentioned in the express document
- [x] Add a footer in the app
- [x] Add a logo
- [ ] Add a background color to the web app
- [x] Add a loading svg
- [ ] Add error boundary
- [x] User redirects to it's when a new poll is made
- [x] Fix the links in the bread crumb when the app is in mobile layout
- [x] Fix the create all polls bug
- [x] Add sharable links to all polls for social media platforms
- [x] Add category to the create poll route
- [x] Make create poll form reponsive
- [x] Fix margin of a single poll after the vote has been submitted0

### Seed data for poll create form

- Title -> Top 3 programming languages that make developer life easy
- Description -> blah blah blah wjjfoijeiogjewjg
- Kotlin, JavaScript and Rust

Adding timer in a poll

### User Schema

- Name
- Email
- Password
- All the polls that the user is associated with
- Total number of votes on his/her poll
- Profile page of a user

### Profile page

- [x] Username
- [x] Number of polls made by the user
- [x] logout button
- [x] View all pages made by the User
- [x] Make card for total polls and total votes

### Bug fixes

- Add a 404 page for the path that does not exist
- Add proper error handling and responses for backend 
- Fix the proxy connection issue in React

### idea for making poll choice div

1. Make the original div position relative
2. Make the inner div absolute
3. set z-index of absolute div higher
4. and make the original div transparent

### Logic for checking if the user has voted a poll or note

1. Check if the current signed in user is present in the userVoted array
2. If the user is present then don't show the vote button and render the after submit state
3. Else render the vote button and let the user vote

### Login related bug fixes

- [x] Make it so that the user is logged in even after refresh
- [x] [Blog for persistent login in React](https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/)
- [x] Create proper error handling in the backend for if the user password is wrong or if the user exist or not
- [x] Make a proper flash message if the user password or username is wrong or not
- [x] Make the user login instantely after the user is registered in the app
- [ ] Make proper transition when the user is checked if it has voted in the poll or not

### Handling an unregistered user votting on a poll

- Send a cookie to the client browser to give it a random id 
- Whataever changes by the user are only ones
- When the user login or register then destroy that cookie and set it to null so that the user is only count as one

### Handling authentication using JSON web tokens

- When the user logs in the user , create a token and supply it to the front end
- Attach this token to the authorization header of every request
- Store the JWT in the cookie as we need to perform some checks during reloading
