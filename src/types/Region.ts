import Distributor from "./Distributor";

export default class Region {
    uuid: string;
    states?: string;
    entries?: string[];
    distributors?: Distributor[]

    constructor(data: any = {}) {
        this.uuid = data.sys.id;
        this.states = data.fields.states ? data.fields.states : undefined;
        this.entries = data.fields.distributors ? data.fields.distributors.map((el: any) => el.sys.id) : undefined;
    }
}