const express = require('express')
const app = express()
const documentationRoute = express.Router();


// require("dotenv").config();
// const pg = require("pg");
// const { Pool, Client } = pg;

// const connectionString = process.env.DATABASE_URL;
// const pool = new Pool({
//     connectionString
// });


module.exports = { documentationRoute }
documentationRoute.all("/", (req, res) => {

    res.json(
        [
            {
                info: "Retrieve all furnitures with a limit, if no query limit defaults to 10",
                at: "/furnitures",
                queryKeywords: ["limit"],
                example: "/furnitures?limit=2"
            },
            {
                info: "Retrieve furnitures by category id, limit defaults to 10",
                at: "/furnitures/category",
                queryKeywords: ["id", "limit"],
                example: "/furnitures/category?id=2&limit=20"
            },
            {
                info: "Retrieve a unique furniture by id",
                at: "/furnitures/item",
                queryKeywords: ["id"],
                example: "/furnitures/item?id=1"
            },
        ]
    )
    res.end();
});
