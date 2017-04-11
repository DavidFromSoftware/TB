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

// API routes
var products = express.Router();

products.route('/products')  
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

