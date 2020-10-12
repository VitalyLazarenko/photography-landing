export default class Sequence {
    id: number;
    type: string;
    title: string;
    label: string;

    constructor(data: any = {}) {
        this.id = data.id;
        this.type = data.type;
        this.title = data.title;
        this.label = data.label;
    }
}