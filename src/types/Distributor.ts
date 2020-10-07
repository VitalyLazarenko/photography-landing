export default class Distributor {
    uuid: string;
    name: string;
    description: string;
    email: string;
    phone: string;
    fax: string;

    constructor(data: any = {}) {
        this.uuid = data.sys.id;
        this.name = data.fields.name;
        this.description = data.fields.description ? data.fields.description : undefined;
        this.email = data.fields.email ? data.fields.email : undefined;
        this.phone = data.fields.phone ? data.fields.phone : undefined;
        this.fax = data.fields.fax ? data.fields.fax : undefined;
    }
}