import {all, call, put} from 'redux-saga/effects';
import {
    changeControls,
    changeControlsSuccess,
    fetchDistributorsFailure,
    fetchDistributorsRequest,
    fetchDistributorsSuccess,
    sendMailFailure,
    sendMailRequest,
    sendMailSuccess,
    searchRequest,
    searchSuccess, sendMail, gsaSuccess
} from "../action.creators/app.actions";
import {
    fetchAssets,
    fetchAssetsRequest,
    fetchAssetsSuccess,
    fetchAssetsFailure
} from "../action.creators/app.actions";

// import Contentful from "../../utils/app.helpers/contentful";
import Model from "../../types/Model";
import Seating from "../../types/Seating";
import Region from "../../types/Region";
import Distributor from "../../types/Distributor";
// import axios from "axios";
import {SERVER_API} from "../api.constants";
import {useDispatch} from "react-redux";

// const _instance = Contentful.getInstance();
const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

export const changeControlsSaga = function* ({payload}: ReturnType<typeof changeControls>) {
    yield put(changeControlsSuccess({...payload}));

    if (payload.name === 'search' || payload.name === 'gsa') {
        if (payload.value === 'GSA') {
            console.log('GSA - test!');
            try {
                // const response = yield call(async () => {
                //     return await _instance.client.getEntries({
                //         'fields.gsa': true,
                //         content_type: 'model'
                //     })
                // })
                // console.log('response', response);
                // const models = response.items.map((el: any) => new Model(el));
                // yield put(gsaSuccess(models));
            } catch (e) {
                console.error('e', e)
            }
        } else {
            if (payload.value) {
                try {
                    // const response = yield call(async () => {
                    //     return await _instance.client.getEntries({
                    //         'fields.title[match]': payload.value,
                    //         content_type: 'model'
                    //     })
                    // })
                    // const models = response.items.map((el: any) => new Model(el));
                    // yield call(delay, 2000);
                    // yield call(delay, 2000);
                    // yield put(searchSuccess(models));
                } catch (e) {
                    console.error('e', e)
                }
            } else {
                yield put(changeControlsSuccess({...payload}));
            }
        }
    }

};

export const fetchAssetsSaga = function* (payload: ReturnType<typeof fetchAssets>) {
    try {
        yield put(fetchAssetsRequest());

        const entries = yield all(payload.uuid.map((uuid: string) => call(async () => {
            // const entry = await _instance.client.getEntry(uuid);
            // return new payload.constructor.class(entry);
        })));

        yield put(fetchAssetsSuccess({name: payload.key, value: entries}));
    } catch (error) {
        console.error('ERROR', error);
        yield put(fetchAssetsFailure(error.message))
    }
};

// export const fetchDistributorsSaga = function* () {
//     try {
//         yield put(fetchDistributorsRequest());
//
//         const response: any = yield call(async () => {
//             return await _instance.client.getEntry("6QAGZxQaJ6NGTtEoPj2u2T")
//         });
//
//         const _regions: Region[] = response.fields.regions && response.fields.regions.map((el: any) => {
//             return new Region(el)
//         });
//
//         const _entries = _regions.reduce((acc, r) => {
//             return [
//                 ...acc.concat(r.entries.map(el => el))
//             ]
//         }, []);
//
//         const distributors = yield all(
//             _entries.map(uuid =>
//                 call(async () => {
//                     const entry = await _instance.client.getEntry(uuid);
//                     return new Distributor(entry);
//                 })
//             ));
//
//         _regions.forEach(r => {
//             r.distributors = distributors.filter((d: any) => r.entries.includes(d.uuid))
//         });
//
//         yield put(fetchDistributorsSuccess(_regions));
//     } catch (error) {
//         console.error('ERROR', error);
//         yield put(fetchDistributorsFailure(error.message));
//     }
// }
//
// export const sendMailSaga = function* (payload: ReturnType<typeof sendMail>) {
//     try {
//         yield call(async () => await axios.post(`${SERVER_API}/contact`, {
//             name: payload.publication.name,
//             email: payload.publication.email,
//             subject: payload.publication.subject,
//             message: payload.publication.message
//         }))
//
//     } catch (error) {
//         console.log("ERROR", error);
//         yield  put(sendMailFailure(error.message));
//     }
// }