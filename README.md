# RickAndMortyApp
This is a web application that allows you to explore Rick and Morty series. Users can see episodes, characters and locations of the series with specific information of them. You're also able to mark as favorites any of the mentioned before and save them at a local data base.

## Features
* Windows for each category with general information.
* Detailed information of every item by clicking on them.
* Possibility to mark favorites and check them at the Favorites page.
* Store your favorites selection at a local data base.
* Node.js Backend with routes and conections to a MongoDB data base in a local machine.

## Technologies
### Frontend:
      React with React Router for routing.
      Redux for global state of the app (used in favorites feature).

### Backend: 
      Node.js with Express for routing management.
      MongoDB to store users Favorites.

### Data Base: Local MongoDB

## Installation and Execution

### Requisites:
* Install Node.js v20.15.0 and npm v10.7.0. Availables here https://nodejs.org/.
* Install MongoDB v8.0. Available guide here https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows-unattended/. I recommend using MongoDB Compass along this to make the process easier.

### Project execution:
* Create a connection to MongoDB with the URI mongodb://localhost:27017. You can do it through the MongoDB Shell or through MongoDB Compass.
* Create a new Data Base called FavoritesDB with the collection name RickAndMorty. Through shell would use the command "use FavoritesDB" to create the DB and "db.createCollection("RickAndMorty")" to create the collection. It'll be easier through the Compass by just clicking on add ans selecting the name.
* At project frontend folder execute npm install through a terminal to install dependencies. Do so aswell at backend folder.
* Start the frontend dev by using the command npm start.
* Start the backend dev by using node server.js.

##  Backend (API):
* Available routes:
    * GET /api/favorites
    * POST /api/favorites
        body: {favoriteId(string), type(string)}
    * Delete /api/favorites
        body: {id(objectId)}
