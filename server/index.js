require('dotenv').config();
require('./Database/db');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const Port = process.env.PORT || 8000;

// Serve static files from the "Public" directory under the "/public" route
app.use('/public', express.static(path.resolve(__dirname, './Public')));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routers
const UserRouter = require('./Routes/User/user');
const AdminRouter = require('./Routes/Admin/Admin');
app.use('/user', UserRouter);
app.use('/admin', AdminRouter);

app.get('/', (req, res) => {
    res.send('Backend is working!');
  });
  

// Start the server
app.listen(Port, () => {
    console.log(`Listening at port number ${Port}`);
});
