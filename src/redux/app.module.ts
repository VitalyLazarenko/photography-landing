import {Record} from 'immutable';
import {createSelector} from "reselect";
import {cloneDeep} from 'lodash';
import {all, takeEvery, takeLatest, take} from 'redux-saga/effects';

import {RootState} from "./root.reducer";
import * as actions from './action.constants/app.constants';
import {IActionTypes, IStateRecord} from "./module.interfaces/app.interface";

import {
    changeControlsSaga,
} from "./action.generators/app.generators";

export const moduleName = 'app';

const StateRecord: IStateRecord = {
    loading: false,
    error: undefined,

};

export const ReducerRecord: Record.Factory<IStateRecord> = Record(cloneDeep(StateRecord));
type RecordType = ReturnType<typeof ReducerRecord>;

export default (state = new ReducerRecord(), action: IActionTypes) => {
    switch (action.type) {
        case actions.CHANGE_CONTROLS_SUCCESS: {
            return state
                .set(action.payload.name, action.payload.value)
        }
        default:
            return state;
    }
}

export const stateSelector = (state: RootState): RecordType => state[moduleName];
export const loadingSelector = createSelector(stateSelector, state => state.get('loading'));
export const errorSelector = createSelector(stateSelector, state => state.get('error'));

export const saga = function* () {
    yield all([
        takeEvery(actions.CHANGE_CONTROLS, changeControlsSaga),
    ]);
};