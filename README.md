## Getting Started

These instructions will get you a copy of the project up and running on your
local machine.

## Installation

This is node.js API. Installation is done using npm install command:

```
$ npm install
```

## Start the App

```
$ npm start
```

All the packages needed for this API to works will be installed with this above
command.

### Clone

- Clone this repo to your local machine using
  `https://github.com/Tolufolorunso/crud-app.git`

### The HTTP verbs used

- GET: To retrive resources
- POST: TO create resources
- PATCH: To Update resources
- DELETE: To Delete resources

## Handling all the four routes

### Create a User Using HTTP POST Method

```
// Endpoint is

 /users

 {
    "name": "kola",
    "email": "kola@yahoo.com",
    "country": "USA "
}

```

### Get All Users Using HTTP GET Method

```
// Endpoint is

 /users

```

### Get A single User Using HTTP GET Method

```
//Endpoint is

/users/:userID

```

### Update a User Using HTTP PATCH Method

```
//Endpoint is

/users/:userID
{
    "name": "kola",
    "email": "kola@yahoo.com",
    "country": "USA"
}

```

### Delete User Using HTTP DELETE Method

```
//Endpoint is

/users/userID

```
