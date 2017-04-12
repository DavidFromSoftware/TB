var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;
    _ = require('underscore');

var productSchema = new Schema({  
  name:    { type: String },
  price:   { type: Number },
  quantity: { type: Number }
});

exports.model = mongoose.model('product', productSchema);  


exports.refresh_base = function(){
  var Product = this.model
  var productsByDefault=  [
      {
        name: "Lavadora",
        price: 10000,
        quantity: 500
      },
      {
        name: "Televisor",
        price: 10500,
        quantity: 1500
      },
      {
        name: "Mac Mini",
        price: 18000,
        quantity: 40
      },
      {
        name: "Licuadora",
        price: 3000,
        quantity: 625
      }
    ]
  _.each(productsByDefault, function(product, i) {
    var product = new Product(product)
    product.save()
  })
  console.log("Autogenerada data en la base para productos")
}