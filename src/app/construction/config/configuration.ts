export interface IConfiguration {
    readonly rooms: IRoomConfig[]
    readonly sections: ISectionConfig[]
    readonly features: IFeatureConfig[]
}

export interface ConfigItem {

}

export interface itemConfig {
    readonly item: string
    readonly amount: number
}

export interface skillConfig {
    readonly skill: string
    readonly level: number
}

export interface IDisplayConfig extends ConfigItem {
    readonly id: string
    readonly display: string
}

export interface IBuildCostConfig {
    readonly items: itemConfig[]
    readonly skillLevels: skillConfig[]
}

export interface IBuildableConfig extends IDisplayConfig {
    readonly buildCost: IBuildCostConfig[]
}

export interface IBonusConfig {
    readonly bonusSource: string
    readonly amountPerLevel: number
    readonly stat: string
}

export interface IRoomConfig extends IBuildableConfig {
    readonly sections: string[]
}

export interface ISectionConfig extends IBuildableConfig {
    readonly features: string[]
}

export interface IFeatureConfig extends IBuildableConfig {
    readonly bonus: IBonusConfig[]
}