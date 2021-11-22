"use strict";
const { Inventory } = require("../models");
/**
 * @name create
 * @param {Object} reqBody
 * @public
 **/
const create = async function(reqBody = {}) {
  return await new Inventory(reqBody);
};

/**
 * @name save
 * @param {Object} createInstance
 * @private
 * */
const save = async function(createInstance = {}) {
  return await createInstance.save();
};

/**
 * @name createMany
 * @param {Object} reqBody
 * @param {boolean} ordered
 * @public
 * */
const createMany = async function(reqBody = [], ordered = false) {
  return await Inventory.insertMany(reqBody, { ordered }, (error, docs) => {
    if (error) {
      console.log("error:. ", error);
      return { message: error };
    }
    if (docs) {
      console.log("docs:. ", docs);
      return { data: docs };
      //return { status: "success", statusCode: 200, data: docs };
      //@todo
    }
  });
};

/**
 * @name countDocuments
 * @param {Object} reqBody
 * @param {boolean} ordered
 * @public
 * */
const countDocuments = async (query = {}) => {
  return await Inventory.countDocuments(query);
};

/**
 * @name findAllWithParams
 * @param {object} query
 * @param {boolean} paginate
 * @public
 * */
const findAllWithParams = async (query = () => {}, paginate = {}) => {
  const { page, nPerPage } = paginate;
  return await Inventory.find(query)
    .sort({ created_at: -1 })
    .skip(Math.abs((page - 1) * nPerPage))
    .limit(nPerPage)
    .select(" -__v");
};

/**
 * @name findAll
 * @param {Object} query
 * @param {boolean} timeMS
 * @public
 * */
const findAll = async (query = () => {}, timeMS = 1000) => {
  console.time("QUERY_TIME");
  const foundData = await Inventory.find(query)
    .sort({ created_at: -1 })
    .select("-__v")
    .lean()
    .maxTimeMS(timeMS);
  console.timeEnd("QUERY_TIME");
  return foundData;
};

/**
 * @name findOne
 * @param {Object} query
 * @public
 * @return {Object}
 * */
const findOne = async (query = () => {}, timeMS = 1000) => {
  console.time("QUERY_TIME");
  const foundData = await Inventory.findOne(query)
    .sort({ created_at: -1 })
    .select("-__v")
    .lean()
    .maxTimeMS(timeMS);
  console.timeEnd("QUERY_TIME");
  return foundData;
};

const findOneByIdAndUpdate = async (
  query = () => {},
  update = {},
  other = {}
) => {
  const foundData = await Inventory.findOneAndUpdate(query, update, other);
  return foundData;
};

module.exports = {
  findAllWithParams,
  findAll,
  findOne,
  findOneByIdAndUpdate,
  countDocuments,
  create,
  createMany,
  save
};
