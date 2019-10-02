const express = require("express");
const routing = express.Router();
const modules = require('../model/DB');
const fs = require("fs");

const renderHTML = (path, response, request) => {
    fs.readFile(path, null, (err, data) => {
        if (err) {
            response.writeHead(404);
            response.write("file not found");
        } else {
            console.log(path);
            response.write(data);
        }
        response.end();
    });
};

const routeHandler1 = (req, res, next) => {
    renderHTML("./views/home.html", res, req);
}


const routeHandler3 = (req, res, next) => {
    const ProdName = req.body.ProdName;
    const ImageURL = req.body.ImageURL;
    const Desc = req.body.Desc;
    const Price = req.body.Price;

    console.log(req.body);

    console.log("request for POST request received");

    let result = module.addProduct(ProdName, ImageURL, Desc, Price);
    if (result)
        res.json({ "message": "User successfully Logged in with user name: " + result });
    else {
        let err = new Error();
        err.status = 401;
        err.message = "Unauthorized access!!"
        next(err);
    }
}

routing.get("/retrieveProducts", routeHandler1);
routing.post("/postProducts", routeHandler3);
module.exports = routing;
