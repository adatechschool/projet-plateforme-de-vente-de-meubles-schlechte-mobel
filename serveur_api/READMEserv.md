## express framework de node.js pour simplifier toutage, reponse du server 
, express est un module
const express = require('express')

## fonction express() mère du module
const app = express()

## request http à la route racine definie au server
## client se co => get
app.get("/",
## get prend deux params, à quel endroit on ecoute la requete(smtg.get) et deux param fonction callback qui est ce qu'on renvoie au client (response.smtg)
    function (requete, reponse) {
## donc ici on renvoie 
        response.send('Bienvenue sur le site Schlechte Mobel!')
    }
)

## récupère données => post
app.post("/userRegistration", (request, response) => {
## fait request pour remplir la DB et renvoi OK"
    response.sendStatus(200);
    response.end();
})

## Launch server at port choose 9090
app.listen(9090, function() {
    console.log('Mon serveur écoute sur le port 9090')
})