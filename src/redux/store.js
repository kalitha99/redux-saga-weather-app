import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootreducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middelWare = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middelWare));

sagaMiddleware.run(rootSaga);

export default store;
