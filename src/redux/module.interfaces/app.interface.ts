import * as actions from '../action.creators/app.actions';
import Model from "../../../types/Model";
import Adjustment from "../../../types/Adjustment";
import Region from "../../../types/Region";

export interface IStateRecord {
    loading: boolean;
    error?: string;
    panels: {type: string, preview?: string, content?: {id: number, title: string, thumbnail?: string, link: string}[]}[],
    sliders: {location: string, title?:string, slides: {id: number, title: string, category: string, label: string, thumbnail: string}[]}[],
    categories: {location: string, title: string, description: string, thumbnail: string}[],
    features: {key: string, icon: string}[],
    drawer_state: boolean;
    filter: string,
    search?: string,
    searching: boolean,
    matches?: Model[],
    models?: Model[],
    adjustments?: Adjustment[],
    adjustment?: Adjustment,
    screenshot: string,
    regions?: Region[],
    region?: Region,
    gsa?: string,
    gsaRes?: Model[]
}

type InferTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type IActionTypes = ReturnType<InferTypes<typeof actions>>;
