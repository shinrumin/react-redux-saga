"use strict";

const promise = require('bluebird');
const roles = require('../../config/cf_role');
const ChildRouter = require('../child_routing');
const TASK_MODEL = require('../../models/Task').MODEL

module.exports = class Auth extends ChildRouter {
    constructor() {
        super('/task');
    }

    registerRouting(io) {
        return {
            '/get-list-task': {
                config: {
                    auth: [ roles.role.guest.bin ],
                    type: 'json',
                },
                methods: {
                    get: [ async function (req, res) {
                        let result = await TASK_MODEL.getListTask();
                        res.json(result)
                    }]
                },
            },

            '/get-task/:id': {
                config: {
                    auth: [ roles.role.guest.bin ],
                    type: 'json',
                },
                methods: {
                    get: [ async function (req, res) {
                        let { id } = req.params;
                        let result = await TASK_MODEL.getTaskById(id);
                        res.json(result)
                    }]
                },
            },

            '/add-task': {
                config: {
                    auth: [ roles.role.guest.bin ],
                    type: 'json',
                },
                methods: {
                    post: [ async function (req, res) {
                        let { title, description } = req.body;
                        let result = await TASK_MODEL.addTast(title, description);
                        res.json(result)
                    }]
                },
            },

            '/update-task/:id': {
                config: {
                    auth: [ roles.role.guest.bin ],
                    type: 'json',
                },
                methods: {
                    post: [ async function (req, res) {
                        let { title, description } = req.body;
                        let { id } = req.params;
                        let result = await TASK_MODEL.updateTaskById(id, title, description);
                        res.json(result)
                    }]
                },
            },

            '/delete-task/:id': {
                config: {
                    auth: [ roles.role.guest.bin ],
                    type: 'json',
                },
                methods: {
                    post: [ async function (req, res) {
                        let { id } = req.params;
                        let result = await TASK_MODEL.deleteTaskById(id);
                        res.json(result)
                    }]
                },
            },
        }
    }
};
