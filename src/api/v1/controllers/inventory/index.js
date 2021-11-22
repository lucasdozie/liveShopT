"use strict";
const InventoryServices = require("./../../services/inventory")
const {Inventory} = require("./../../models")
const getAllInventory = async (req, res, next) => {
    const {} = req.query

    console.log("GET ALL INVENTORY CONTROL")
    const newParams = Object.assign({}, {})
    //const foundData = await InventoryServices.getAll(newParams)
    const foundData = await InventoryServices.getAll(newParams)
    console.log({res: foundData})
    return res.status(200).json(foundData)
}

const getOneInventory = async (req, res, next) => {
    const {itemId} = req.params

    console.log("GET ALL INVENTORY CONTROL")
    const newParams = Object.assign({}, {
        itemId
    })
    const foundData = await InventoryServices.getOne(newParams)
    console.log({res: foundData})
    return res.status(200).json(foundData)
}

/**
 * @todo add a normalizer
*/
const intiateInventory = async (req, res, next) => {
    const {itemId, itemName, quantity} = req.body;
    //check if ItenId Already exist
    const newParams = Object.assign({}, {
        itemId
    })
   const foundInvent = await Inventory.findOne(newParams)
   console.log("after invent:",foundInvent)
    if(foundInvent !== null) {
        let updateObj = Object.assign({}, {
            "$set": {
                itemName,
                quantity,
                updated_at: new Date()
            }
        })
        const updatedData = await InventoryServices.getAndUpdate({itemId: itemId}, updateObj, { new: true, upsert: false });
        return res.status(200).json(updatedData)
    }
    const foundRes = await InventoryServices.insertOne(req.body)
    return res.status(200).json(foundRes)
}

/**
 * @todo add a normalizer
*/
const updateRecord = async (req, res, next) => {
    const {itemId} = req.body

    console.log(req.params," : intiateInventory INVENTORY CONTROL : ",req.body)
    //check if ItenId Already exist
    const query = {itemId: itemId};
    //delete req.body.itemId
    // const updateObj = Object.assign({}, req.body)
    // const others = {}
    const foundData = await InventoryServices.getAndUpdate({itemId: itemId}, req.body, { new: true, upsert: false });
    //const foundData = await InventoryServices.insertOne(req.body)
    console.log({res: foundData, itemId})
    return res.status(200).json(foundData)
}

const intiateManyInventory = async (req, res, next) => {
    const {} = req.query

    console.log(req.params," : intiateInventory INVENTORY CONTROL : ",req.query)
    const newParams = Object.assign({}, {})
    const foundData = await InventoryServices.insertMany(req.body, {ordered: true})

    return res.status(200).json(foundData)
}
module.exports = {
    getAllInventory,
    intiateInventory,
    intiateManyInventory,
    updateRecord,
    getOneInventory
}