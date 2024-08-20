import express from 'express';
import { toDo } from '../models/todoModel.js';

const router = express.Router();


//todosRoute.js new http route for saving book
router.post('/', async (request, response) => {
    try {
            // Validate the request body
        if (
            !request.body.title 
        ) {
            return response.status(400).send({
                message: 'send all rq fields: title',
            });
        }
         // Create a new todo instance
        const newToDo = {
            title: request.body.title,
         
        };
        
        // Save the new todo to the database
        const todo = await toDo.create(newToDo);
        // Return status 201 and send the saved todo to the client
        return response.status(201).send(todo);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }

});

//to import our methods into index.js
export default router;