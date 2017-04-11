var mongoose = require('mongoose');  	
    Products = require('../models/products');

//GET - Return all products in the DB
exports.stock = function(req, res) {  
    Products.model.find(function(err, products) {
    if(err) res.send(500, err.message);

    console.log('GET /products')
        res.status(200).jsonp(products);
    });
};

exports.add_stock = function(req, res) {
	Products.model.findById(req.params.id, function(err, products) {
        products.quantity   = products.quantity + 1;

        products.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(products);
        });
    });
}

exports.remove_stock = function(req, res){

}