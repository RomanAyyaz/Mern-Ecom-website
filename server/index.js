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


const corsOptions = {
    origin: 'https://vercel.com/roman-ayyazs-projects/mern-ecom-website/2k7La2FbKH4FJYeDud5tdqbXU5Tn',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, 
  };
  
  app.use(cors(corsOptions));

// Start the server
app.listen(Port, () => {
    console.log(`Listening at port number ${Port}`);
});
