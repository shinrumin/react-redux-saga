import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_TASK,
  DELETE_TASK_FAILURE,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  SHOW_DIALOG,
  HIDE_DIALOG,
  DATA_ITEM,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE
} from "./actionType"



export const fetchDataAction = () => ({
  type: FETCH_DATA
})

export const fetchDataSuccessAction = tasks => ({
  type: FETCH_DATA_SUCCESS,
  payload: tasks
})

export const fetchDataFailureAction = error => ({
  type: FETCH_DATA_FAILURE,
  payload: error
})

export const addTaskAction = (title, description) => ({
  type: ADD_TASK,
  payload: { title, description }
})

export const addTaskSuccessAction = (task) => ({
  type: ADD_TASK,
  payload: task
})

export const addTaskFailureAction = (error) => ({
  type: ADD_TASK,
  payload: error
})

export const deleteTaskAction = id => ({
  type: DELETE_TASK,
  payload: id
})

export const deleteTaskSuccessAction = id => ({
  type: DELETE_TASK_SUCCESS,
  payload: id
})

export const deleteTaskFailure = error => ({
  type: DELETE_TASK_FAILURE,
  payload: error
})

export const showDialogAction = () => ({
  type: SHOW_DIALOG
})

export const hideDialogAction = () => ({
  type: HIDE_DIALOG
})

export const getItemToDialogAction = data => ({
  type: DATA_ITEM,
  payload: data
})

export const updateTaskAction = data => ({
  type: UPDATE_TASK,
  payload: data
})

export const updateTaskSuccessAction = () => ({
  type: UPDATE_TASK_SUCCESS
})

export const updateTaskFailure = error => ({
  type: UPDATE_TASK_FAILURE,
  payload: error
})
