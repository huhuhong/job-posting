This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn startServer`

Launch a mini json-server and expose RESTFul API

http://localhost:3001/jobs to view sample data in the browser.

### `yarn deploy:frontend`

**Note: pem file not check-in for security purpose, always run yarn build in order to deploy latest app changes**

Copy ./build folder and upload to AWS EC2 instance


### `yarn deploy:backend`
**Note: pem file not check-in for security purpose,

Copy ./server folder and upload to aws ec2 instance and perform pm2 restart
