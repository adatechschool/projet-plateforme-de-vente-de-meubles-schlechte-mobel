const express = require('express')
const app = express()
const router = express.Router();

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
        ]
    )
    res.end();
})