# Store API

This is a simple store API which uses Express and MongoDB for it's storage needs. It is not a production app and it is not deployed anywhere for now.
This project only has a single endpoint. This API was created to learn more about how to filter using Mongoose.

## How to setup this project in your local machine

1. Download this project from Github.
2. Setup Nodejs in your device. Follow [this](https://nodejs.org/en/download) link to install Nodejs if it is not setup already.
3. Navigate to the project folder in your terminal.
4. Run `npm install` to install all the node dependencies for this project.
5. Create a `.env` file in the root of the project following the `.env.example` file of the project. Make sure to add a valid `MONGO_URI` to the file or it will not connect to DB.
6. Run the `populateDB.js` file by using `node populateDB.js` to populate example data in your collection. Make sure to remove the delete data line from this file if you want to keep previous data from this collection.
7. Run the project from the terminal using `npm run dev`.
8. Congrats! The project will start running now.

## API Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/20074453-4e5879ec-2680-489c-bcab-73139621f358?action=collection%2Ffork&collection-url=entityId%3D20074453-4e5879ec-2680-489c-bcab-73139621f358%26entityType%3Dcollection%26workspaceId%3Dc7abdf6b-9f37-4274-88cb-91647b3f9c1b)
