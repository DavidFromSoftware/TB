var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
    Products = require('./models/products');
    ProductCtrl = require('./controllers/products');
    config = require('./config');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// API rutas
var products = express.Router();

products.route('/stock')  
	.get(ProductCtrl.stock)

products.route('/products/:id/add')
	.put(ProductCtrl.add_stock)

products.route('/products/:id/remove')
	.put(ProductCtrl.remove_stock)

app.use('/api', products);  
app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.render('error');
});

mongoose.connect(config.mongo.uri);

app.listen(config.application.port);

if(process.env.NODE_ENV !== 'test') {
    mongoose.connection.once('connected', () => {
        console.log("Mongo connectado:", config.mongo.uri);
    });
    Products.model.find(function(err, response) {
		if(response.length==0){
			Products.refresh_base()
		}
	})
    console.log("Servidor corriendo:", config.application.port);
}


module.exports = app;