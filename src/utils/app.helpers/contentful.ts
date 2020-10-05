import {createClient} from 'contentful';

const config = {
    space: "g7zopbybs1ea",
    accessToken: "KUpDlj0KIgIaTmDU6Sk9mMk1SiRCSMFToUsMRyFM9pc"
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