
const express = require('express');
const app = express();
const {addToDatabase}=require('./index.js') 

const {
    getFurnituresByCategory,
    getFurnitureById } = require("./queries.js");


require("dotenv").config();
const pg = require("pg");
const { Pool, Client } = pg;

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString
});


// Necessity tu use a middleware to retrieved infos from a POST form
app.use(express.urlencoded({ extended: true }))

// importing the router at root for documentation
const { documentationRoute } = require("./documentation.js");
const { router } = require("./router.js");
app.use(documentationRoute);
app.use(router);

// ============== EXAMPLES ======================
// Go to localhost:9090/doc
app.get("/example",
    function (requete, reponse) {
        reponse.send("si /example/persons alors json")
    }
)

// ==== Ecoute la request GET sur la route /persons
app.get("/example/persons", (request, response) => {

    response.json(
        [
            {
                name: "Jack",
                height: "180"
            },
            {
                name: "John",
                height: "180"
            },
            {
                name: "Jane",
                height: "176"
            }
        ]
    )
})
// ============= END EXAMPLES ==================

// ==== Sends furnitures (limited by 10) with a specified category
app.get("/getbycategory", async (request, response) => {

    try {

        //take key value of the request body (issued from a form)
        const categoryId = request.query.id;
        const data = await getFurnituresByCategory(categoryId);

        response.json(data);
        response.end();

    } catch (error) {
        console.log("Error routing GET /getbycategory", error);
        response.sendStatus(400);
        response.end();
    }
})

// ==== Sends solo json for a specified id
app.get("/getitem", async (request, response) => {
    try {
        const itemId = request.query.id;
        const data = await getFurnitureById(itemId);

        response.json(data);
        response.end();

    } catch (error) {
        console.log("Error routing GET /getitem", error);
        response.sendStatus(400);
        response.end();
    }
})

// ==== Ecoute la request POST sur la route /userRegistration
app.post("/userregistration", (request, response) => {
    // fait les request pour remplir la DB et renvoi OK*
    console.log(request.body);

    response.sendStatus(200);
    response.end();
})
app.post("/newentry", async(request, response)=> {

    try {
        const name =request.body.name
        const surname = request.body.surname
    console.log(request.body)
  
        //const ok=await addToDatabase(name, surname)
        response.sendStatus(200);
        response.end();
    } catch (error) {
        console.log('error')
    }

    /*res.status(200).json({
        status: "success",
        // results: tours.length,
        data: {
          tours: "Hello World", // if the key and the value have the same value we dont need to specify both just one
        },*/
      });
    


//app.post()
// ==== Lance le server
app.listen(9090, function () {
    console.log('Mon serveur écoute sur le port 9090')

})