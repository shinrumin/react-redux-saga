"use strict";

const cfModeDatabase = require('./cf_mode').database_product;

let product = {
    _mongod_name: '',
    _mongod_user: '',
    _mongodb_pass: '',
    _mongodb_host: '',
    _mongodb_port: ''
};

let dev = {
    _mongod_name: 'gentlemenShop',
    _mongod_user: '',
    _mongodb_pass: '',
    _mongodb_host: 'localhost',
    _mongodb_port: '27017'
};

module.exports = cfModeDatabase ? product : dev;
