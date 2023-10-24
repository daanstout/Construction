/** Contains the configuration data for the Construction skill. */
export interface IConfiguration {
    /** The {@link IRoomConfig | Rooms} that are available to build. */
    readonly rooms: IRoomConfig[]

    /** The {@link ISectionConfig | Sections} that are available to build. */
    readonly sections: ISectionConfig[]

    /** The {@link IFeatureConfig | Features} that are available to build. */
    readonly features: IFeatureConfig[]
}

/** Contains information data for item requirements. */
export interface ItemConfig {
    /** The item that is required. */
    readonly item: string
    /** How many items are required. */
    readonly amount: number
}

/** Contains information data for skill requirements. */
export interface ISkillConfig {
    /** The skill that is required. */
    readonly skill: string
    /** The level the skill needs to be at. */
    readonly level: number
}

/** Contains information data for items that are displayed to the user. */
export interface IDisplayConfig {
    /** The ID of the item. */
    readonly id: string
    /** The display key of the item that is used to look up the display name in the language config. */
    readonly displayKey: string
}

/** Contains information data for the build requirements of buildable items. */
export interface IBuildRequirementsConfig {
    /** The list of {@link ItemConfig | Items} that are required to build the item. */
    readonly items: ItemConfig[]
    /** The list of {@link ISkillConfig | Skills} that are required to be reached. */
    readonly skillLevels: ISkillConfig[]
}

/** Contains information data for items that can be build. */
export interface IBuildableConfig extends IDisplayConfig {
    /** The {@link IBuildRequirementsConfig | Build Requirements} of the item. */
    readonly buildRequirements: IBuildRequirementsConfig[]
}

/** Contains information about the rooms that can be build. */
export interface IRoomConfig extends IBuildableConfig {
    /** The {@link ISectionConfig | Sections} that can be build within this room. */
    readonly sections: string[]
}

/** Contains information abou the sections that can be build. */
export interface ISectionConfig extends IBuildableConfig {
    /** The {@link IFeatureConfig | Features} that can be build within this section. */
    readonly features: string[]
}

/** Contains information about the features that can be build. */
export interface IFeatureConfig extends IBuildableConfig {
    /** The {@link IBonusConfig | bonuses } that this feature grants. */
    readonly bonus: IBonusConfig[]
}

/** How the bonus should scale with the amount of levels. */
export enum BonusScaleTypes {
    /** 
     * The bonus scales linearly, so each level gives the same amount of bonus  
     * A bonus with level 3 and a bonus of 1 will grant a bonus of 3 `(1 * 3)`.
     * */
    Linear = 0,
    /**
     * The bonus scales exponential, so the bonus is multiplied by `2 ^ level`.  
     * A bonus with level 3 and a bonus of 1 will grant a bonus of 8 `(1 * 2^3)`.
     * */
    Exponential,
    /** 
     * The bonus scales by summing, so each level gives `bonus * level` bonus.  
     * A bonus with level 3 and a bonus of 1 will grant a bonus of 6 `((1 * 1) + (1 * 2) + (1 * 3))`.
     * */
    Sum
}

/** Contains information data for the bonuses that are granted when build. */
export interface IBonusConfig {
    /** Flavour text that indicates what is being upgraded to grant the bonus. */
    readonly bonusSource: string
    /** How much is granted per level. */
    readonly amountPerLevel: number
    /** The stat the bonus is applied to. */
    readonly stat: string
    /** How the bonus should scale per level. */
    readonly bonusScaleType: BonusScaleTypes;
}