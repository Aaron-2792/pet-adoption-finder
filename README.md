Pet Adoption Finder

This is a comprehensive capstone project built to demonstrate a full range of modern web development skills by creating a real-world, data-intensive application. The goal of this project is to provide a clean, fast, and user-friendly web application that makes it easier for people to find and adopt a pet.

The application is built with React and uses the official Petfinder API to pull live data from thousands of animal shelters.
Key Features

    Advanced Pet Search: A global search bar with filters for animal Type, Size, Age, and Location.

    User Favorites System: Allows users to "favorite" pets. Selections are saved locally in the browser and persist between sessions.

    Dedicated Favorites Page: A page that displays a grid of all the user's favorited pets.

    Pagination System: Full navigation controls to browse all pages of pet results.

    Pet Details Page: A dynamic page with comprehensive information for each pet, including an interactive image carousel.

    Responsive Design: A mobile-first design that works on all screen sizes.

Setup and Installation

To run this project locally, you will need Node.js, npm, and a Petfinder Developer account to get an API key.

    Clone the Repository:

    git clone https://github.com/Aaron-2792/pet-adoption-finder.git

    Navigate to the Project Directory:

    cd pet-adoption-finder

    Install Dependencies:

    npm install

    Create an Environment File:
    In the root directory of the project, create a new file named .env. Inside this file, you must add your personal Petfinder API credentials in the following format:

    REACT_APP_PETFINDER_API_KEY=your_api_key_here
    REACT_APP_PETFINDER_SECRET=your_api_secret_here

    Start the Development Server:

    npm start

    The application will open in your browser, typically at http://localhost:3000.

Getting Started with Create React App

This project was bootstrapped with Create React App.
Available Scripts

In the project directory, you can run:
npm start

Runs the app in the development mode.

Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.

You may also see any lint errors in the console.
npm test

Launches the test runner in the interactive watch mode.

See the section about running tests for more information.
npm run build

Builds the app for production to the build folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about deployment for more information.
npm run eject

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.
Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting
Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration
Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
npm run build fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
