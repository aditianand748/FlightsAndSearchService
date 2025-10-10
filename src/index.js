const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
//const CityRepository = require('./repository/city-repository');

const db = require('./models/index');
//const sequelize = require('sequelize');
const {Airplane} = require('./models/index');

const setupAndStartServer = async () => {
    const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
       if(process.env.SYN_DB) {
        db.sequelize.sync({alter: true});
       }
      
      
    });
}

setupAndStartServer();