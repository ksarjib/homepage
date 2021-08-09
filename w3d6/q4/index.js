const express = require('express');
const path = require('path');

const app = express();


app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/public', express.static(path.join(__dirname, 'public')));
let desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let products = [{id: 1, name: 'Product1', price: 100, description: desc},
                {id: 2, name: 'Product2', price: 200, description: desc},
                {id: 3, name: 'Product3', price: 300, description: desc},
                {id: 4, name: 'Product4', price: 400, description: desc}];

let cartItems = [{id: 1, name: 'Product1', price: 100, description: desc, quantity:2},
                {id: 4, name: 'Product4', price: 400, description: desc, quantity:1}];

app.get('/products', (req, res) => {
    res.render('products', {products : products});
});

app.get('/product/:id', (req, res) => {
    let id = req.params.id;
    let product = products.find(e => e.id === parseInt(id));
    res.render('product', {id : product.id, name : product.name, price : product.price, description : product.description});
});

app.post('/addToCart', (req, res) => {
    let id = req.body.id;
    console.log(id);
    res.redirect(303, 'products');
});

app.get('/cart', (req, res) => {
    res.render('shoppingCart', {cartItems : cartItems});
});

app.listen(3000, () => {console.log('Listening on port 3000')});