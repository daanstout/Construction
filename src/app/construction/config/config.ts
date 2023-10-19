import { IConfiguration } from "./configuration";
import { Constants } from '../constants';

const config: IConfiguration = {
    rooms: [
        {
            id: Constants.Rooms.LIVING_ROOM_ID,
            display: Constants.Rooms.LIVING_ROOM_DISPLAY,
            sections: [
                Constants.Sections.SITTING_AREA_ID
            ],
            buildCost: [
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
        }
    ],
    sections: [
        {
            id: Constants.Sections.SITTING_AREA_ID,
            display: Constants.Sections.SITTING_AREA_DISPLAY,
            features: [
                Constants.Features.SITTING_AREA_SKILL_XP_ID//,
                // Constants.Features.SITTING_AREA_MASTERY_XP_ID,
                // Constants.Features.SITTING_AREA_GLOBAL_DOUBLING_ID,
                // Constants.Features.SITTING_AREA_GLOBAL_PRESERVATION_ID
            ],
            buildCost: [
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
            display: Constants.Features.SKILL_XP_DISPLAY,
            buildCost: [
                {
                    items: [],
                    skillLevels: []
                }
            ],
            bonus: [
                {
                    amountPerLevel: 1,
                    stat: Constants.Modifiers.GLOBAL_SKILL_XP,
                    bonusSource: Constants.BonusSource.COUCH
                }
            ]
        }
    ]
}

export { config };