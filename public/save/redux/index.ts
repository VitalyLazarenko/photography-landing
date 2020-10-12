import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from "react-router-redux";
import history from "../utils/app.helpers/history";
import reducer from "./root.reducer";
import saga from './root.saga';

const sagaMiddleware = createSagaMiddleware();
const rotesMiddleware = routerMiddleware(history);
const enhancer = applyMiddleware(sagaMiddleware, rotesMiddleware);

const store = createStore(reducer, compose(enhancer));
sagaMiddleware.run(saga);

store.subscribe(() => {
    //@ts-ignore
    window.state = store.getState()
});

export default store;