import * as actions from '../action.creators/app.actions';
import {AboutMe, Contact, Package, Series} from "../../types";
import {VideoOverview} from "../../types/VideoOverview";
import {ISelectedPhoto} from "../../types/ISelectedPhoto";

export interface IStateRecord {
    loading: boolean;
    error?: string;
    showPhotoPopup: boolean;
    selectedPhoto?: ISelectedPhoto;
    avatar?: string;
    aboutMe?: AboutMe;
    videoHomePage?: string;
    packages?: Package[];
    portfolio?: Series[];
    otherPortfolio?: string[];
    selectSeries?: Series;
    imagePrice?: string;
    contacts?: Contact;
    photoBookVideo?: VideoOverview;
    packingVideo?: VideoOverview;
}

type InferTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type IActionTypes = ReturnType<InferTypes<typeof actions>>;
