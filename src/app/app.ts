import { BuildingLibrary, IBuildingLibrary } from "./construction/building/building-library";
import { config } from "./construction/config/config";
import { ConfigReader } from "./construction/config/config-reader";
import { Construction } from "./construction/construction";

declare global {
    interface Game {
        construction: Construction;
    }
}

export class App {
    private buildingLibrary!: IBuildingLibrary;

    constructor(private readonly modContext: Modding.ModContext, private readonly game: Game) { }

    public async init() {
        this.modContext.loadTemplates('Construction/Construction.html');

        const configReader = new ConfigReader(config);
        this.buildingLibrary = new BuildingLibrary(configReader);

        this.game.construction = this.game.registerSkill(this.game.registeredNamespaces.getNamespace('nifeConstruction')!, Construction);

        this.modContext.gameData.addPackage('data.json');

        this.modContext.onInterfaceReady(() => {
            document.getElementById('main-container')?.append(getTemplateNode('nife-construction'));
        })
    }
}