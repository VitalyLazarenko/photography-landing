import {all} from 'redux-saga/effects';
import {saga as appSaga} from "./app.module";

export default function* root () {
    yield all([
        appSaga()
    ])
}