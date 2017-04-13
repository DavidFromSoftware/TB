var mongoose = require('mongoose');  	
    Products = require('../models/products');

exports.stock = function(req, res) {  
    Products.model.find(function(err, products) {
    if(err) res.send(500, err.message);

    console.log('GET /products')
        res.status(200).jsonp(products);
    });
};

function change_stock(req,res,operation){
    if(typeof req.query.amount=='undefined'){
        req.query.amount=1
    }

    Products.model.findById(req.params.id, function(err, products) {
        if(operation=="sum"){
            products.quantity = products.quantity + parseInt(req.query.amount);
        }else if(operation=="sub"){
            products.quantity = products.quantity - parseInt(req.query.amount);
        }

        products.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(products);
        });
    });
}

exports.add_stock = function(req, res) {
    change_stock(req,res,"sum")
}

exports.remove_stock = function(req, res){
    change_stock(req,res,"sub")
}