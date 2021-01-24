import {call, put} from 'redux-saga/effects';
import {
    changeControls,
    changeControlsSuccess, fetchLandingFailure, fetchLandingRequest, fetchLandingSuccess,
} from "../action.creators/app.actions";
import Contentful from "../../utils/contentful";
import {AboutMe, Contact, Package, Series} from "../../types";
import {VideoOverview} from "../../types/VideoOverview";


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

        console.log('response', response);

        const result = {
            avatar: response.fields.avatar.fields.file.url,
            aboutMe: new AboutMe({
                about_me_title: response.fields.about_me_title,
                about_me: response.fields.about_me,
                video_about_me: response.fields.video_about_me,
            }),
            photoBookVideo: new VideoOverview({
                title: response.fields.photo_book_video_title,
                description: response.fields.photo_book_description,
                video: response.fields.photo_book_video,
            }),
            packingVideo: new VideoOverview({
                title: response.fields.packing_video_title,
                description: response.fields.packing_description,
                video: response.fields.packing_video,
            }),
            videoHomePage: response.fields.video_home_page.fields.file.url,
            imagePrice: response.fields.image_price_page.fields.file.url,
            packages: response.fields.packages.map((el: any) => new Package(el)),
            portfolio: response.fields.portfolio.map((el: any) => new Series(el)),
            contacts: new Contact(response.fields.contacts),
        }

        console.log('result', result);

        yield put(fetchLandingSuccess(result));
    } catch (error) {
        console.log('ERROR', error);
        yield put(fetchLandingFailure(error.message))
    }
};