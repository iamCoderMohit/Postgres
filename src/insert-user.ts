import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_YmrUjv8PLih5@ep-lucky-grass-a8syd38q-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require"
})

async function insertData(){
    await client.connect()

    const result = await client.query(`
            INSERT INTO users (username, email, password)
            VALUES ('mohit', 'mohit@gmail', '1234');
        `)
}

insertData()