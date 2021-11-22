"use strict"
import InventoryController from "./../controllers/inventory";

import tryCatchWrapper from "./../helpers/tryCatchWrapper"

module.exports = (router: any) => {
    router.get("/", tryCatchWrapper(InventoryController.getAllInventory)),
    router.get("/test", tryCatchWrapper(InventoryController.getAllInventory))
};
