import {call, put} from 'redux-saga/effects';
import {
    changeControls,
    changeControlsSuccess, fetchLandingFailure, fetchLandingRequest, fetchLandingSuccess,
} from "../action.creators/app.actions";
import Contentful from "../../utils/contentful";
import {Contacts, AboutMePage, HomePage, PortfolioPage, PricePage} from "../../types";

const _instance = Contentful.getInstance();

export const changeControlsSaga = function* ({payload}: ReturnType<typeof changeControls>) {
    yield put(changeControlsSuccess({...payload}));
};

//TODO need create fetch methods entry in CF
export const fetchLandingSaga = function* () {
    try {
        yield put(fetchLandingRequest());

        const response: any = yield call(async () => {
            return await _instance.client.getEntry("3fpfAZt1PRbAYgbiI1XL93")
        });

        console.log('RESPONSE:', response);

        const newResult = {
            homePage: new HomePage(response.fields.home_page),
            portfolioPage: new PortfolioPage(response.fields.portfolio_page),
            pricePage: new PricePage(response.fields.price_page),
            aboutMePage: new AboutMePage(response.fields.about_page),
            contacts: new Contacts(response.fields.contacts),
        }

        console.log('NEW RESULT: ', newResult);

        yield put(fetchLandingSuccess(newResult));
    } catch (error) {
        console.log('ERROR', error);
        yield put(fetchLandingFailure(error.message))
    }
};