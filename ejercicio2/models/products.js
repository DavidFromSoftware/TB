var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var productSchema = new Schema({  
  name:    { type: String },
  price:   { type: Number },
  quantity: { type: Number }
});

exports.model = mongoose.model('product', productSchema);  

exports.refresh_base = function(){
	var Product_schema = mongoose.model('products', productSchema);
	var product = new Product_schema({
		name: "Lavadora",
		price: 4000,
		quantity: 500
    });
    product.save()
    console.log("Autogenerada data en la base para productos")
}