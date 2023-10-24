class Rooms {
    public readonly LIVING_ROOM_ID: string = "LivingRoom";
    public readonly VAULT_ROOM_ID: string = "Vault";
    public readonly ARMORY_ROOM_ID: string = "Armory";

    public readonly LIVING_ROOM_DISPLAY: string = "ROOM_Living_Room";
    public readonly VAULT_ROOM_DISPLAY: string = "ROOM_Vault";
    public readonly ARMORY_ROOM_DISPLAY: string = "ROOM_Armory";
}

class Sections {
    public readonly SITTING_AREA_ID: string = "SittingArea";
    public readonly VAULT_AREA_ID: string = "Vault";
    public readonly WEAPON_STANDS_SWORDS_ID: string = "WeaponStandsSwords";
    public readonly WEAPON_STANDS_AXES_ID: string = "WeaponStandsAxes";

    public readonly SITTING_AREA_DISPLAY: string = "SECTION_Sitting_Area";
    public readonly VAULT_AREA_DISPLAY: string = "SECTION_Vault";
    public readonly WEAPON_STANDS_SWORD_DISPLAY: string = "SECTION_Weapon_Stands_Swords";
    public readonly WEAPON_STANDS_AXES_DISPLAY: string = "SECTION_Weapon_Stands_Axes";
}

class Features {
    public readonly SITTING_AREA_SKILL_XP_ID: string = "SittingArea:SkillXP";
    public readonly SITTING_AREA_MASTERY_XP_ID: string = "SittingArea:MasteryXP";
    public readonly SITTING_AREA_GLOBAL_DOUBLING_ID: string = "SittingArea:GlobalDoubling";
    public readonly SITTING_AREA_GLOBAL_PRESERVATION_ID: string = "SittingArea:GlobalPreservation";

    public readonly SKILL_XP_DISPLAY: string = "FEATURE_Skill_XP";
    public readonly MASTERY_XP_DISPLAY: string = "FEATURE_Mastery_XP";
    public readonly GLOBAL_DOUBLING_PERCENT: string = "FEATURE_Global_Doubling";
    public readonly GLOBAL_PRESERVATION_PERCENT: string = "FEATURE_Global_Preservation";
}

class Items {
    public readonly CONSTRUCTION_PLANKS: string = "construction:planks";
}

class Skills {
    public readonly CRAFTING: string = "crafting";
    public readonly ATTACK: string = "attack";
}

class Modifiers {
    public readonly GLOBAL_SKILL_XP: string = "GlobalSkillXP";
    public readonly GLOBAL_MASTERY_XP: string = "GlobalMasteryXP";
    public readonly GLOBAL_DOUBLING: string = "GlobalDoubling";
    public readonly GLOBAL_PRESERVATION: string = "GlobalPreservation";
    public readonly BANK_SLOTS: string = "BankSlots";
    public readonly BANK_SLOT_COST: string = "BankSlotCost";
}

class BonusSource {
    public readonly COUCH: string = `Couch`
}

export class Constants {
    public static readonly Rooms: Rooms = new Rooms();
    public static readonly Sections: Sections = new Sections();
    public static readonly Features: Features = new Features();
    public static readonly Items: Items = new Items();
    public static readonly Skills: Skills = new Skills();
    public static readonly Modifiers: Modifiers = new Modifiers();
    public static readonly BonusSource: BonusSource = new BonusSource();
}