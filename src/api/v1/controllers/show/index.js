"use strict";
const ShowServices = require("./../../services/show")
const TransactionServices = require("./../../services/transaction")
//const InventoryServices = require("./../../services/inventory")
const {Inventory} = require("./../../models")
const getAllShow = (req, res, next) => {
    const {} = req.query

    console.log("GET ALL INVENTORY CONTROL")
    const newParams = Object.assign({}, {})
    //const foundData = await InventoryServices.getAll(newParams)

    return res.status(200).json({
        status: "success",
        data: []
    })
}

/**
 * @todo add a normalizer
*/
const intiateShow = async (req, res, next) => {
    const {} = req.query
    const foundData = await ShowServices.insertOne(req.body)
    console.log({res: foundData})
    return res.status(200).json(foundData)
}

const intiateManyShow = async (req, res, next) => {
    const {} = req.query

    console.log(req.params," : intiateInventory INVENTORY CONTROL : ",req.query)
    const newParams = Object.assign({}, {})
    const foundData = await ShowServices.insertMany(req.body, {ordered: true})

    return res.status(200).json(foundData)
}



const getOneItemSoldPerShow = async (req, res, next) => {
    //@todo 
    //
    const {show_id, item_id} = req.params

    console.log(req.params," : intiateInventory INVENTORY CONTROL : ",req.query)
    const newQuery = Object.assign({}, {
        show: show_id,
        inventory: item_id
    })
    const foundData = await TransactionServices.getOne(newQuery)

    return res.status(200).json(foundData)
}
const getAllItemSoldPerShow = async (req, res, next) => {
    const {show_id} = req.params
    const newQuery = Object.assign({}, {
        show: show_id
    })
    const foundData = await TransactionServices.getAll(newQuery, {ordered: true})

    return res.status(200).json(foundData)
}

const buyItemPerShow = async (req, res, next) => {
    //@todo 
    //Get the showID as a params
    const {show_id, item_id} = req.params
    const {quantityBought = 1, user} = req.query // assuming we are accepting quantity selected for purchase
    const getInventoryItem = await Inventory.findOne({_id: item_id});
    if(!getInventoryItem){
        return res.status(404).json({status: "success", message: "Sorry, Item is not found"})
    }
    if(getInventoryItem?.quantity < quantityBought){
        return res.status(404).json({status: "success", message: "Sorry, Item is sold out"})
    }

    let updateObj = Object.assign({}, {
        "$inc": {
            quantity: -quantityBought,
        },
        updated_at: new Date()
    })
    //after the item has been confirm including the availability
    //can make this an event 
    const newQuery = Object.assign({}, {_id: item_id, ProductPrice: {$gt: 0}})
    const updateInventoryItem = await Inventory.findOneAndUpdate(newQuery, updateObj, { new: true, upsert: false });
    const tranxObj = Object.assign({}, {
        show: show_id, //showId using the mongodbId
        inventory: item_id,
        user,
        description: "N/A",
        product: {
            itemId: item_id,
            itemName: getInventoryItem.itemName,
            quantity: quantityBought,
        },
    })
    const foundTransData = await TransactionServices.insertOne(tranxObj)
    
    return res.status(200).json(foundTransData)
}
module.exports = {
    getAllShow,
    intiateShow,
    getAllItemSoldPerShow,
    getOneItemSoldPerShow,
    buyItemPerShow,
    intiateManyShow
}