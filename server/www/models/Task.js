"use strict";

const promise = require('bluebird');
const objectId = require('mongoose').Types.ObjectId;
const timeUtils = require('../utils/time_utils');
const stringUtils = require('../utils/string_utils');
const utils = require('../utils/utils');
const TASK_COLL = require('../database/task-coll');

const BaseModel = require('./intalize/base_model');

class Model extends BaseModel {

    constructor() {
        super(require('../database/task-coll'))
    }

    addTast(title, description){
        let that = this;
        return new Promise(async resolve => {
            try {
                let newTask = await that.insertData({
                    title, description
                })
                if(!newTask) return resolve({ error: true, message: 'cannot_add_task' })

                return resolve({ error: false, data: newTask })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    }

    deleteTaskById(id){
        let that = this;
        return new Promise(async resolve => {
            try {
                let removeTask = await TASK_COLL.findByIdAndRemove(id);
                if(!removeTask) return resolve({ error: true, message: 'cannot_remove_task' });

                return resolve({ error: false, data: removeTask });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    }

    updateTaskById(id, title, description){
        let that = this;
        return new Promise(async resolve => {
            try {
                let checkExist = await TASK_COLL.findById(id);
                if(!checkExist) return resolve({ error: true, message: 'cannot_find_id' });
                let updateTask = await TASK_COLL.findByIdAndUpdate(id, { title, description }, { new: true })
                if(!updateTask) return resolve({ error: true, message: 'cannot_update_task' });
                
                return resolve({ error: false, data: updateTask })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    }

    getListTask(){
        let that = this;
        return new Promise(async resolve => {
            try {
                let listTask = await TASK_COLL.find({});
                if(!listTask) return resolve({ error: true, message: 'cannot_get_list' });

                return resolve({ error: false, data: listTask });
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    }

    getTaskById(id){
        let that = this;
        return new Promise(async resolve => {
            try {
                let task = await TASK_COLL.findById(id);
                if(!task) return resolve({ error: true, message: 'cannot_get_task' });
                
                return resolve({ error: false, data: task })
            } catch (error) {
                return resolve({ error: true, message: error.message })
            }
        })
    }
}

exports.MODEL = new Model;