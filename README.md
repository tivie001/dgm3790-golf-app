## Entertainment App :musical_note:
## MAIN FEATURES:
----------------------------------------------------
1. Music API
    - A user can search for their favorite or any song, artist, album, etc. here in this component. A user types in what they
    want to search for and buy clicking "SEARCH" or hitting enter it brings up a table full of results that reflect the user's search.
    - After the search results are rendered, a table fades into view with details about the song, artist, album, etc. A user
    can also hover over a table row and click on the album picture to play a preview of the song.
2. Movie API
    - A user can simply view the details some top movies of all time here.
3. Login
    - A user can log in 2 ways into the app to use it:
        - Login in to the app which will require a name, a valid email, and a valid password (8 characters or more).
        - The second way is through Auth0, when logging in click "LOGIN WITH AUTH0", which will redirect a user to the 
        Auth0 authentication portal where a user can sign up or login using their basic login information or Google login.
        This will then redirect back into the Entertainment app and in the corner a user will be able to see their name, and their
        Google profile picture if they have one/chose to log in using Google.
        - When done with the app a user can click logout by clicking the exit icon in the top right corner.
    
## Requirements:
----------------------------------------------------
Effectively use conditional logic and JavaScript array methods(e.g. Filter, Map, Reduce, Find) to render large lists.
- I used conditional info to display the login dialog box in **Login.js**.
- I used JS array methods like **Map** in **MusicTable.js** and **Movies.js** to render long list of data from the API.
Encapsulate your code as React functional components.
- There is functional components in **Login.js, Header.js, Home.js, Movies.js, MusicTable.js, and Search.js**.
Work with command-line tools and NPM to create and manage your project within a real development toolset.
- I used NPX to create the React App initially, then I used NPM to manage my tools & packages (i.e. React Router, Formik).
Allow communication between components using props and the Context API.
- I implemented the ContextAPI so the components could talk to each other. A good use case for this was I needed the Search Box component 
to communicate to the Music Table component. So, I used the Context API (SearchContext, & MusicDataContext) to return user query information,
back and forth to the components.
Present a form for user input that provides useful form validation and feedback.
- The **login form dialog** validates the user information if they choose to login normally. Or they can get validated by using the Auth0 portal.
Create at least 5 custom components and use it within at least two of your other components.
- List of components I used:
    - **Header.js** - This contains the header & side drawer components, and it is rendered everywhere throughout the app.
    - **Home.js** - The main dashboard to the app where a user can look up music or movies.
    - **Login.js** - This component is a dialog box that allows the user to login. It is used as the default component when a user finds the app.
    - **Movies.js** - A component that renders a list of movies to the user.
    - **MusicTable.js** - A component that renders queried music data from the user. The Search component is used within this component as well.
    - **Search.js** - A component that returns a search box that allows the user to search for music. This component is used in the MusicTable component.
Use a mix of CSS animations and Transition Component transitions to enhance some aspects of your project.
- I used CSS transitions for majority of the animations within the app. When a user navigates to a different part of the app,
elements fade in and out. When a user queries for music, the list fades in. And lastly when a user navigates to the movie portion of the
app the movie elements fade in from the left as well.
Connect to a server using HTTP and display retrieved data.
- I connected to the iTunes Search API [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
for all my data.
Provide at least 3 different routes with navigation between them using React Router.
- There are 3 different routes within my app (which can be found in the side drawer from the hamburger menu or the home dashboard)"
    - Home
    - Music
    - Movies
Manage your application's state using Hooks and the Context API.
- Like a mentioned before I used the Context API (i.e. contexts folder -> LoginContext, MusicDataContext, SearchContext).
- I also used React hooks like useContext, useState, useEffect to manage the state of my data.
    - **useContext** - I used this hook in all my components (i.e. Search.js, MusicTable.js).
    - **useState** - I used this hook in many components as well (i.e. Login.js).
    - **useEffect** - I used this hook once in the Movies.js component.
Structure, document, and deploy your final project code according to common industry practices.