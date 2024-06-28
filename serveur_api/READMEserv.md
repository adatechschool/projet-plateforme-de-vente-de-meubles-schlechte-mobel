## [FILE serveurtest.js]

## express framework minimalist de NODE.js
## => Simplifier le routage et les réponses du server.
## On importe le module Express.
const express = require('express')

## fonction express() mère du module
const app = express()

## request http à la route racine definie au server
## client se co => get
app.get("/",
## get prend deux params, à quel endroit on ecoute la requete(smtg.get) et deux param fonction callback qui est ce qu'on renvoie au client (response.smtg)
    function (requete, reponse) {
## On envoie une réponse avec le message 'Bienvenue sur le site Schlechte Mobel!' au client.
        response.send('Bienvenue sur le site Schlechte Möbel!')
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


## [FILE .env] ##

## Renseigner de base dans le gitignore
## Ne doit jamais être partagé car données sensibles : nom de l'id + mot de passe 
## Ainsi que le port par défaut supabase
postgres://postgres.pqkpqppbywzmpmvpohul:thisismobeldatabase%@aws-0-eu-central-1.pooler.supabase.com:6543/postgres"


