"use strict";

const { NotFoundError } = require("../utils/errors");
const { successResponse } = require("../utils/httpStatus");

const DataRepository = require("./../dataRepository/show");
//@todo DI: Dependency Injection pattern
/**
 * @name Show
 * @private
 */
module.exports = {
  insertOne: async function(reqData) {
    const modelInstance = await DataRepository.create(reqData);
    const data = await DataRepository.save(modelInstance);
    if (!data || data?.statusCode == 404) {
      throw new NotFoundError(`ERROR: ${data}`);
    }
    return successResponse({ data });
  },
  insertMany: async function(reqData, ordered) {
    const data = await DataRepository.createMany(reqData, ordered);
    console.log("data......", { data });
    if (!data || data?.statusCode == 404) {
      throw new NotFoundError(`ERROR: ${data}`);
    }
    return successResponse({ data });
  },
  getAll: async function(query, queryTimeoutMs = 6000) {
    const data = await DataRepository.findAll(query, queryTimeoutMs);
    if (!data) {
      throw new NotFoundError("Not found");
    }
    return successResponse({ data });
  },
  getOne: async function(query) {
    const data = await DataRepository.findOne(query);
    if (!data) {
      throw new NotFoundError("Not found");
    }
    return successResponse({ data });
  },
  getAndUpdate: async function(query, updateObj, others) {
    const data = await DataRepository.findOneByIdAndUpdate(
      query,
      updateObj,
      others
    );
    if (!data) {
      throw new NotFoundError("Not found ");
    }
    return successResponse({ data });
  },
  getModelKeys: async function() {
    const data = await DataRepository.findModelKeys();
    if (!data) {
      throw new NotFoundError("Not found");
    }
    return successResponse({ data });
  },
  getAllWithParams: async function(query, paginate) {
    const data = await DataRepository.findAllWithParams(query, paginate);
    const totalDocCount = await DataRepository.countDocuments(query);
    const { page, nPerPage } = paginate;
    const meta = {
      totalDocCount,
      nPerPage,
      page,
      pageCount: data?.length
    };
    if (!data) {
      throw new NotFoundError("Not found");
    }
    return successResponse({ data, meta });
  }
};