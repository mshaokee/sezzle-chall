# Realtime Calculator

## Summary
The goal is to build a calculator app that updates immediately upon calculation. The updates should be seen in cases where user A or B can be connected from different sources. Results should remain between sessions as well and only show 10 latest calculations. The application must also be uploaded and hosted so that others may view it.

## NOTES - Current 11/11/2020

Had trouble initiating WebSocket to operate with redux data.

## Prerequisites
Software required to run this application:

* [Node.js](https://nodejs.org/en/)
* [PostgreSQL](https://www.postgresql.org/)

## Installations

1.) Open source code editor and run ```npm install```

2.) Creata database named ```sezzle_chall``` and run this query,
```CREATE TABLE "history" (
	"id" SERIAL PRIMARY KEY,
	"history" INTEGER
);
```

3.) Run ```npm run server``` and ```run npm client``` in terminal to spin up server and open browser at localhost:3000/

## Built with

* React.js
* Express.js
* Node.js
* Redux-Sagas
* Socket.io



