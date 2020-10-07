import Seating from "./Seating";

export default class Model extends Seating {
    price: number;
    gsa?: boolean;
    object?: string;
    category: string;

    constructor(data: any = {}) {
        super(data);
        this.price = data.fields.price ? data.fields.price : 0;
        this.gsa = data.fields.gsa ? data.fields.gsa : undefined;
        this.object = data.fields.object ? data.fields.object.fields.file.url : undefined;
        this.category = data.fields.category;
    }
}