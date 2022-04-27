import { MongoClient } from "https://deno.land/x/mongo@v0.29.4/mod.ts";

const client = new MongoClient();

await client.connect(
  "mongodb+srv://nameMoro:234@pruebilpruebas.6zlnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1"
);
const db = client.database("DenoBase");

// export default MongoClient
export default db;
