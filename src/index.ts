import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_YmrUjv8PLih5@ep-lucky-grass-a8syd38q-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
})


async function createUserTable() {
    await client.connect()
    try {
        const result = await client.query(`
            CREATE TABLE users(
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `)

        console.log(result)
    } catch (error) {
        
    }
}

createUserTable()