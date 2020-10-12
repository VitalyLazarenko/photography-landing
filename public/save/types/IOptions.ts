import Seating from "./Seating";
import Model from "./Model";
import Fabric from "./Fabric";

export interface IOptions {
    seatings: Seating[],
    models: Model[],
    fabrics: Fabric[],
}