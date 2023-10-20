import { BuildingLibrary, IBuildingLibrary } from "./construction/building/building-library";
import { config } from "./construction/config/config";
import { ConfigReader } from "./construction/config/config-reader";
import { Construction, ConstructionSkillData } from "./construction/construction";
import { languages } from "./language/index";

declare global {
    interface Game {
        construction: Construction;
    }

    interface SkillIDDataMap {
        'nifeConstruction:Construction': ConstructionSkillData;
    }

    interface SkillObject<T> {
        Construction: T;
    }

    namespace Modding {
        interface ModContext {
            onInterfaceAvailable: (callback: Modding.LifecycleCallback) => void;
        }
    }
}

export class App {
    private buildingLibrary!: IBuildingLibrary;

    constructor(private readonly modContext: Modding.ModContext, private readonly game: Game) { }

    public async init() {
        // this.modContext.loadTemplates('construction/construction.html');
        // // for (const [key, value] of Object.entries<string>(languages['en'])) {
        // //     loadedLangJson['SKILL_NAME'][key] = value;
        // // }

        // this.game.construction = this.game.registerSkill(this.game.registeredNamespaces.getNamespace('nifeConstruction')!, Construction);

        // await this.modContext.gameData.addPackage('data.json');

        // // const configReader = new ConfigReader(config);
        // // this.buildingLibrary = new BuildingLibrary(configReader);

        // this.modContext.onInterfaceAvailable(() => {
        //     document.getElementById('main-container')?.append(getTemplateNode('nife-construction'));
        //     // ui.createStatic('nife-construction', document.getElementById('main-container')!);
        // })
    }
}