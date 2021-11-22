"use strict"
import ShowController from "./../controllers/show";
import tryCatchWrapper from "./../helpers/tryCatchWrapper"
import {URI} from "./../config/env"
const RESOURCE_NAME = "show";
let BASE_URL = `${URI}${RESOURCE_NAME}`;

console.log(".......... ShowController")
module.exports = (router: any) => {
  router.post(`${BASE_URL}/:show_id/buy_item/:item_id`, tryCatchWrapper(ShowController.intiateShow)),
  router.get(`${BASE_URL}/:show_id/sold_items/:item_id`, tryCatchWrapper(ShowController.getAllShow)),
  router.get(`${BASE_URL}/test`, tryCatchWrapper(ShowController.getAllShow))
}
