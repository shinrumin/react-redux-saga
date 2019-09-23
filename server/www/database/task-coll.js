"use strict";

const BASE_COLL = require('./intalize/base-coll');
module.exports = BASE_COLL("task", {
    title: String,
    description: String,
    /**
     * props: status
     * 0 : dont task
     * 1: done task
     */
    status: { type: Number, default: 0 }
});