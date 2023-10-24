import { BuildingLibrary, IBuildingLibrary } from "./construction/building/building-library";
import { config } from "./construction/config/config";
import { ConfigReader } from "./construction/config/config-reader";
import { Construction, ConstructionSkillData } from "./construction/construction";
import { UserInterface } from "./construction/user-interface";
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
}

export class App {
    constructor(private readonly modContext: Modding.ModContext, private readonly game: Game) { }

    public async init(): Promise<void> {
        this.modContext.loadTemplates('construction/construction.html');
        this.modContext.loadTemplates('construction/building/room.html');
        this.modContext.loadTemplates('construction/building/section.html');
        this.modContext.loadTemplates(`construction/building/feature.html`);
        this.modContext.loadTemplates(`construction/building/build-cost.html`);

        this.InitLanguage();

        this.game.construction = this.game.registerSkill(this.game.registeredNamespaces.getNamespace('nifeConstruction')!, Construction);

        await this.modContext.gameData.addPackage('data.json');

        this.game.construction.SetLibrary(this.InitLibrary());
        this.game.construction.SetUserInterface(this.InitInterface());
    }

    private InitLibrary(): IBuildingLibrary {
        const configReader = new ConfigReader(config);
        return new BuildingLibrary(configReader);
    }

    private InitInterface(): UserInterface {
        const userInterface = new UserInterface(this.modContext, this.game, this.game.construction);

        userInterface.Init();

        return userInterface;
    }

    private InitLanguage(): void {
        for (const [key, value] of Object.entries<string>(languages['en'])) {
            loadedLangJson[key] = value;
        }
    }
}