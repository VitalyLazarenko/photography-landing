import {all, call, put} from 'redux-saga/effects';
import {
    changeControls,
    changeControlsSuccess, fetchLandingFailure, fetchLandingRequest, fetchLandingSuccess,
} from "../action.creators/app.actions";
import Contentful from "../../utils/contentful";
import {AboutMe, Package, Series} from "../../types";


const _instance = Contentful.getInstance();
const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

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

        const result = {
            avatar: response.fields.avatar.fields.file.url,
            aboutMe: new AboutMe({
                about_me_title: response.fields.about_me_title,
                about_me: response.fields.about_me,
                video_about_me: response.fields.video_about_me,
            }),
            videoHomePage: response.fields.video_home_page.fields.file.url,
            packages: response.fields.packages.map((el: any) => new Package(el)),
            portfolio: response.fields.portfolio.map((el: any) => new Series(el)),
        }

        console.log('result', result);

        yield put(fetchLandingSuccess(result));
    } catch (error) {
        console.log('ERROR', error);
        yield put(fetchLandingFailure(error.message))
    }
};