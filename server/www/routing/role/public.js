"use strict";

const promise = require('bluebird');
const roles = require('../../config/cf_role');
const ChildRouter = require('../child_routing');

module.exports = class Auth extends ChildRouter {
    constructor() {
        super('/task');
    }

    registerRouting(io) {
        return {
            '/test': {
                config: {
                    auth: [ roles.role.guest.bin ],
                    view: 'index.ejs',
                    inc: 'inc/index.ejs',
                    title: 'AST',
                    type: 'view',
                },
                methods: {
                    get: [ function (req, res) {
                        ChildRouter.renderToView(req, res);
                    }]
                },
            },

            // '/': {
            //     config: {
            //         auth: [ roles.role.guest.bin ],
            //         type: 'json',
            //     },
            //     methods: {
            //         get: [ function (req, res) {
            //             ChildRouter.responseSuccess('hello', res, {});
            //         }]
            //     },
            // },
            '/get-list-task': {
                config: {
                    auth: [ roles.role.guest.bin ],
                    type: 'json',
                },
                methods: {
                    get: [ function (req, res) {
                    }]
                },
            },
        }
    }
};
