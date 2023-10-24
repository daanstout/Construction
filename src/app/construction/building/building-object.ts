import { IBuildableConfig } from "../config/configuration";
import { Construction } from "../construction";
import { BuildCost } from "./build-cost";

export abstract class BuildingObject<T extends IBuildableConfig> {
    protected readonly buildCost: ReadonlyArray<BuildCost>;

    private level: number = 0;

    protected constructor(private readonly config: T) {
        const bc: BuildCost[] = new Array<BuildCost>();

        this.config.buildRequirements.forEach(buildCost => {
            bc.push(new BuildCost(buildCost))
        })

        this.buildCost = bc;
    }

    public get ID(): string {
        return this.config.id;
    }

    public get DisplayKey(): string {
        return this.config.displayKey;
    }

    public get BuildCost(): IterableIterator<BuildCost> {
        return this.buildCost.values();
    }

    public CreateBuildCostComponent(construction: Construction, game: Game) {
        return {
            $template: '#nife-construction-build-cost',
            level: this.level,
            buildCost: this.buildCost
        };
    }
}