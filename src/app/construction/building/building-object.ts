import { IBuildableConfig } from "../config/configuration";
import { BuildCost } from "./build-cost";

export abstract class BuildingObject<T extends IBuildableConfig> {
    protected readonly buildCost: ReadonlyArray<BuildCost>;

    protected constructor(private readonly config: T) {
        const bc: BuildCost[] = new Array<BuildCost>();

        this.config.buildCost.forEach(buildCost => {
            bc.push(new BuildCost(buildCost))
        })

        this.buildCost = bc;
    }

    public GetDisplayName(): string {
        return this.config.display;
    }
}