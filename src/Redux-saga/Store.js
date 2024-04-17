import { applyMiddleware, createStore } from "redux";
import rootReducers from './rootReducer'
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./Saga";

let SagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducers,composeWithDevTools( applyMiddleware(SagaMiddleware)))

SagaMiddleware.run(rootSaga)
export default store;