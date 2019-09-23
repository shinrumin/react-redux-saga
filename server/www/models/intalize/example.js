"use strict";

const promise = require('bluebird');
const objectId = require('mongoose').Types.ObjectId;
const timeUtils = require('../utils/time_utils');
const stringUtils = require('../utils/string_utils');
const utils = require('../utils/utils');

const BaseModel = require('./intalize/base_model');

class Model extends BaseModel {

    constructor() {
        super(require('../database/aff-account-commission-transaction-coll'))
    }

    insertTransaction() {
        const that = this;
        return new promise(function (resolve) {

        })
    }
}

exports.MODEL = new Model;