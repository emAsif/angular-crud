## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1. This application covers basic features Routing, Navigation and styling of an angular app. This application is scalable. 

A login screen with fake login functionality. user will be automatically logout after fifteen minutes.

Provided a token-based authentication functionality with fake tokens.Used guards and interceptors

List page.
All the pages are accessable upon successuly logging in.

URL: home/start displays the landing page of the application. 

URL: home/users displays currently registered users by fetching data from a fake back end api.

URL: home/user/:id at this path A new user can be created by navigating to the create section from side menu.
this also fakes an http request and saves the user data in view section.

Used a reactive form to create a new user. The fields are first and last name, a username, address, a date picker for the date of birth and a submit button also a reset button. 
User can see three types of messages based on the form state.

Front end field validation: 

restricted all strings to max 20. Also username cannot have space.
The submit feature fakes an HTTP request and a loading indicator and displays a success message to the user and redirects to view page. 
And the new user will be shown in the view section.

STYLING
Flex layout has been used along with less using mixins, keyframes and common functions features. Implemented a basic application theme with some colors, typography options for titles, paragraphs, and labels and add styling for HTML atomic components (inputs, buttons). user can resize the font. "variables" file in the styles section manages app theme colors.  whole application feature a responsive layout that is usable on tablets and mobile phones as well.

NAVIGATION

The navigation bar features a hamburger icon that toggles a sidebar. The sidebar has links to both child pages and a "sign out" link that logs the user out and redirects to the login page.


IN CASE OF ANY AMBIGUITY, PLEASE CONTACT THE AUTHOR OF THE APPLICATION.
