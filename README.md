# Clash of Issues - Server

Github Analytics server

Authors: Adrien Allemand & Loyse Krug

Link to client side: https://github.com/AdrienAllemand/TWEB-ClashOfCommit-Client

## Clash of Issues

Clash of issues is an app that compare the number of resolved issues and commits of each member of your team. 

Once the client is running, you will have to connect to your github account.

After that, you'll be able to chose, among your owned repositories,  which one you want to analyse. 



## Running the app

### 1. Clone this repo

```sh
https://github.com/LoyseKrug/TWEB-ClashOfCommit-Server.git
```

### 2. Add Environment Variables
Copy the `.env.default` file and rename it to `.env`.
```sh
$ cp .env.default .env
```

then edit the `CLIENT_ID` and `SECRET` environment variables. 

To get those variables you'll have to create a Github OAuth app. You can create this app using the link [Github developer settings](https://github.com/settings/developers)

### 3. Install project dependencies
```sh
$ npm install
```
### 4. Run the app

You can start the server by running
```$
$ npm start
```

or you can start the server in development mode. This command uses [nodemon](https://github.com/remy/nodemon) to watch changes in your code and automatically restart the server.

```
$ nodemon app.js
```

run the  tests

```
$ npm test
```

