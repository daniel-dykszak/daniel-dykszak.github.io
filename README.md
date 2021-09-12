# Event plus

## Brief description of the application

Application allows you to search, add to favorites and inform about time that you will visit place.
It is device based so there is no need to registration. 

### Architecture 

React with [Redux](https://redux.js.org/) is being used as a main framework.
[Create-react-app](https://github.com/facebook/create-react-app) template has been used for no build configuration option, 
of course any configuration setup can be changed via ejecting application ```npm run eject```.
[PWA](https://en.wikipedia.org/wiki/Progressive_web_application) concept has been implemented using [Workbox](https://developers.google.com/web/tools/workbox/guides/get-started).
Application uses localstorage as storage for favorites list. Bootstrap with sass has been used to reduce forging styles 
and provide RWD with Mobile first approach. 


#### List of frameworks used: 
- React - for template engine purpose. 
- [React-redux](https://redux.js.org/) - for state management. 
- [Boostrap 5 with sass](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - for basic styling providing.
- [Workbox](https://developers.google.com/web/tools/workbox/guides/get-started) - for providing PWA capabilities.
- [react-router](https://reactrouter.com/) - for providing basic routing.
- [cypress](https://www.cypress.io/) - for user like tests.
- [express](https://expressjs.com/) - for simple mock server and production like file server.
- [jest](https://jestjs.io/) - for unit tests 

## Development setup

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run cy:run`

Launches tests in chrome to simulate user like behaviour tests. (requires prd like server to serve files)

### `cd server && node index.js`

Start simple server for serving files and mocks. Runs independently of build so those two commands are needed to start production like env.


## Google lighthouse results

Page/Device  | Mobile | Desktop
------------- | ------------- | -------------
Home page  | a |b
Event list page  | c | d
Event details  | e | f