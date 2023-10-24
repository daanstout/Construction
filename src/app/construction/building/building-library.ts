import { Room } from "./room";
import { Feature } from "./feature";
import { Section } from "./section";
import { IConfigReader } from "../config/config-reader";

export interface IBuildingLibrary {
    GetRoom(room: string): Room;
    GetRooms(): IterableIterator<Room>;
    GetSection(section: string): Section;
    GetSections(): IterableIterator<Section>;
    GetFeature(feature: string): Feature;
    GetFeatures(): IterableIterator<Feature>;
}

export class BuildingLibrary implements IBuildingLibrary {
    private readonly rooms: ReadonlyMap<string, Room>;
    private readonly sections: ReadonlyMap<string, Section>;
    private readonly features: ReadonlyMap<string, Feature>;

    public constructor(configReader: IConfigReader) {
        const rooms: Map<string, Room> = new Map<string, Room>();
        const sections: Map<string, Section> = new Map<string, Section>();
        const features: Map<string, Feature> = new Map<string, Feature>();

        this.rooms = rooms;
        this.sections = sections;
        this.features = features;

        configReader.GetFeatures().forEach(featureConfig => {
            const feature = new Feature(featureConfig);
            features.set(featureConfig.id, feature);
        })

        configReader.GetSections().forEach(sectionConfig => {
            const features: Feature[] = new Array<Feature>();

            sectionConfig.features.forEach(ftr => {
                const ftrInstance: Feature | undefined = this.features.get(ftr);

                if (ftrInstance === undefined) {
                    console.error(`Feature with name ${ftr} was not found!`);
                } else {
                    features.push(ftrInstance);
                }
            })

            const section = new Section(sectionConfig, features);
            sections.set(sectionConfig.id, section);
        })

        configReader.GetRooms().forEach(roomConfig => {
            const sections: Section[] = new Array<Section>();

            roomConfig.sections.forEach(sct => {
                const sctInstance: Section | undefined = this.sections.get(sct);

                if (sctInstance === undefined) {
                    console.error(`Section with name ${sct} was not found!`);
                } else {
                    sections.push(sctInstance);
                }
            })

            const room = new Room(roomConfig, sections);
            rooms.set(roomConfig.id, room);
        })
    }

    public GetRoom(room: string): Room {
        return this.Get<Room>(room, this.rooms, 'room');
    }

    public GetSection(section: string): Section {
        return this.Get<Section>(section, this.sections, 'section');
    }

    public GetFeature(feature: string): Feature {
        return this.Get<Feature>(feature, this.features, 'feature');
    }

    public GetRooms(): IterableIterator<Room> {
        return this.rooms.values();
    }

    public GetSections(): IterableIterator<Section> {
        return this.sections.values();
    }

    public GetFeatures(): IterableIterator<Feature> {
        return this.features.values();
    }

    private Get<T>(name: string, map: ReadonlyMap<string, T>, typeName: string): T {
        const instance = map.get(name);

        if (instance === undefined) {
            throw new Error(`Error, cannot find ${typeName} with name ${name}`);
        } else {
            return instance;
        }
    }
}