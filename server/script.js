const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:3000";
const dbName = "mydatabase";

// Create a new MongoClient
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");

    // Select the database
    const db = client.db(dbName);

    // Perform operations on the database here

    return db;
  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the function to connect to the database
connectToDatabase();
