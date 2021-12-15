# Tic Tac Toe Game
> Project of Tic Tac Toe game with static and server Application.
# (static) Multiplayer single-page - one browser
This project contains the HTML5, CSS3 and JavaScript.
# (server) Multiplayer Online Real-Time - two browsers
This project contains the Node.js, React.js, Express, Socket.io, TypeScript, Cors, Nodemon, Socket-controllers, Reflect-Metadata.
## 1. run command on clone-multiverse 
```
npx express-generator server
```
### Results
<pre>
npx: installed 10 in 3.334s

  warning: the default view engine will not be jade in future releases
  warning: use `--view=jade' or `--help' for additional options

   create : server\
   create : server\public\
   create : server\public\javascripts\
   create : server\public\images\
   create : server\public\stylesheets\
   create : server\public\stylesheets\style.css
   create : server\routes\
   create : server\routes\index.js
   create : server\routes\users.js
   create : server\views\
   create : server\views\error.jade
   create : server\views\index.jade
   create : server\views\layout.jade
   create : server\app.js
   create : server\package.json
   create : server\bin\
   create : server\bin\www
</pre>

## change directory:
```
cd server
```
## install dependencies:
```
npm install
```
## run the app:
```
DEBUG=server:* npm start
```
## 2. Dependencies on package.json

```json
{
  "name": "server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1",
    "reflect-metadata": "^0.1.13",
    "socket-controllers": "^0.0.5",
    "socket.io": "^4.1.2"
  },
  "devDependencies": {
    "@types/node": "^16.0.0",
    "nodemon": "^2.0.9",
    "ts-node": "^10.0.0",
    "typescript": "^4.3.5"
  }
}
```
## 3. Add ts-node + typescript + nodemon
```
yarn add -D ts-node typescript nodemon
```
## 4. Add Socket.io
```
yarn add socket.io
```
## 5. Add Socket-controllers
```
yarn add socket-controllers reflect-metadata
```
## 6. Yarn Start or NPM start
```
yarn start
```
or
```
npm start
```
## 7. Create React App
```
npx create-react-app --template typescript tic-tac-toe
```