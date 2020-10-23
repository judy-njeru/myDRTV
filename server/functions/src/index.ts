import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

admin.initializeApp(functions.config().firebase);

const db = admin.firestore(); // Add this

const app = express();
const main = express();

main.use("/api", app);
main.use(bodyParser.json());
app.use(cors({ origin: true }));
main.use(cors({ origin: true }));

export const webApi = functions.https.onRequest(main);

app.get("/warmup", (request, response) => {
  response.send("Warming up friend.");
});

app.get("/movies", async (request, response) => {
  try {
    const moviesCollection = await db.collection("movies").get();
    const movies: any = [];
    moviesCollection.forEach(doc => {
      movies.push({
        id: doc.id,
        data: doc.data()
      });
    });

    response.json(movies);
    response.end();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/movies/:id", async (request, response) => {
  try {
    const movieID = request.params.id;

    if (!movieID) throw new Error("Movie ID is required");

    const movie = await db
      .collection("movies")
      .doc(movieID)
      .get();

    if (!movie.exists) {
      throw new Error("Movie doesnt exist.");
    }

    response.json({
      id: movie.id,
      data: movie.data()
    });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/user", async (request, response) => {
  try {
    const name = request.body.name;
    const email = request.body.email;
    const password = request.body.password;

    const data = {
      name,
      email,
      password,
      likes:[],
      dislikes:[],
      watchlist: []
    };

    const userRef = await db.collection("users").add(data);
    const user = await userRef.get();

    response.json({
      id: userRef.id,
      data: user.data()
    });
    response.end();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users/:email", async (request, response) => {
  try {
    const sEmail = request.params.email;

    if (!sEmail) {
      response.send("Email is required")
    };

    const user = await db
      .collection("users")
      .where('email', '==', sEmail)
      .get();

    if (!user) {
      response.send("User doesnt exist.");
    }
    user.forEach(function(doc) {
      // response.send(doc)
      response.json({
        id: doc.id,
        data: doc.data()
      });
    });

  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
  try {
    const usersCollection = await db.collection("users").get();

    const users: any = [];
    usersCollection.forEach(doc => {
      users.push({
        id: doc.id,
        data: doc.data()
      });
    });

    response.json(users);

    response.end();
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/watchlist", async(request, response)=>{
  try {
    const userID = request.body.id;
    const movieID = request.body.movieID;
    const movieTitle = request.body.movieTitle;
    const moviePoster = request.body.moviePoster;
    
    const userWatchlist = {
      movieID:movieID,
      title:movieTitle,
      poster: moviePoster
    };

    const userRef = await db.collection("users").doc(userID)
   
    const firebaseAdmin = require('firebase-admin');
    
    // Atomically add a new movie to the "watchlist" array field.
    const arrUnion = userRef.update({
      watchlist: firebaseAdmin.firestore.FieldValue.arrayUnion(userWatchlist)
    });
    console.log(arrUnion)
  
    response.send(userWatchlist)

    response.end();
  } catch (error) {
    response.status(500).send(error);
  }
})


app.post("/watchlist/likes", async(request, response)=>{
  const movieID = request.body.movieID;

  try {
    const firebaseAdmin = require('firebase-admin');
    const likesRef = db.collection('movies').doc(movieID);

    // Atomically increment the like of the movie by 1.
    const popIncrement = likesRef.update({
      likes: firebaseAdmin.firestore.FieldValue.increment(1)
    });

    return popIncrement.then(res => {
      if(res){
        response.send({"status":1, "message":"like added"})
      } else {
        response.send({"status":0, "message":"like not added"})
      }
    });

  } catch (error) {
    response.status(500).send(error);
  }
})



