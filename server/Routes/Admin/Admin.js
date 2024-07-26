const express = require('express')
const Router = express.Router()
const {AdminAuth} = require('../../Authentication/Auth')
const {AddProduct,upload} = require('../../Controllers/admin/AddProduct')
const {AllProductsGet} = require('../../Controllers/admin/AllProdGet')
const {DeleteProduct} = require('../../Controllers/admin/DeleteProduct')
const {updateProduct} = require('../../Controllers/admin/UpdateProduct')
const {AllCustomers} = require('../../Controllers/Customer/AllCustomer')
const {DeleteUser} = require('../../Controllers/Customer/DeleteUser')
const {GetOrders} = require('../../Controllers/Orders/GetOrders')
const {updateOrder} = require('../../Controllers/Orders/UpdateOrder')
//Admin route to add Product
Router.post('/addProduct',upload.array('files',5),AddProduct)
//Get all products in Admin
Router.get("/allproducts",AllProductsGet)
//Deleting the product 
Router.delete("/productdelete/:id",DeleteProduct)
//Updating the product
Router.put('/updateproduct/:id', upload.array('files'), updateProduct);
//All Customers
Router.get('/customer', AllCustomers)
//Delete Customer 
Router.delete('/customer/:id',DeleteUser)
//Get All Orders
Router.get('/order',GetOrders)
//Update Order status 
Router.put('/order/:id',updateOrder)
module.exports = Router