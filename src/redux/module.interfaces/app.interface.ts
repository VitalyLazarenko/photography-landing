import * as actions from '../action.creators/app.actions';
import {
    Contacts,
    AboutMePage,
    HomePage,
    PortfolioPage,
    PricePage,
    ISelectedPhoto,
    Photo,
    Series
} from "../../types";

export interface IStateRecord {
    loading: boolean;
    error?: string;

    portfolio?: Photo[];
    series?: Series[];
    selectSeries?: Series;
    selectedPhoto?: ISelectedPhoto;
    showPhotoPopup: boolean;


    homePage?: HomePage;
    portfolioPage?: PortfolioPage;
    pricePage?: PricePage;
    aboutMePage?: AboutMePage;
    contacts?: Contacts;
}

type InferTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type IActionTypes = ReturnType<InferTypes<typeof actions>>;
