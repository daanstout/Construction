import { BuildingObject } from "./building-object";
import { IRoomConfig } from "../config/configuration";
import { Section } from "./section";
import { Construction } from "../construction";

export class Room extends BuildingObject<IRoomConfig>{
    public constructor(config: IRoomConfig, private readonly sections: Section[]) {
        super(config)
    }

    public CreateComponent(construction: Construction, game: Game, onView: (room: Room) => void) {
        return {
            $template: '#nife-construction-room',
            room: this,
            roomDisplayKey: this.DisplayKey,
            onView: function () { onView(this.room as Room); }
        }
    }

    public get Sections(): IterableIterator<Section> {
        return this.sections.values();
    }
}