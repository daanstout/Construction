import { Room } from "./building/room";
import { Constants } from "./constants";
import { Construction } from "./construction";

const INITIAL_ROOM_ID: string = Constants.Rooms.LIVING_ROOM_ID;

export class UserInterface {
    private readonly sectionsMap: Map<string, Element> = new Map<string, Element>();
    private readonly activeSections: Element[] = new Array<Element>();

    constructor(private readonly context: Modding.ModContext,
        private readonly game: Game,
        private readonly construction: Construction) { }

    public Init(): void {
        this.context.onInterfaceAvailable(() => {
            this.mainContainer.append(getTemplateNode('nife-construction'));

            let initialRoom: Room | null = null;

            for (const room of this.construction.BuildingLibrary.GetRooms()) {
                const component = room.CreateComponent(this.construction, this.game, room => this.OnRoomClicked(room));

                if (room.ID == INITIAL_ROOM_ID) {
                    initialRoom = room;
                }

                ui.create(component, this.roomsContainer);

                const buildCostComponent = room.CreateBuildCostComponent(this.construction, this.game);

                ui.create(buildCostComponent, this.BuildCostContainer(room.DisplayKey));
            }

            for (const section of this.construction.BuildingLibrary.GetSections()) {
                const component = section.CreateComponent(this.construction, this.game);

                const sectionElement = ui.create(component, this.sectionsContainer).lastElementChild!;

                this.sectionsMap.set(section.ID, sectionElement);

                for (const feature of section.Features) {
                    const featureComponent = feature.CreateComponent(this.construction, this.game);

                    ui.create(featureComponent, this.FeaturesContainer(section.DisplayKey));
                }
            }

            if (initialRoom !== undefined && initialRoom !== null) {
                this.OnRoomClicked(initialRoom);
            }
        })
    }

    private get mainContainer(): HTMLElement {
        return document.getElementById('main-container')!;
    }

    private get roomsContainer(): HTMLElement {
        return document.getElementById('rooms-container')!;
    }

    private get sectionsContainer(): HTMLElement {
        return document.getElementById('sections-container')!;
    }

    private FeaturesContainer(sectionName: string): HTMLElement {
        return document.getElementById(`${sectionName}-features-container`)!;
    }

    private BuildCostContainer(displayKey: string): HTMLElement {
        return document.getElementById(`${displayKey}-build-cost-container`)!;
    }

    private OnRoomClicked(room: Room): void {
        this.activeSections.forEach(element => {
            element.classList.add('section-hidden');
        })

        this.activeSections.length = 0;

        for (let section of room.Sections) {
            const sectionElement: Element = this.sectionsMap.get(section.ID)!;

            sectionElement.classList.remove('section-hidden');

            this.activeSections.push(sectionElement);
        }
    }
}