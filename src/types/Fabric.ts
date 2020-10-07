export default class Fabric {
    id: string;
    title: string;
    price?: number;
    type: string;
    serial: string;
    thumbnail?: string;
    map?: string;
    normalMap?: string;
    specularMap?: string;
    alphaMap?: string;
    bumpMap?: string;
    config?: {
        mesh_attachment: [],
        parameters: {}
    };

    constructor(data: any = {}) {
        this.id = data.sys.id;
        this.title = data.fields.title;
        this.price = data.fields.price ? data.fields.price : undefined;
        this.type = data.fields.type;
        this.serial = data.fields.serial;
        this.thumbnail = data.fields.thumbnail ? data.fields.thumbnail.fields.file.url : undefined;
        this.map = data.fields.map ? data.fields.map.fields.file.url : undefined;
        this.normalMap = data.fields.normal_map ? data.fields.normal_map.fields.file.url : undefined;
        this.specularMap = data.fields.specular_map ? data.fields.specular_map.fields.file.url : undefined;
        this.alphaMap = data.fields.alpha_map ? data.fields.alpha_map.fields.file.url : undefined;
        this.bumpMap = data.fields.bump_map ? data.fields.bump_map.fields.file.url : undefined;
        this.config = data.fields.config ? data.fields.config : undefined;
    }
}
