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
## 7. Create React App on Clone Multiverse folder
```
npx create-react-app --template typescript app-server
```

### Results
<pre>
npx: installed 67 in 5.979s

Creating a new React app in C:\Users\isaac\OneDrive\Área de Trabalho\clone-multiverse\app-server.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...


> core-js@3.20.0 postinstall C:\Users\isaac\OneDrive\Área de Trabalho\clone-multiverse\app-server\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.20.0 postinstall C:\Users\isaac\OneDrive\Área de Trabalho\clone-multiverse\app-server\node_modules\core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

+ react-scripts@5.0.0
+ react@17.0.2
+ react-dom@17.0.2
+ cra-template-typescript@1.1.3
added 1373 packages from 589 contributors in 104.035s

162 packages are looking for funding
  run `npm fund` for details


Installing template dependencies using npm...
npm WARN @apideck/better-ajv-errors@0.3.1 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @types/node@16.11.13
+ @types/react-dom@17.0.11
+ web-vitals@2.1.2
+ @types/jest@27.0.3
+ @types/react@17.0.37
+ @testing-library/jest-dom@5.16.1
+ typescript@4.5.4
+ @testing-library/user-event@13.5.0
+ @testing-library/react@12.1.2
added 39 packages from 109 contributors and updated 1 package in 8.769s

162 packages are looking for funding
  run `npm fund` for details


We detected TypeScript in your project (src\App.test.tsx) and created a tsconfig.json file for you.

Your tsconfig.json has been populated with default values.

Removing template package using npm...

npm WARN @apideck/better-ajv-errors@0.3.1 requires a peer of ajv@>=8 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

removed 1 package and audited 1414 packages in 4.986s

162 packages are looking for funding
  run `npm fund` for details

found 1 moderate severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

Success! Created app-server at C:\Users\isaac\OneDrive\Área de Trabalho\clone-multiverse\app-server
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd app-server
  npm start

Happy hacking!
</pre>