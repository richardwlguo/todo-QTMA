import express from "express";
import mongoose from 'mongoose';
import { mongoDbURL, PORT } from "./config.js";
import todosRoute from "./routes/todoRoutes.js";

const app = express();

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send("Hello world")
});

mongoose.connect(mongoDbURL)
    .then(()=> {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });

    })
    .catch((error) =>{
        console.log(error);
    });

app.use(express.json());


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome')
});
//tells our app to use the todosRoute router whenever a request's path starts with /api/todos.
app.use('/api/todos', todosRoute);