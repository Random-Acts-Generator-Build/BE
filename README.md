# BE


API
---------------

base URL: https://generate-random-acts.herokuapp.com

#### Test
a GET request to **base URL** will return a success message if the API is working and has been accessed correctly.

Response

{
    api: 'up',
}

## Register and Login

###### Register - /api/auth/register
a POST request to **/api/auth/register** will create a new user and return an object containing an authentication token.
```
body = {
    "username": "username",
	"password": "password"
}
```

###### Login - /api/auth/login
a POST request to **/api/auth/login** will log in and return an object containing an authentication token.
```
body = {
    "username": "username",
	"password": "password"
}
```



## Users - all needs to be protected

###### Get All users
a GET request to **/api/users** will return a list of all registered users

###### User by ID
a GET request to **/api/users/:id** will return the user linked with the id provided in params.

###### Update User

###### Delete User





## Acts

###### All acts
a GET request to /api/acts will return a list of all acts stored in the acts table.

###### Add acts
a POST request to /api/acts and an id of an existing user in the params will add an act to the db.

###### Update Acts

###### Delete Acts



## Contacts

###### All contacts
a GET request to /api/users/:id/contacts will return a list of all contacts associated with a given user.

###### Add contacts
a POST request to /api/users/:id/contacts will add a contact associated with a specific user ID to the db.

###### Update Contacts

###### Delete Contacts