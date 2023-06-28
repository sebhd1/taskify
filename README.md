# Taskify
![Mockup image](docs/readme/am-i-responsive.png)

[View live website](https://taskify-ms-a3360d47713a.herokuapp.com/)


## Table of Contents
  1. [About](#about)
  2. [Project Goals](#project-goals)
  3. [User Experience](#user-experience)
      1. [Target Audience](#target-audience)
      2. [User Requirements and Expectations](#user-requirements-and-expectations)
      3. [User Stories](#user-stories)
      4. [Site Owner Stories](#site-owner-stories)
  4. [Technical Design](#technical-design)
      1. [Agile Design](#agile-design)
      2. [CRUD Functionality](#crud-functionality)
      3. [Colours](#colours)
      4. [Fonts](#fonts)
      5. [Wireframes](#wireframes)
  5. [Technologies Used](#technologies-used)
      1. [Coding Languages](#coding-languages)
      2. [Frameworks and Tools](#frameworks-and-tools)
      3. [Libraries](#libraries)
  6. [Front-End](#front-end)
      1. [React](#react)
  7. [Back-End API](#back-end-api)
      1. [Django REST Framework](#django-rest-framework)
  8. [Features](#features)
  9. [Future features / improvements](#future-features--improvements)
  10. [Validation](#validation)
      1. [HTML](#html-validation)
      2. [CSS](#css-validation)
      3. [ESLint JavaScript JSX Validation](#eslint-javascript-jsx-validation)
      4. [Chrome Dev Tools Lighthouse](#chrome-dev-tools-lighthouse-validation)
      5. [WAVE Validation](#wave-validation)
  11. [Testing](#testing)
      1. [Device Testing](#device-testing)
      2. [Browser Compatibility](#browser-compatibility)
      3. [Manual Testing](#manual-testing)
  12. [Bugs](#bugs)
  13. [Deployment](#deployment)
      1. [Heroku](#heroku)
      2. [Forking GitHub Repo](#forking-the-github-repository)
      3. [Clone a GitHub Repo](#clone-a-github-repository)
  14. [Credits](#credits)
      1. [Tutorial](#tutorials)
      2. [Code](#code)
      3. [Literature](#literature)
      4. [Misc](#misc)
  15. [Acknowledgements](#acknowledgements)


## About

Taskify web app has been developed to provide user's the chance to create and manage tasks online!.

## Project Goals

The goal for this project was to build a productivity platform in which users can create tasks where other users who feel they can help, can carry out the work as described in the task detail.
Tasks can be assigned to members and packs can also be created to group tasks together.


The key functionality aspects:

- The App to be simple and user intuitive navigation across all pages
- User authentication
- User interaction via tasks, comments and packs
- User's to have their own profiles with brief description, profile image and tab group consisting of their owned tasks, packs and other users tasks which they have been assigned
- CRUD functionality for task, comments, packs and their profile
- Tasks filtering by keyword search, new tasks and high priority tasks
- Responsiveness to allow pleasant usage of the app across a range of devices with varying display sizes


## User Experience

### Target Audience

- People who would like help with completing a task
- People who would like to keep track of outstanding tasks they may have
- People who are looking for some tasks to help others with


### User Requirements and Expectations

- A site which provides a high level of interactiveness between users
- Links and functions to act as expected
- Notification to provide feedback on expected function outcomes (user feedback )
- Simple "to the point" content that a user can easily digest
- Accessibility for impaired users
- Responsiveness to allow pleasant use across devices of different screen sizes 



### User Stories

1. As a new user, I can register an account with Taskify so that I can become a member and use the app as intended.
2. As a user, I can use the navigation bar so that I can seamlessly navigate around the app.
3. As a user, I can see visual indicators for example of having watched / unwatched a task so that I can tell what my status of watching is.
4. As a user, I can watch and unwatch tasks so that I can keep up to date with that particular task via a filtered list.
5. As a user, I can view a list of my watched tasks so that I can focus on content I wish to view.
6. As a user, I can use the search bar on the Task list section so that I can find particular tasks easier.
7. As a user, I can delete my tasks so that I can permanently remove tasks I do not wish to keep.
8. As a user, I can edit my tasks so that I can correct spelling mistakes I may have entered into the task information fields.
9. As a user, I can view task comments so that I can obtain more information on the task in question.
10. As a user, I can comment on other tasks so that I can interact with other users.
11. As a user, I can edit or delete my comment on a task in case of input error.
12. As a user, I can manage my tasks so that I can add, edit or delete tasks as needed.
13. As a user, I can request a password so that I can log back into my account if I have forgotten my password.
14. As a user, I can log in so that I can access my account, view my profile, tasks and other user's tasks.
15. As a user, I can log out so that other users using the same device cannot access my account.
16. As a user, I can have a profile page so that I and other users can view my list of tasks, packs and assigned tasks.
17. As a user, I can update my profile so that my profile can stay up to date with my latest information.
18. As a user, I can add a profile picture so that other members can easily recognize my tasks or comments.
19. As a user, I can view the Home Page so that I can understand what the website is about, create an account or log in.
20. As a user, I can display basic info on my profile page so that other members can learn more about me.
21. As a user, I can search for tasks via a task list or search bar so that I can find specific tasks.
22. As a user, I can fill in a contact form so that I can enquire about issues I may have regarding the app.
23. As a user, I can receive feedback so that I can confirm whether the contact form submission was successful or not.
24. As a user, I can scroll through the latest tasks on the app so that I can find new tasks to complete.
25. As a user, I can browse a list of user accounts so that I can view that particular account.
26. As a user, I can create tasks so that I can partake in the main purpose of the site.
27. As a user, I can create packs so that I can group tasks together.
28. As a user, I can delete my packs so that I can permanently remove packs I do not wish to keep.
29. As a user, I can edit my packs so that I can correct spelling mistakes, or I may have entered into the pack information fields.

### Site Owner Stories

30. As the site owner, I would want to validate users' data entries on sign up so that users can create a log in which meets the requirements.
31. As the site owner, I would want to ensure only logged-in users can post from their account and edit their profile so that data privacy is ensured.
32. As the site owner, I would want to have the ability to remove tasks and task comments so that I can keep the app clean and friendly.
33. As the site owner, I would want the site to be fully responsive so that users can use it across multiple devices and create a good user experience.
34. As the site owner, I would want to use the app search function so that I can search for particular tasks by their title.
35. As the site owner, I would want a 404 error page so that users do not have to use the back navigation button if an error occurs.



## Technical Design

### CRUD Functionality

Taskify handles data with full CRUD Functionality:
<br>
- Create -  Users can create, an account, profile, tasks, comments, packs, contact messages and watch objects.
- Read - Users can view the tasks, comments, packs of other users and also the profiles of these users.
- Update - Users can update their profile, password, posted tasks, packs and watch status of tasks via the interactive forms and buttons on the site.
- Delete - Users can delete tasks, comments, packs and watch objects via the interactive buttons on the site.


## Technologies Used

### Coding Languages

- HTML
- CSS
- Javascript
  - React (^17.0.2)

### Frameworks and Tools

- [Axios](https://axios-http.com/docs/intro) - Axios is a Promise API. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - Library to decode JSON Web token. Justification: I used JWT to securely transmit data and to have the ability to verify that the content has not been tampered with.
- [React 17](https://17.reactjs.org/) - JavaScript library for building user interfaces. Justification: To be able to showcase my newly learnt skills and for building interactive user interfaces quickly.
- [React-Bootstrap 1.6.3](https://react-bootstrap-v4.netlify.app/) - CSS framework. Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - React library. Justification: I used this component to load content (tasks/comments/users) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - Javascript framework for routing. Justification: I used this library to enable navigation between views of components and to have the ability to control what is presented to the user based on the URL they have accessed in the browser. 
- [React Multi Select Component](https://www.npmjs.com/package/react-multi-select-component) - React Library. Justification: I used this component to have the ability to select multiple tasks to assign to a pack.

- [Am I Responsive](http://ami.responsivedesign.is/) - Website responsive test site. Justification: I used this to create the multi-device mock-up at the top of this README.md file
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) - Developer tool. Justification: I used this for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) - File storage. Justification: I used this to store static files
- [Font Awesome](https://fontawesome.com/) - Icon library. Justification: I used this to style the site with icons.
- Validation:
  - [WC3 Validator](https://validator.w3.org/) - HTML Validator. Justification: I used this to validate the applications HTML code
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) - CSS Validator. Justification: I used this to validate the applications CSS code
  - [ESLint](https://eslint.org/) - JavaScript Validator. Justification: I used this to validate applications JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) Site auditing tool. Justification: I used this to validate performance, accessibility, best practice and SEO of the application
  - [Wave](https://wave.webaim.org/) - Site accesibility auditor. Justification: I used this to evaluate the applications accessibility

### Libraries

#### Installed Libraries

| Package                         | Version |
|---------------------------------|---------|
| axios                           | 1.3.4   |
| bootstrap                       | 4.6.0   |
| jwt-decode                      | 3.1.2   |
| react-bootstrap                 | 1.6.3   |
| react-dom                       | 17.0.2  |
| react-infinite-scroll-component | 6.1.0   |
| react-multi-select-component    | 4.3.4   |
| react-router-dom                | 5.3.0   |
| react-scripts                   | 5.0.1   |
| react-scroll                    | 1.8.9   |
| web-vitals                      | 2.1.4   |

## Front-End

There were various pages created and used in this application

- auth - The auth page group consisted of the following files:
	- LoginForm.js - This file handles the Login form
	- SignUpForm.js - This file handles the Sign-up form

- comments - The comments page group consisted of the following files:
	- Comment.js - This file returns the comments
	- CommentEditForm.js - This file handles the Comment Edit form
	- CommentForm.js - This file handles the create comment form

- contact - The contact page group consisted of the following files:
	- ContactForm.js - This file handles the contact form

- dashboard - The dashboard page group consisted of the following file:
	- Dashboard.js - This file returns the auth users main page (dashboard)

- landing - The landing page group consisted of the following file:
	- Landing.js - This file returns the main page to an anonymous user

- packs - The packs page group consisted of the following files:
	- Pack.js - This file returns the Pack and all its related info
	- PackCreateForm.js - This file handles the Pack create form 
	- PackDetail.js - This file returns the pack detail
	- PackEditForm.js - This file handles the Pack edit form
	- PackListings.js - This file returns the list of packs

- profiles - The profiles page group consisted of the following files:
	- EditPasswordForm.js - This file handles the Edit Password form
	- EditProfileForm.js - This file handles the edit profile form
	- Profile.js - This file returns the profile section
	- ProfilePage.js - This file returns the entire Profile page
	- UserProfiles.js - This file returns all users of the site


- tasks - The tasks page group consisted of the following files:
	- Task.js - This file returns the Task and all its related info
	- TaskCreateForm.js - This file handles the Task create form 
	- TaskDetail.js - This file returns the task detail
	- TaskEditForm.js - This file handles the Task edit form
	- TasksListings.js - This file returns the list of Tasks

## Back-End API

### Django REST Framework

The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found [here](https://taskify-api-c1fb8f20846a.herokuapp.com/).


## Features
