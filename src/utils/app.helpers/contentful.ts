import {createClient} from "contentful";

//TODO creds for contentful (grigorenko)
const config = {
    space: "tyys03ejga6m",
    accessToken: "Tg6-Eg6dQguskz2q1n4ajbQpMWaHLHnDQgBQKb04DE8"
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