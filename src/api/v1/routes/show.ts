"use strict"
import ShowController from "./../controllers/show";
import tryCatchWrapper from "./../helpers/tryCatchWrapper"
import {URI} from "./../config/env"
const RESOURCE_NAME = "show";
let BASE_URL = `${URI}${RESOURCE_NAME}`;

module.exports = (router: any) => {
  router.post(`${BASE_URL}/create`, tryCatchWrapper(ShowController.intiateShow)),
  router.post(`${BASE_URL}/:show_id/buy_item/:item_id`, tryCatchWrapper(ShowController.buyItemPerShow)), //Initiate a transaction
  router.get(`${BASE_URL}/:show_id/sold_items/:item_id`, tryCatchWrapper(ShowController.getSoldItemPerShow)),
  router.get(`${BASE_URL}/getAll`, tryCatchWrapper(ShowController.getAllShow)),
  router.get(`${BASE_URL}/test`, tryCatchWrapper(ShowController.getAllShow))
}
