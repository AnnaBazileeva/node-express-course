const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await  Product.find({}).sort('name price')
    res.status(200).json({products, nbHits: products.length})
}
const getAllProducts= async (req, res) => {
    const {featured,company, name, price, _id, rating, sort} =req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true'
    }
    if(company) {
        queryObject.company = company
    }
    if(name) {
        queryObject.name = { $regex:name, $options: 'i'}
    }
    if(price) {
        queryObject.price = price
    }
    if(rating) {
        queryObject.rating = rating
    }
    if(_id) {
        queryObject._id = _id
    }
    console.log(queryObject)

    let result = Product.find(queryObject)
    if(sort) {
      const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }
    const products = await result
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}