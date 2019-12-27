const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// * bodyParser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// * DB config
const DBUrl = require("../config/keys").mongoURI;

// * connect to MongoDB
mongoose
    .connect(
        DBUrl,
        {
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB successfully connected")
    )
    .catch(err => console.log(err));

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server up and running on port ${port} !`));