import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

// todo: fix it process.env
// Get the MongoDB connection string based on the environment
const connectionString = process.env.NODE_ENV === "production" ? process.env.MONGODB_URL_PROD : process.env.MONGODB_URL_PROD;

// Connect to the MongoDB database
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Get the database connection object
const db = mongoose.connection;

// Handle errors that may occur during the database connection
db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

// Export the database connection object
export default db;