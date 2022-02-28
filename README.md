# Interview Scheduler

Is a react application that allow user to view/add/edit/delete appointments.

## Setup

Install dependencies with `npm install`.

## Scheduler-API


It is recommended to use the following API as the server.
For setup of the API, please see this link:
[Scheduler-API Link](https://github.com/lighthouse-labs/scheduler-api)



## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Cypress Testing

```sh
npm run cypress
```

## Dependencies

```sh
axios v0.25.0
classnames v2.2.6
normalize.css v8.0.1
react v16.9.0
react-dom v16.9.0
react-hooks-testing-library v0.6.0
react-scripts v3.0.0
@testing-library/react-hooks v1.0.4
```

## Dev Dependencies

```sh
@babel/core v7.4.3
@storybook/addon-actions v5.0.10
@storybook/addon-backgrounds v5.0.10
@storybook/addon-links v5.0.10
@storybook/addons v5.0.10
@storybook/react v5.0.10
@testing-library/jest-dom v4.0.0
@testing-library/react v8.0.7
babel-loader v8.0.5
node-sass v4.14.0
prop-types v15.8.1
react-test-renderer v16.9.0
```

## Screenshots

User is able to view existing interview appointments also the remaining spots in each day of the week
![](https://github.com/daniel-cy-lu/scheduler/blob/master/screenshots/Screen%20Shot%202022-01-27%20at%205.26.36%20PM%20(2).png?raw=true)

User is able to select the day and time he/she is available and click on the add-button on an empty spot to trigger an input form
![](https://github.com/daniel-cy-lu/scheduler/blob/master/screenshots/Screen%20Shot%202022-01-27%20at%205.27.33%20PM%20(2).png?raw=true)

In the input form, user is able to enter his/her name and select an available interviewer
![](https://github.com/daniel-cy-lu/scheduler/blob/master/screenshots/Screen%20Shot%202022-01-27%20at%205.28.08%20PM%20(2).png?raw=true)

User is able to save the interview appointment that he/she created
![](https://github.com/daniel-cy-lu/scheduler/blob/master/screenshots/Screen%20Shot%202022-01-27%20at%205.28.27%20PM%20(2).png?raw=true)

Users is able to cancel/delete interview appointments after a confirmation prompt
![](https://github.com/daniel-cy-lu/scheduler/blob/master/screenshots/Screen%20Shot%202022-01-27%20at%205.28.57%20PM%20(2).png?raw=true)

The appointment is deleted and the spots remaining is updated
![](https://github.com/daniel-cy-lu/scheduler/blob/master/screenshots/Screen%20Shot%202022-01-27%20at%205.29.21%20PM%20(2).png?raw=true)