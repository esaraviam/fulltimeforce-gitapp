# Fulltimeforce-gitapp

## Description:

This app is to complete the fulltimeforce technical assignment.

The goal of this test will be to create an app that shows git commit history on the same project you are working on. You need to do well-stated and defined commits while working on this test and regularly push them up.

## Solution:

to abord this i've split the code into two apps:

    - backend
    - frontend

#### Backend:

This app uses express and nodejs to create a server that will handle the requests.

also use ocktokit to create a github api client.

#### Frontend:

this app uses react, react-router , redux and redux-thunks to create a frontend that will show the commits.

## Installation

To run the app you need to run the following commands:

    backend:
        cd backend

            yarn install
            yarn start


    frontend:
        cd frontend
            yarn install
            yarn start

- backend server running on port 3001.

- frontend server running on port 3000.
