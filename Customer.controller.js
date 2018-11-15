const Customer = require('../models/Customer.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Customer controller!');
};
exports.Customer_create = function (req, res) {
    let customer = new Customer(
        {
            name: req.body.name,
            id: req.body.id,
            product: req.body.product
        }
    );

    customer.save(function (err,resp) {
        if (err) {
            return next(err);
        }
        res.send('customer Created successfully' + resp) ;
    
    })
};
exports.Customer_details = function (req, res) {
    Customer.findById(req.params.id, function (err, Customer) {
        if (err) return next(err);
        res.send(Customer);
    })
};
exports.Customer_update = function (req, res) {
    Customer.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, Customer) {
        if (err) return next(err);
        res.send('Customer udpated.');
       
    });
};
exports.Customer_delete = function (req, res) {
    Customer.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
exports.Customer_all = function(req,res){
    Customer.find(function(err,Customer) {
    if(err)
    res.send('error');
    res.send(Customer);
})
};

  