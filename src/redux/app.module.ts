import {Record} from 'immutable';
import {createSelector} from "reselect";
import {cloneDeep} from 'lodash';
import {all, takeEvery, takeLatest, take} from 'redux-saga/effects';

import {RootState} from "./root.reducer";
import * as actions from './action.constants/app.constants';
import {IActionTypes, IStateRecord} from "./module.interfaces/app.interface";

import {
    changeControlsSaga, fetchLandingSaga,
} from "./action.generators/app.generators";
import {fetchLanding} from "./action.creators/app.actions";
import {AboutMe, Package, Series} from "../types";

export const moduleName = 'app';

const StateRecord: IStateRecord = {
    loading: false,
    error: undefined,
    avatar: undefined,
    aboutMe: undefined,
    videoHomePage: undefined,
    packages: undefined,
    portfolio: undefined,
    selectSeries: undefined,
    imagePrice: undefined,
    contacts: undefined,
    photoBookVideo: undefined,
    packingVideo: undefined,
};

export const ReducerRecord: Record.Factory<IStateRecord> = Record(cloneDeep(StateRecord));
type RecordType = ReturnType<typeof ReducerRecord>;

export default (state = new ReducerRecord(), action: IActionTypes) => {
    switch (action.type) {
        case actions.CHANGE_CONTROLS_SUCCESS: {
            return state
                .set(action.payload.name, action.payload.value)
        }
        case actions.FETCH_LANDING_REQUEST: {
            return state
                .set("loading", true);
        }
        case actions.FETCH_LANDING_SUCCESS: {
            return state
                .set("avatar", action.payload.avatar)
                .set("aboutMe", action.payload.aboutMe)
                .set("videoHomePage", action.payload.videoHomePage)
                .set("imagePrice", action.payload.imagePrice)
                .set("packages", action.payload.packages)
                .set("portfolio", action.payload.portfolio)
                .set("contacts", action.payload.contacts)
                .set("photoBookVideo", action.payload.photoBookVideo)
                .set("packingVideo", action.payload.packingVideo)
                .set("loading", false)
        }
        case actions.FETCH_LANDING_FAILURE: {
            return state
                .set("error", action.error)
                .set("loading", false)
        }
        default:
            return state;
    }
}

export const stateSelector = (state: RootState): RecordType => state[moduleName];
export const errorSelector = createSelector(stateSelector, state => state.get('error'));
export const loadingSelector = createSelector(stateSelector, state => state.get('loading'));
export const avatarSelector = createSelector(stateSelector, state => state.get('avatar'));
export const aboutMeSelector = createSelector(stateSelector, state => state.get('aboutMe'));
export const videoHomePageSelector = createSelector(stateSelector, state => state.get('videoHomePage'));
export const packagesSelector = createSelector(stateSelector, state => state.get('packages'));
export const portfolioSelector = createSelector(stateSelector, state => state.get('portfolio'));
export const selectSeriesSelector = createSelector(stateSelector, state => state.get('selectSeries'));
export const imagePriceSelector = createSelector(stateSelector, state => state.get('imagePrice'));
export const contactsSelector = createSelector(stateSelector, state => state.get('contacts'));
export const photoBookVideoSelector = createSelector(stateSelector, state => state.get('photoBookVideo'));
export const packingVideoSelector = createSelector(stateSelector, state => state.get('packingVideo'));


export const saga = function* () {
    yield all([
        takeEvery(actions.CHANGE_CONTROLS, changeControlsSaga),
        takeEvery(actions.FETCH_LANDING, fetchLandingSaga),
    ]);
};