var app = require('../../app');
    chai = require('chai');
    chaiHttp = require('chai-http');
    expect = chai.expect
    Product = require('../../models/products');
chai.use(chaiHttp);

describe("Products controller", () => {

    beforeEach((done) => {
        Product.model.remove({}, err => {
            var product = new Product.model({
                name: "Cafetera",
                price: "300",
                quantity: 900
            })
            product.save(function(err){
                done();
            })
        });
    });

    afterEach((done) => {
        Product.model.remove({}, err => {
            done();
        });
    });

    it('should get products', done => {
        chai.request(app).get('/api/stock').end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.be.not.equal(0);
            done();
        });
    });

    it('should add two products', done => {
        Product.model.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, product) {
            var product_id = product.id ;
            var product_quantity = product.quantity;
            chai.request(app).put('/api/products/'+product_id+'/add?amount=2').end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.quantity).to.be.equal(product_quantity+2);
                done();
            });
        });
    });

    it('should remove 5 products', done => {
        Product.model.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, product) {
            var product_id = product.id ;
            var product_quantity = product.quantity;
            chai.request(app).put('/api/products/'+product_id+'/remove?amount=5').end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.quantity).to.be.equal(product_quantity-5);
                done();
            });
        });
    });
});