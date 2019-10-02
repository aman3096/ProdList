const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/ProductDB").catch((error) => {
    let err = new Error("Could not connect to Database")
    err.status = 500;
    throw err;
});

const schema = {
    "ProdName": {
        type: String,
        required: true,
        unique: true
    },
    "ImageURL": {
        type: String,
        required: true,
        unique: true

    },
    "Desc": {
        type: String,
        required: true
    },
    "Price": {
        type: Number,
        required: true,
        min: [100, 'Minimum 100 value'],
    }
}

let productSchema = mongoose.Schema(schema, { collection: 'Product' });

let ProductModel = mongoose.model("Product", productSchema);
let prods = {}

prods.addProduct = function (productObj) {
    return ProductModel.create(productObj).then((insertedData) => {
        if (insertedData) {
            return insertedData;
        }
        else {
            let err = new Error("Data not inserted")
            err.status = 500
            throw err;
        }
    });
}
let obj = {
    ProdName: "Realme 3 Pro",
    ImageURL: "dfbhfgh",
    Desc: "Innovation meets tech",
    Price: 13000,
}

prods.addProduct(obj).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err.message)
})
exports.ProductModel = mongoose.model("Product", productSchema);



