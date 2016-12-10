# SQL Injection Demo

## Synopsis
This demo shows the concept of sql injection

## Installation
  * Install latest version of Node.js from [https://nodejs.org](https://nodejs.org)
  * Edit config.js for server address and port settings
    (by default the server will listen to 0.0.0.0:3000)
  * Install required dependencies by typing:
```sh
$ npm install
```
  * Start server by typing:
```sh
$ npm start
```

## Production
  * Install PM2
```sh
$ npm install -g PM2
```
  * Start Server via PM2
```sh
$ pm2 start npm --name "SQL Injection Demo" -- start 
```
