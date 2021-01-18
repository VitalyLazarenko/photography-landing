import {createClient} from "contentful";

// Content Delivery API - 3v86WFXEBi5B_NawAhqbk8PGbCt1PjUbmdMDcpSADmc
// Content Preview API - 2CqBfm2eqqFtLnrvHjMcaHcwO9c1p9k9KO2hGo2VIqU

//TODO creds for contentful (grigorenko)
const config = {
    space: "1v8fhoighetn",
    accessToken: "3v86WFXEBi5B_NawAhqbk8PGbCt1PjUbmdMDcpSADmc"
};

export default class Contentful {
    protected static _instance: Contentful = new Contentful();
    client = createClient(config);

    constructor() {
        if(Contentful._instance) {
            throw new Error("Instantiation failed");
        }
    }

    public static getInstance(): Contentful {
        return Contentful._instance
    }
}