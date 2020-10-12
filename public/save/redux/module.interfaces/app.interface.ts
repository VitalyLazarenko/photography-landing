import * as actions from '../action.creators/app.actions';
import Model from "../../types/Model";
import Adjustment from "../../types/Adjustment";
import Region from "../../types/Region";

export interface IStateRecord {
    loading: boolean;
    error?: string;
    panels: undefined;
    sliders: undefined;
    categories: undefined;
    features: undefined;
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
