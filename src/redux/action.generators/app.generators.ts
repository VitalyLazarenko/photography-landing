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

        const _series_promises: any[] = [];

        response.fields.home_page.fields.series.forEach((series: any) => {

            const promise = new Promise(async (response) => {

                const entry = await _instance.client.getEntry(series.sys.id && series.sys.id);

                response(entry);
            })

            _series_promises.push(promise)
        });

        const _packages_promises: any[] = [];

        response.fields.price_page.fields.packages.forEach((pack: any) => {

            const promise = new Promise(async (response) => {

                const entry = await _instance.client.getEntry(pack.sys.id && pack.sys.id);

                response(entry);
            })

            _packages_promises.push(promise)
        });

        const series = yield call(async () => await Promise.all(_series_promises));
        const packages = yield call(async () => await Promise.all(_packages_promises));

        response.fields.price_page.fields.packages = packages;
        response.fields.home_page.fields.series = series;


        console.log('RESPONSE: ',  response);

        const result = {
            homePage: new HomePage(response.fields.home_page),
            portfolioPage: new PortfolioPage(response.fields.portfolio_page),
            pricePage: new PricePage(response.fields.price_page),
            aboutMePage: new AboutMePage(response.fields.about_page),
            contacts: new Contacts(response.fields.contacts),
        }

        console.log('RESULT: ', result);

        yield put(fetchLandingSuccess(result));
    } catch (error) {
        console.log('ERROR', error);
        yield put(fetchLandingFailure(error.message))
    }
};