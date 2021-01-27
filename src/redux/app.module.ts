import {Record} from 'immutable';
import {createSelector} from "reselect";
import {cloneDeep} from 'lodash';
import {all, takeEvery} from 'redux-saga/effects';

import {RootState} from "./root.reducer";
import * as actions from './action.constants/app.constants';
import {IActionTypes, IStateRecord} from "./module.interfaces/app.interface";

import {
    changeControlsSaga, fetchLandingSaga,
} from "./action.generators/app.generators";

export const moduleName = 'app';

const StateRecord: IStateRecord = {
    loading: false,
    error: undefined,

    portfolio: undefined,
    series: undefined,
    selectSeries: undefined,
    selectedPhoto: undefined,
    showPhotoPopup: false,


    homePage: undefined,
    portfolioPage: undefined,
    pricePage: undefined,
    aboutMePage: undefined,
    contacts: undefined,
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
                .set("portfolio", action.payload.portfolioPage.photos)
                .set("series", action.payload.homePage.series)

                .set("homePage", action.payload.homePage)
                .set("portfolioPage", action.payload.portfolioPage)
                .set("pricePage", action.payload.pricePage)
                .set("aboutMePage", action.payload.aboutMePage)
                .set("contacts", action.payload.contacts)

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

export const portfolioSelector = createSelector(stateSelector, state => state.get('portfolio'));
export const seriesSelector = createSelector(stateSelector, state => state.get('series'));
export const selectSeriesSelector = createSelector(stateSelector, state => state.get('selectSeries'));
export const selectedPhotoSelector = createSelector(stateSelector, state => state.get('selectedPhoto'));
export const showPhotoPopupSelector = createSelector(stateSelector, state => state.get('showPhotoPopup'));

export const homePageSelector = createSelector(stateSelector, state => state.get('homePage'));
export const portfolioPageSelector = createSelector(stateSelector, state => state.get('portfolioPage'));
export const pricePageSelector = createSelector(stateSelector, state => state.get('pricePage'));
export const aboutMePageSelector = createSelector(stateSelector, state => state.get('aboutMePage'));
export const contactsSelector = createSelector(stateSelector, state => state.get('contacts'));



export const saga = function* () {
    yield all([
        takeEvery(actions.CHANGE_CONTROLS, changeControlsSaga),
        takeEvery(actions.FETCH_LANDING, fetchLandingSaga),
    ]);
};