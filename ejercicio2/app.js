var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
    Products = require('./models/products');
    ProductCtrl = require('./controllers/products');

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

mongoose.connect('mongodb://localhost/toolbox', function(err, res) {  
	if(err) {
		console.log('Error de conexion de Base de Datos. ' + err);
	} else {
		app.listen(3000)
		Products.model.find(function(err, response) {
			if(response.length==0){
				Products.refresh_base()
			}
		})
		console.log("Servidor corriendo en http://localhost:3000");
	}
});

