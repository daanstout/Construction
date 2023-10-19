import { BuildingObject } from "./building-object"
import { IFeatureConfig } from "../config/configuration"

export class Feature extends BuildingObject<IFeatureConfig>{
    constructor(config: IFeatureConfig) {
        super(config)
    }
}