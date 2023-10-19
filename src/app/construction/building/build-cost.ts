import { IBuildCostConfig } from "../config/configuration";

export class BuildCost {
    private readonly items: Map<string, number> = new Map<string, number>();
    private readonly skillLevels: Map<string, number> = new Map<string, number>();

    public constructor(config: IBuildCostConfig) {
        config.items.forEach(item => {
            this.items.set(item.item, item.amount)
        })

        config.skillLevels.forEach(skill => {
            this.skillLevels.set(skill.skill, skill.level)
        })
    }
}