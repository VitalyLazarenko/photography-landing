export default class Material {
    id: string;
    type?: string;
    title?: string;
    map?: string;
    aoMap?: string;
    normalMap?: string;
    alphaMap?: string;
    bumpMap?: string;
    config?: {
        mesh_attachment: [],
        parameters: {}
    };

    constructor(data: any = {}) {
        this.id = data.sys.id;
        this.type = data.fields.type ? data.fields.type : undefined;
        this.title = data.fields.title ? data.fields.title : undefined;
        this.map = data.fields.map ? data.fields.map.fields.file.url : undefined;
        this.aoMap = data.fields.ao_map ? data.fields.ao_map.fields.file.url : undefined;
        this.normalMap = data.fields.normal_map ? data.fields.normal_map.fields.file.url : undefined;
        this.alphaMap = data.fields.alpha_map ? data.fields.alpha_map.fields.file.url : undefined;
        this.bumpMap = data.fields.bump_map ? data.fields.bump_map.fields.file.url : undefined;
        this.config = data.fields.config ? data.fields.config : undefined;
    }
}