const { getFurnituresByCategory } = require("./queries.js")
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

app.get("/doc",
    function (requete, reponse) {
        reponse.send("si /persons alors json")
    }
)

// ==== Ecoute la request GET sur la route /persons
app.get("/persons", (request, response) => {

    response.json({
        result: [
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
            }]
    })
})

// ==== essai distribution de Json
app.get("/getbygategory", async (request, response) => {

    try {
        //take key value of the request body (issued from a form)
        const categoryId = request.body.categoryId;
        const data = await getFurnituresByCategory(categoryId);

        response.json(data);
        response.end();
    } catch (error) {

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