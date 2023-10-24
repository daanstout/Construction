import { IConfiguration, IRoomConfig, ISectionConfig, IFeatureConfig } from './configuration'

/** A wrapper to read a config object. */
export interface IConfigReader {
    /** Gets a list of all {@link IRoomConfig | Rooms} from the config. */
    GetRooms(): IRoomConfig[]
    /** Gets a list of all {@link ISectionConfig | Sections} from the config. */
    GetSections(): ISectionConfig[]
    /** Gets a list of all {@link IFeatureConfig | Features} from the config. */
    GetFeatures(): IFeatureConfig[]
}

/** A wrapper to read a config object. */
export class ConfigReader implements IConfigReader {
    public constructor(private readonly configuration: IConfiguration) { }

    public GetRooms() {
        return this.configuration.rooms;
    }

    public GetSections() {
        return this.configuration.sections;
    }

    public GetFeatures() {
        return this.configuration.features;
    }
}