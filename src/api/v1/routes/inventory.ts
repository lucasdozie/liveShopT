"use strict"
import InventoryController from "./../controllers/inventory";

import tryCatchWrapper from "./../helpers/tryCatchWrapper"

import {URI} from "./../config/env"
const RESOURCE_NAME = "inventory";
let BASE_URL = `${URI}${RESOURCE_NAME}`;

console.log(".......... InventoryController")
module.exports = (router: any) => {
    router.post(`${BASE_URL}/initiateMany`, tryCatchWrapper(InventoryController.intiateManyInventory)),
    router.post(`${BASE_URL}/`, tryCatchWrapper(InventoryController.intiateInventory)),
    router.put(`${BASE_URL}/:itemId`, tryCatchWrapper(InventoryController.intiateInventory)),
    router.get(`${BASE_URL}/:itemId`, tryCatchWrapper(InventoryController.getOneInventory)),
    router.get(`${BASE_URL}/`, tryCatchWrapper(InventoryController.getAllInventory)),
    router.get(`${BASE_URL}/gelAll`, tryCatchWrapper(InventoryController.getAllInventory)),
    router.get(`${BASE_URL}/test`, tryCatchWrapper(InventoryController.getAllInventory))
}
