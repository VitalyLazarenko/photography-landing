import Material from "./Material";
import Fabric from "./Fabric";
import {IGrades} from "./IGrades";

export default class Adjustment {
    id: string;
    title: string;
    price: number;
    heading?: string;
    preview?: string;
    overview?: string;
    screenshots?: string[];
    description?: string;
    features?: {key: string, description: string}[];
    specifications?: {};
    grades?: IGrades;
    product_sheet?: string;
    dimension_sheet?: string;
    assembly_instruction?: string;
    materials: Material[];
    fabrics: Fabric[];
    config?: {
        visible_meshes: []
    };

    constructor(data: any = {}) {
        this.id = data.sys.id;
        this.title = data.fields.title;
        this.price = data.fields.price;
        this.heading = data.fields.heading ? data.fields.heading : undefined;
        this.preview = data.fields.preview ? data.fields.preview.fields.file.url : undefined;
        this.overview = data.fields.overview ? data.fields.overview.fields.file.url : undefined;
        this.screenshots = data.fields.screenshots ? data.fields.screenshots.map((el: any) => el.fields.file.url) : undefined;
        this.description = data.fields.description ? data.fields.description : undefined;
        this.features = data.fields.features ? data.fields.features.details : undefined;
        this.specifications = data.fields.specifications;
        this.grades = data.fields.grades;
        this.product_sheet = data.fields.product_sheet ? data.fields.product_sheet.fields.file.url : undefined;
        this.dimension_sheet = data.fields.dimension_sheet ? data.fields.dimension_sheet.fields.file.url : undefined;
        this.assembly_instruction = data.fields.assembly_instruction ? data.fields.assembly_instruction.fields.file.url : undefined;
        this.materials = data.fields.materials ? data.fields.materials.map((el: any) => new Material(el)) : undefined;
        this.fabrics = data.fields.fabrics ? data.fields.fabrics.map((el: any) => new Fabric(el)) : undefined;
        this.config = data.fields.config ? data.fields.config : undefined;
    }
}
