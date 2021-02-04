const express = require('express');

const router = express.Router();

const app = express();

app.use("/api", router)



app.listen(3001, (req, res) => {
    console.log(`Server started on port ${3001}`)
})