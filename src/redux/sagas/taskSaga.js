import { put, takeLatest } from 'redux-saga/effects'
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  ADD_TASK,
  DELETE_TASK_FAILURE,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK } from '../actions/actionType'
import { API } from './api'
import { updateTaskFailure, fetchDataSuccessAction, updateTaskSuccessAction, fetchDataAction } from '../actions';

function* fetchData() {
  try {
    const data = yield API.getListTask();
    console.log({ data })
    if (data.error === true) {
      yield put({ type: FETCH_DATA_FAILURE, payload: data.message })
    } else {
      yield put({ type: FETCH_DATA_SUCCESS, payload: data.data })
    }
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, payload: error })
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA, fetchData);
}

function* addTask(action) {
  try {
    const data = yield API.addTask(action.payload.title, action.payload.description);

    if (data.error === false) {
      yield put({ type: ADD_TASK_SUCCESS, payload: data.data })
    }
  } catch (error) {
    yield put({ type: ADD_TASK_FAILURE, payload: error })
  }
}

export function* watchAddTask() {
  yield takeLatest(ADD_TASK, addTask)
}

function* deleteTask(action){
  try {
    const data = yield API.deleteTask(action.payload);
    if(data.error === false){
      yield put({ type: DELETE_TASK_SUCCESS, payload: data.data._id });
    }
  } catch (error) {
    yield put({ type: DELETE_TASK_FAILURE, payload: error });

  }
}

export function* watchDeleteTask(){
  yield takeLatest(DELETE_TASK, deleteTask)
}

function* updateTask({ payload }) {
  try {
    const data = yield API.updateTask(payload._id, payload.title, payload.description);
    if(data.error === false){
      yield put(updateTaskSuccessAction())
      yield put(fetchDataAction())
    }
  } catch (error) {
    yield put(updateTaskFailure(error))
  }
}

export function* watchUpdateTask(){
  yield takeLatest(UPDATE_TASK, updateTask)
}
