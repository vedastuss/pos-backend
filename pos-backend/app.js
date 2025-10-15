require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const config = require("./config/config");
const app = express();


const PORT = config.port;

// Check MongoDB connection
connectDB()
    .then(() => {
        console.log('MongoDB connection check: Success');
    })
    .catch((err) => {
        console.log('MongoDB connection check: Failed', err);
    });

    //Root Endpoint
app.get("/", (req,res) => {
    res.json({message : "Hello from POS Server!"});
});

//Other Endpoints
app.use("/api/user", require("./routes/userRoute"));

// Global Error Handler
app.use(globalErrorHandler())

app.listen(PORT, () => {
    console.log(`POS Server is listening on port ${PORT}`);
});