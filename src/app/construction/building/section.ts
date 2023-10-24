import { ISectionConfig } from "../config/configuration";
import { Construction } from "../construction";
import { BuildingObject } from "./building-object";
import { Feature } from "./feature";

import './section.scss'

export class Section extends BuildingObject<ISectionConfig>{
    constructor(config: ISectionConfig, private readonly features: Feature[]) {
        super(config)
    }

    public CreateComponent(construction: Construction, game: Game): ComponentProps {
        return {
            $template: '#nife-construction-section',
            sectionDisplayKey: this.DisplayKey
        }
    }

    public get Features(): Feature[] {
        return this.features;
    }
}