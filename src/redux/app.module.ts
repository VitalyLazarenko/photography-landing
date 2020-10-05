import {Record} from 'immutable';
import {createSelector} from "reselect";
import {cloneDeep} from 'lodash';
import {all, takeEvery, takeLatest, take} from 'redux-saga/effects';

import {RootState} from "./root.reducer";
import * as actions from './action.constants/app.constants';
import {IActionTypes, IStateRecord} from "./module.interfaces/app.interface";

import {
    changeControlsSaga,
    fetchAssetsSaga,
    fetchDistributorsSaga,
    sendMailSaga
} from "./action.generators/app.generators";

export const moduleName = 'app';

const StateRecord: IStateRecord = {
    loading: false,
    error: undefined,
    panels: [...panels],
    sliders: [...sliders],
    categories: [...categories],
    features: [...features],
    drawer_state: false,
    filter: 'All',
    search: undefined,
    searching: false,
    matches: undefined,
    gsa: undefined,
    gsaRes: undefined,
    models: undefined,
    adjustments: undefined,
    adjustment: undefined,
    screenshot: '',
    regions: undefined,
    region: undefined,
};

export const ReducerRecord: Record.Factory<IStateRecord> = Record(cloneDeep(StateRecord));
type RecordType = ReturnType<typeof ReducerRecord>;

export default (state = new ReducerRecord(), action: IActionTypes) => {
    switch (action.type) {
        case actions.FETCH_ASSETS_REQUEST: {
            return state
                // .set('loading', true)
                .set('error', undefined)
        }
        case actions.FETCH_ASSETS_SUCCESS: {
            if (action.payload.name === 'adjustments') {
                return state
                    .set(action.payload.name.slice(0, -1) as keyof IStateRecord, action.payload.value[0])
                    .set('screenshot', action.payload.value[0].screenshots[0])
                    .set('loading', false)
                    .set('error', undefined)
            } else {
                return state
                    .set(action.payload.name, action.payload.value)
                    .set('loading', false)
                    .set('error', undefined)
            }
        }
        case actions.FETCH_ASSETS_FAILURE: {
            return state
                .set('loading', false)
                .set('error', action.error)
        }
        case actions.SEARCH_REQUEST: {
            return state
                .set('searching', true)
                .set('matches', undefined)
        }
        case actions.SEARCH_SUCCESS: {
            return state
                .set('searching', false)
                .set('matches', action.matches)
        }
        case actions.GSA_SUCCESS: {
            return state
                .set('gsaRes', action.response)
        }
        case actions.CHANGE_CONTROLS_SUCCESS: {
            return state
                .set(action.payload.name, action.payload.value)
        }
        case actions.FETCH_DISTRIBUTORS_REQUEST: {
            return state
                .set('loading', true)
        }
        case actions.FETCH_DISTRIBUTORS_SUCCESS: {
            return state
                .set('regions', action.regions)
                .set('region', action.regions[0])
                .set('loading', false)
        }
        case actions.FETCH_DISTRIBUTORS_FAILURE: {
            return state
                .set('loading', false)
                .set('error', action.error)
        }
        case actions.SEND_MAIL_FAILURE: {
            return state
                .set('loading', false)
                .set('error', action.error)
        }
        default:
            return state;
    }
}

export const stateSelector = (state: RootState): RecordType => state[moduleName];
// export const loadingSelector = createSelector(stateSelector, state => state.get('loading'));
// export const errorSelector = createSelector(stateSelector, state => state.get('error'));
// export const screenshotSelector = createSelector(stateSelector, state => state.get("screenshot"));

export const saga = function* () {
    yield all([
        takeEvery(actions.CHANGE_CONTROLS, changeControlsSaga),
        takeEvery(actions.FETCH_ASSETS, fetchAssetsSaga),
        takeEvery(actions.FETCH_DISTRIBUTORS, fetchDistributorsSaga),
        takeEvery(actions.SEND_MAIL, sendMailSaga),
    ]);
};