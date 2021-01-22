import * as actions from '../action.creators/app.actions';
import {AboutMe, Contact, Package, Series} from "../../types";

export interface IStateRecord {
    loading: boolean;
    error?: string;
    avatar?: string;
    aboutMe?: AboutMe;
    videoHomePage?: string;
    packages?: Package[];
    portfolio?: Series[];
    selectSeries?: Series;
    imagePrice?: string;
    contacts?: Contact;
}

type InferTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type IActionTypes = ReturnType<InferTypes<typeof actions>>;
