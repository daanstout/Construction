import { BonusScaleTypes, IConfiguration } from "./configuration";
import { Constants } from '../constants';

const config: IConfiguration = {
    rooms: [
        {
            id: Constants.Rooms.LIVING_ROOM_ID,
            displayKey: Constants.Rooms.LIVING_ROOM_DISPLAY,
            sections: [
                Constants.Sections.SITTING_AREA_ID
            ],
            buildRequirements: [
                {
                    items: [
                        {
                            item: Constants.Items.CONSTRUCTION_PLANKS,
                            amount: 100
                        }
                    ],
                    skillLevels: [
                        {
                            skill: Constants.Skills.CRAFTING,
                            level: 5
                        }
                    ]
                }
            ]
        },
        {
            id: Constants.Rooms.ARMORY_ROOM_ID,
            displayKey: Constants.Rooms.ARMORY_ROOM_DISPLAY,
            sections: [
                Constants.Sections.WEAPON_STANDS_SWORDS_ID,
                Constants.Sections.WEAPON_STANDS_AXES_ID
            ],
            buildRequirements: [
                {
                    items: [
                        {
                            item: Constants.Items.CONSTRUCTION_PLANKS,
                            amount: 100
                        }
                    ],
                    skillLevels: [
                        {
                            skill: Constants.Skills.ATTACK,
                            level: 5
                        }
                    ]
                }
            ]
        }
    ],
    sections: [
        {
            id: Constants.Sections.SITTING_AREA_ID,
            displayKey: Constants.Sections.SITTING_AREA_DISPLAY,
            features: [
                Constants.Features.SITTING_AREA_SKILL_XP_ID,
                Constants.Features.SITTING_AREA_MASTERY_XP_ID,
                Constants.Features.SITTING_AREA_GLOBAL_DOUBLING_ID,
                Constants.Features.SITTING_AREA_GLOBAL_PRESERVATION_ID
            ],
            buildRequirements: [
                {
                    items: [],
                    skillLevels: []
                }
            ]
        },
        {
            id: Constants.Sections.WEAPON_STANDS_SWORDS_ID,
            displayKey: Constants.Sections.WEAPON_STANDS_SWORD_DISPLAY,
            features: [],
            buildRequirements: []
        },
        {
            id: Constants.Sections.WEAPON_STANDS_AXES_ID,
            displayKey: Constants.Sections.WEAPON_STANDS_AXES_DISPLAY,
            features: [],
            buildRequirements: [
                {
                    items: [],
                    skillLevels: []
                }
            ]
        }
    ],
    features: [
        {
            id: Constants.Features.SITTING_AREA_SKILL_XP_ID,
            displayKey: Constants.Features.SKILL_XP_DISPLAY,
            buildRequirements: [
                {
                    items: [],
                    skillLevels: []
                }
            ],
            bonus: [
                {
                    amountPerLevel: 1,
                    stat: Constants.Modifiers.GLOBAL_SKILL_XP,
                    bonusSource: Constants.BonusSource.COUCH,
                    bonusScaleType: BonusScaleTypes.Sum
                }
            ]
        },
        {
            id: Constants.Features.SITTING_AREA_MASTERY_XP_ID,
            displayKey: Constants.Features.MASTERY_XP_DISPLAY,
            buildRequirements: [
                {
                    items: [],
                    skillLevels: []
                }
            ],
            bonus: [
                {
                    amountPerLevel: 1,
                    stat: Constants.Modifiers.GLOBAL_SKILL_XP,
                    bonusSource: Constants.BonusSource.COUCH,
                    bonusScaleType: BonusScaleTypes.Sum
                }
            ]
        },
        {
            id: Constants.Features.SITTING_AREA_GLOBAL_DOUBLING_ID,
            displayKey: Constants.Features.GLOBAL_DOUBLING_PERCENT,
            buildRequirements: [
                {
                    items: [],
                    skillLevels: []
                }
            ],
            bonus: [
                {
                    amountPerLevel: 1,
                    stat: Constants.Modifiers.GLOBAL_SKILL_XP,
                    bonusSource: Constants.BonusSource.COUCH,
                    bonusScaleType: BonusScaleTypes.Sum
                }
            ]
        },
        {
            id: Constants.Features.SITTING_AREA_GLOBAL_PRESERVATION_ID,
            displayKey: Constants.Features.GLOBAL_PRESERVATION_PERCENT,
            buildRequirements: [
                {
                    items: [],
                    skillLevels: []
                }
            ],
            bonus: [
                {
                    amountPerLevel: 1,
                    stat: Constants.Modifiers.GLOBAL_SKILL_XP,
                    bonusSource: Constants.BonusSource.COUCH,
                    bonusScaleType: BonusScaleTypes.Sum
                }
            ]
        }
    ]
}

export { config };