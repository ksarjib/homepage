const express = require('express');
const path = require('path');

const app = express();


app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/public', express.static(path.join(__dirname, 'public')));

let products = [{id: 1, name: 'Product1', price: 100, description:'A detailed description'},
                {id: 2, name: 'Product2', price: 200, description:'A detailed description'},
                {id: 3, name: 'Product3', price: 300, description:'A detailed description'},
                {id: 4, name: 'Product4', price: 400, description:'A detailed description'}];

let cartItems = [{id: 1, name: 'Product1', price: 100, description:'A detailed description'},
                {id: 4, name: 'Product4', price: 400, description:'A detailed description'}];

app.get('/products', (req, res) => {
    res.render('products', {products : products});
});

app.get('/product/:id', (req, res) => {
    let id = req.params.id;
    let product = products.find(e => e.id === parseInt(id));
    res.render('product', {id : product.id, name : product.name, price : product.price, description : product.description});
});

app.get('/cart', (req, res) => {
    res.render('shoppingCart', {cartItems : cartItems});
});

app.listen(3000, () => {console.log('Listening on port 3000')});