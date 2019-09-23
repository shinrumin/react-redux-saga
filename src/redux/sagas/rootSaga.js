import { all, fork } from 'redux-saga/effects'
import { watchFetchData, watchAddTask, watchDeleteTask, watchUpdateTask } from './taskSaga'

export default function* rootSaga() {
  yield all([
    fork(watchFetchData),
    fork(watchAddTask),
    fork(watchDeleteTask),
    fork(watchUpdateTask)
  ])
}
