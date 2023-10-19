import { ISectionConfig } from "../config/configuration";
import { BuildingObject } from "./building-object";
import { Feature } from "./feature";

export class Section extends BuildingObject<ISectionConfig>{
    constructor(config: ISectionConfig, private readonly features: Feature[]) {
        super(config)
    }
}