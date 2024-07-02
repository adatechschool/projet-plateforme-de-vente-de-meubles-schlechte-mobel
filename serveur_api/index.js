require("dotenv").config();
const pg = require("pg")
const { Pool, Client } = pg

// ==== This takes the connectionString from the .env config file
const connectionString = process.env.DATABASE_URL;

// ==== Opening a pool of 'clients'
const pool = new Pool({
    connectionString
});
// ==== Checking errors when idle
pool.on("error", (err, client) => {
    console.error("Error on idle client", err);
    process.exit(-1);
})

// ==== Connection as a single Client
// == The 'SELECT NOW()' query is basic to test a connection
// == even without any tables in DB
async function connection() {

    const client = new Client({
        connectionString,
    })
    await client.connect();

    const requestResult = await client.query('SELECT * from users');
    console.log(requestResult.rows)

    await client.end();
}
//connection();

module.exports = { addUserToDatabase, checkDoublonMailDb }

async function checkDoublonMailDb(email) {
    try {
        const client = await pool.connect();

        const double = 'SELECT user_id, email from users where users.email = $1'
        const params = [email]

        const result = await client.query(
            double, params
        );
        console.log(result.rows)

        if (result.rows.length >= 1) {
            //console.log("Il semblerait qu'il y ait un doublon😕.")
            client.release()
            return true
        }
        client.release()
        return false

    } catch (error) {
        console.log(error)
    }
}
//checkDoublonMailDb('onice.com').then((data)=>console.log(data))

async function addUserToDatabase(name, surname, email, password) {
    const client = new Client({
        connectionString,
    });

    try {
        await client.connect();

        const yadoublon = await checkDoublonMailDb(email)
        if (!yadoublon) {



            //ajouter une nouvelle ligne à la  table
            const result = await client.query(
                'INSERT INTO users (name, surname, email, password) VALUES ($1,$2,$3,$4)',
                [name, surname, email, password]
            );
            console.log(`Ajouté ${result.rowCount} ligne(s)`)
            
            await client.end();
            return true
        } else {
            //console.log('Jai rien ajouté')
            await client.end()
            return false
        }
    } catch (error) {
        console.log(error)
    }


}
addUserToDatabase('William', 'Lawson', 'onice.com', 'onzerocks')

// ==== Connecting with a pool for a single query
// == Let's the pool open
async function singlePoolQuery() {

    const response = await pool.query('SELECT NOW()');
    console.log(response.rows);
}
//singlePoolQuery();

// ==== Connecting with a Client from a Pool, use it,
// == then return the Client to the Pool to be ready for next use
async function queryWithPool() {

    const client = await pool.connect();
    const response = await client.query('SELECT * from test');
    console.log(response.rows);

    // Release the Client we took from Pool
    client.release();
}
// queryWithPool();
