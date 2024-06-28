require("dotenv").config();
const pg = require("pg");
const { Pool, Client } = pg;

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString
});

// ===========================================

module.exports = { getFurnituresByCategory }
async function getFurnituresByCategory(categoryId, maxNumberResponse = 10) {

    const client = await pool.connect();

    const queryText = 'SELECT furniture_id AS id, categories.name AS category, materials.name AS material, conditions.name AS condition, colors.name AS color_main, secondary.name AS color_secondary, dimensions, price, description, image FROM furnitures LEFT JOIN categories ON category_id = furnitures.category LEFT JOIN colors ON color_id = furnitures.color_main LEFT JOIN colors AS secondary ON secondary.color_id = furnitures.color_secondary LEFT JOIN conditions ON condition_id = furnitures.condition LEFT JOIN materials ON material_id = furnitures.material WHERE furnitures.category = $1 ORDER BY furniture_id LIMIT $2;';
    const params = [categoryId, maxNumberResponse];

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
// === Testing
// getFurnituresByCategory(2);
// return:
// [
//     {
//       furniture_id: 1,
//       category: 'Fauteuil',
//       material: 'Bois',
//       condition: 'Comme neuf',
//       color_main: 'Rouge',
//       color_secondary: 'Orange',
//       dimensions: '80x60x100',
//       price: 1200,
//       description: 'Fauteuil de ma Grand-Mère',
//       image: 'https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e'
//     }
//   ]