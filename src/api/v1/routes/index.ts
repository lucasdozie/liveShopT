"use strict"

module.exports = (router: any) => {
    require("./user")(router);
    require("./show")(router);
    require("./inventory")(router);
};