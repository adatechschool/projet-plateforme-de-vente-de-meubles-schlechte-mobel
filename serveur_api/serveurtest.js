const express = require('express')
const app = express()

app.get("/",
    function (requete, reponse) {
        reponse.send('Bienvenue sur le site Schlechte Mobel!')
    }
)

app.listen(9090, function() {
    console.log('Mon serveur écoute sur le port 9090')
    
})