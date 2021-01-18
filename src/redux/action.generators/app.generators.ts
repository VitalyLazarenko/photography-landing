import {all, call, put} from 'redux-saga/effects';
import {
    changeControls,
    changeControlsSuccess,
} from "../action.creators/app.actions";
import Contentful from "../../utils/contentful";


const _instance = Contentful.getInstance();
const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

export const changeControlsSaga = function* ({payload}: ReturnType<typeof changeControls>) {
    yield put(changeControlsSuccess({...payload}));
};

//TODO need create fetch methods entry in CF