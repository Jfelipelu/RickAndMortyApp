# RickAndMortyApp
This is a web application that allows you to explore the Rick and Morty series. Users can view episodes, characters, and locations from the series along with specific information about them. You can also mark any of the items mentioned above as favorites and save them to a local database.

## Features
* Windows for each category with general information.
* Detailed information of every item by clicking on them.
* Possibility to mark favorites and check them at the Favorites page.
* Store your favorite selections at a local data base.
* Node.js Backend with routes and conections to a MongoDB data base in a local machine.

## Technologies
### Frontend:
      React with React Router for routing.
      Redux for the global state of the app (used in the favorites feature).

### Backend: 
      Node.js with Express for routing management.
      MongoDB to store users' Favorites.

### Data Base: Local MongoDB

## Installation and Execution

### Requirements:
* Install Node.js v20.15.0 and npm v10.7.0. Availables here https://nodejs.org/.
* Install MongoDB v8.0. Available guide here https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows-unattended/. I recommend using MongoDB Compass along this to make the process easier.

### Project execution:
* Create a connection to MongoDB with the URI mongodb://localhost:27017. You can do it through the MongoDB Shell or through MongoDB Compass.
* Create a new Data Base called FavoritesDB with the collection named RickAndMorty. To do this through the shell, use the command use FavoritesDB to create the database and db.createCollection("RickAndMorty") to create the collection. It's easier to do this in Compass by clicking "Add" and selecting the name.
* In the frontend project folder, execute npm install in the terminal to install dependencies. Do the same in the backend folder.
* Start the frontend development server by running the command npm start.
* Start the backend development server by running node server.js.

##  Backend (API):
* Available routes:
    * GET /api/favorites
    * POST /api/favorites
        body: {favoriteId(string), type(string)}
    * Delete /api/favorites
        body: {id(objectId)}
