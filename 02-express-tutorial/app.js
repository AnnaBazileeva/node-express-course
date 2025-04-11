const express = require("express");
const app = express();
let {people} = require('./data')

// const logger = require('./logger')
// const authorize = require('./authorize')
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.get('/api/people', (req,res) => {
    res.status(200).json({success:true, data:people})
})
app.post('/login', (req,res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide name')
})

app.get('/',  (req, res) => {
    res.send('Home page')
})
app.get('/about',  (req, res) => {
    res.send('About')
})

// app.use(express.static("./public/"));
//

app.get("/api/v1/products", (req, res) => {
    // const newProducts = products.map((product)=>{
    //     const {id, name, image} = product
    //     return {id, name, image}
    // })
    // res.json( newProducts);
    res.send('Products')
});

app.get('api/items', (req,res) => {
    console.log(req.user)
    res.send('Items')
})
//
// app.get('/api/v1/products/:productID', (req, res) => {
//     const {productID} = req.params;
//
//
//     const singleProduct = products.find((product) => product.id === Number(productID))
//     res.json(singleProduct)
//
//
//     if (!singleProduct) {
//         return res.status(404).json({ error: "Product not found" });
//     }
//
//     return res.json(singleProduct);
// });
//
//
// app.get('/api/v1/query', (req, res) => {
//     const {search, limit, maxPrice, minPrice} = req.query
//
//     let results = [...products]
//
//     if(search) {
//         results = results.filter(product => {
//             return product.name.toLowerCase().includes(search.toLowerCase());
//         })
//     }
//
//     if (maxPrice) {
//         const price = parseFloat(maxPrice);
//         if (!isNaN(price)) {
//             results = results.filter(product => product.price <= price);
//         } else {
//             return res.status(400).json({ error: "Invalid maxPrice value" });
//         }
//     }
//     if (minPrice) {
//         const price = parseFloat(minPrice);
//         if (!isNaN(price)) {
//             results = results.filter(product => product.price >= price);
//         } else {
//             return res.status(400).json({ error: "Invalid minPrice value" });
//         }
//     }
//
//     if(limit) {
//         results = results.slice(0, Number(limit))
//     }
//         if (results.length < 1) {
//            return res.status(200).json({success: true, data: []})
//         }
//         res.status(200).json(results);
// })
//
// app.all("*", (req, res) => {
//     res.status(404).send("<h1>Page Not Found</h1>");
// });
app.listen(3000, () => {
    console.log("server listening on port 3000...");
});

console.log("Express Tutorial");
