var path = require('path');
var environment = process.env.NODE_ENV || "development";

//Configuramos una base de datos para desarrollo y otra para los test, y diferentes puertos para poder 
//correr ambos

var config = {
    "development": {
        "mongo": {
            "url": "localhost",
            "db": "toolbox"
        },
        "application": {
            "port": 3000
        }
    },
    "test": {
        "mongo": {
            "url": "localhost",
            "db": "toolboxTest"
        },
        "application": {
            "port": 4500
        }
    }
};

config = config[environment];

config.mongo.uri = "mongodb://" + config.mongo.url + "/" + config.mongo.db;

//Externalización de configuraciones básicas

config.application.port = process.env.NODE_PORT || config.application.port;
config.mongo.url = process.env.MONGO_URL || config.mongo.url;
config.mongo.db = process.env.MONGO_DB || config.mongo.db;

module.exports = config;