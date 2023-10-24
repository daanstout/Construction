import { IBuildingLibrary } from "./building/building-library";
import { UserInterface } from "./user-interface";

import './construction.scss'

export class Construction extends Skill<ConstructionSkillData> {
    public get BuildingLibrary(): IBuildingLibrary {
        return this.buildingLibrary;
    }

    public _media: string = 'assets/saw.png';
    public readonly renderQueue: SkillRenderQueue = new ConstructionRenderQueue();

    private buildingLibrary!: IBuildingLibrary;
    private userInterface!: UserInterface

    constructor(namespace: DataNamespace, game: Game) {
        super(namespace, 'Construction', game);
    }

    public SetLibrary(buildingLibrary: IBuildingLibrary) {
        if (this.buildingLibrary !== undefined) {
            console.log("Building Library has already been provided!");
            return;
        }

        console.log("[Construction] Setting Library");

        this.buildingLibrary = buildingLibrary;
    }

    public SetUserInterface(userInterface: UserInterface) {
        if (this.userInterface !== undefined) {
            console.log("User Interface has already been provided!");
            return;
        }

        this.userInterface = userInterface;
    }
}

export interface ConstructionSkillData extends BaseSkillData {

}

export class ConstructionRenderQueue extends SkillRenderQueue {

}