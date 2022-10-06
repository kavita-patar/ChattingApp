# ChattingApp
App Based Projects for Chatting


## Server Setup
1. Initialize the server's package.json

```
npm init
```
Fill the requireds else press enter.

2. Install the dependencies

```
npm install cors express nodemon socket.io
```

Note: 
-nodemon automatically restarts the server when any changes made.

-socket.io deals with lots of cors issue!!!

3. add in index.js file in server's root directory and add script in package.json

```
 "start": "nodemon index.js"
```

4. run the server

```
npm start
```

## Client Setup

### web

1. Initialize the react application

```
npx create-react-app .
```

Note: You can add project name by replacing dot(.) with respective name if you do not wish to create the react app on the root directory.

2. start the react app

```
npm start
```

3. install socket.io library

For server, in order to listen to client, we need socket.io library.

This is not only limit to react, we can use in any frontend.

```
npm install socket.io-client
```