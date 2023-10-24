import { IBuildRequirementsConfig } from "../config/configuration";
import { Construction } from "../construction";

export class BuildCost {
    private readonly items: Map<string, number> = new Map<string, number>();
    private readonly skillLevels: Map<string, number> = new Map<string, number>();

    public constructor(config: IBuildRequirementsConfig) {
        config.items.forEach(item => {
            this.items.set(item.item, item.amount)
        })

        config.skillLevels.forEach(skill => {
            this.skillLevels.set(skill.skill, skill.level)
        })
    }

    public CreateComponent(construction: Construction, game: Game, onUpgrade: () => void) {
        return {
            $template: '#nife-construction-build-cost',
            onUpgrade: function () { onUpgrade(); }
        }
    }
}