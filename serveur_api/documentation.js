const express = require('express')
const app = express()
const router = express.Router();


require("dotenv").config();
const pg = require("pg");
const { Pool, Client } = pg;

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString
});


module.exports = { router }
router.get("/", (req, res) => {

    res.json(
        [
            {
                info: "Retrieve furnitures by category id",
                at: "/getbycategory",
                method: "GET",
                bodyContent: {
                    categoryId: "INSERT NUMBER"
                }
            },
            {
                info: "Retrieve a unique furniture by id",
                at: "/getitem",
                method: "GET",
                bodyContent: {
                    itemId: "INSERT NUMBER"
                }
            },
            {
                info: "Retrieve a unique furniture by id",
                at: "/test",
                method: "GET",
                bodyContent: {
                    itemId: "INSERT NUMBER"
                }
            },
        ]
    )
    res.end();
});


async function getAllFurniture(maxNumberResponse = 10) {

    const client = await pool.connect();

    const queryText = 'SELECT furniture_id AS id, categories.name AS category, materials.name AS material, conditions.name AS condition, colors.name AS color_main, secondary.name AS color_secondary, dimensions, price, description, image FROM furnitures LEFT JOIN categories ON category_id = furnitures.category LEFT JOIN colors ON color_id = furnitures.color_main LEFT JOIN colors AS secondary ON secondary.color_id = furnitures.color_secondary LEFT JOIN conditions ON condition_id = furnitures.condition LEFT JOIN materials ON material_id = furnitures.material WHERE furnitures.furniture_id <= $1 ORDER BY id;';
    const params = [maxNumberResponse];

    try {
        const response = await client.query(queryText, params);
        // console.log(response.rows);

        return response.rows;

    } catch (error) {

        console.log("Error getting furnitures by category", error);
    }

    // Release the Client we took from Pool
    client.release();
}

router.all("/test", async (req, res) => {
    const data = await getAllFurniture();

    res.json(data);
    res.end();
})