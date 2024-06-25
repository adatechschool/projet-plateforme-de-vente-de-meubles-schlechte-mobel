const express = require('express')
const app = express()

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

// ==== Ecoute la request POST sur la route /userRegistration
app.post("/userregistration", (request, response) => {
    // fait les request pour remplir la DB et renvoi OK*
    response.sendStatus(200);
    response.end();
})

// ==== Lance le server
app.listen(9090, function () {
    console.log('Mon serveur écoute sur le port 9090')

})