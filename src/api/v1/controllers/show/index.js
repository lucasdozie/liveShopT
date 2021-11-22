"use strict";
const ShowServices = require("./../../services/show")
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

    console.log(req.params," : intiateInventory INVENTORY CONTROL : ",req.query)
   // const newParams = Object.assign({}, {})
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
module.exports = {
    getAllShow,
    intiateShow,
    intiateManyShow
}