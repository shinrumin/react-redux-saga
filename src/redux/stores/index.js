import { createStore, applyMiddleware, compose } from 'redux'
import allReducer from '../reducers'
import rootSaga from '../sagas/rootSaga'
import createSagaMiddleware from 'redux-saga'

const middlewareSaga = createSagaMiddleware();

const store = createStore(allReducer, compose(applyMiddleware(middlewareSaga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) )

middlewareSaga.run(rootSaga)

export default store;
