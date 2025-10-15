require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const app = express();


const PORT = process.env.PORT;

// Check MongoDB connection
connectDB()
    .then(() => {
        console.log('MongoDB connection check: Success');
    })
    .catch((err) => {
        console.log('MongoDB connection check: Failed', err);
    });

app.get("/", (req,res) => {
    res.json({message : "Hello from POS Server!"});
});

app.listen(PORT, () => {
    console.log(`POS Server is listening on port ${PORT}`);
});