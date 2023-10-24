import { BuildingObject } from "./building-object"
import { IFeatureConfig } from "../config/configuration"
import { Construction } from "../construction"

export class Feature extends BuildingObject<IFeatureConfig>{
    constructor(config: IFeatureConfig) {
        super(config)
    }

    public CreateComponent(construction: Construction, game: Game): ComponentProps {
        return {
            $template: '#nife-construction-feature',
            featureDisplayKey: this.DisplayKey
        }
    }
}