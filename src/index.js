const express = require('express');
const mongoose = require('mongoose');

const PORT = 4000;
const app = express();

const userDB = 'root' ; 
const passwordDB = 'example' ;
const portDB =27017; 
const hostdb = '172.29.0.2'; 

const URI = 'mongodb://userDB:passwordDB@hostdb:portDB';
mongoose.connect(URI).then( () => console.log('connect to db .. ') )
.catch((err) => console.log('failed to connect to db:', err));

app.get ('/', (req, res) => {
    res.send(" <h1>A heading here hi hi hi dev </h1>")
});

app.listen(PORT, () => console.log('app is running on port: ${PORT}'));


