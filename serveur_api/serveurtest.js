const {
    getFurnituresByCategory,
    getFurnitureById } = require("./queries.js");

const express = require('express')
const app = express()

// Necessity tu use a middleware to retrieved infos from a POST form
app.use(express.urlencoded({ extended: true }))
const { router } = require("./documentation.js");
app.use(router)

// ============== EXAMPLES ======================
// Go to localhost:9090/doc
app.get("/doc",
    function (requete, reponse) {
        reponse.send("si /persons alors json")
    }
)

// ==== Ecoute la request GET sur la route /persons
app.get("/persons", (request, response) => {

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
        const categoryId = request.body.categoryId;
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
        const itemId = request.body.itemId;
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

// ==== Lance le server
app.listen(9090, function () {
    console.log('Mon serveur écoute sur le port 9090')

})