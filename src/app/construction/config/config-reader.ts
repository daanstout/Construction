import { IConfiguration, IRoomConfig, ISectionConfig, IFeatureConfig } from './configuration'

export interface IConfigReader {
    GetRooms(): IRoomConfig[]
    GetSections(): ISectionConfig[]
    GetFeatures(): IFeatureConfig[]
}

export class ConfigReader implements IConfigReader {
    public constructor(private readonly configuration: IConfiguration) {
        this.configuration = configuration;
    }

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