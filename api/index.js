const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const port = 5000;

// IMPORT ROUTES
const postRoute = require('./routes/posts')


// ROUTES IMPLEMENTATION(middlewares)
app.use(cors())
app.use(bodyParser.json());
app.use('/posts', postRoute);



//DATABASE CONNECTIVITY
mongoose.connect("mongodb://localhost:27017/REST_AP",
{ useNewUrlParser: true,
useUnifiedTopology: true,
 useCreateIndex: true}
).then(() => {
    console.log("YOU ARE CONNECTED TO MONGO_DB")
});



//SERVER LISTENING
app.listen(port, () => {
     console.log(`REST_API IS RUNNING ON PORT ${port}`)
});