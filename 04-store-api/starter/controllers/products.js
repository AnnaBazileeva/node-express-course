const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await  Product.find('name: "entertainment center"')
    res.status(200).json({products, nbHits: products.length})
}
const getAllProducts= async (req, res) => {
    const {featured,company, name, price, _id, rating} =req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true'
    }
    if(company) {
        queryObject.company = company
    }
    if(name) {
        queryObject.name = name
    }
    if(price) {
        queryObject.price = price
    }
    if(name) {
        queryObject.rating = rating
    }
    if(_id) {
        queryObject.name = _id
    }
    console.log(queryObject)
    const products = await  Product.find(req.query)
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}