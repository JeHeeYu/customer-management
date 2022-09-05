# Getting Started with Create React App

## Environment Setup
### Client
<pre>
npm install -g yarn
npm install -g create-react-app

// 작업할 공간
cd Workstation

// customer-management 라는 React Project 생성
create-react-app customer-management

// material ui download
npm install @mui/material @emotion/react @emotion/styled

client 폴더로 이동
</pre>
### Server
<pre>
npm install -g nodemon
npm install express
</pre>

Create package.json
<pre>
### package.json

{
    "name": "customer-management",
    "version": "1.0.0",
    "scripts": {
        "client": "cd client && yarn_start",
        "server": "nodemon server.js",
        "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
    },
    "dependencies": {
        "body-parser": "^1.18.3",
        "express": "^4.18.1"
    },
    "devDependencies": {
        "concurrently": "^4.0.1"
    }
}
</pre>
### Create gitignore
<pre>
.gitignore

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

</pre>

</pre>
