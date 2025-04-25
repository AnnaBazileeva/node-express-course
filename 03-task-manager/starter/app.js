
const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require("./db/connect");
require('dotenv').config()
const errorHandler = require("./middleware/errorHandler");
require("express-async-errors");
const notFound = require("./middleware/notFound");

const port = process.env.PORT ? process.env.PORT : 3000;

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home Page');
});

const peopleRouter = require('./routes/people');
app.use('/api/v1/people', peopleRouter);


app.use('/api/v1/tasks', tasks);
app.use(errorHandler);
app.use(notFound);

const start = async ()=> {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server is listening on port ${port}...`)
        })
    } catch(error) {
        console.log("error to start server")
    }
}
start()