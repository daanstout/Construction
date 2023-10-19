class Rooms {
    public readonly LIVING_ROOM_ID: string = "LivingRoom";
    public readonly VAULT_ROOM_ID: string = "Vault";
    public readonly ARMORY_ROOM_ID: string = "Armory";

    public readonly LIVING_ROOM_DISPLAY: string = "Living Room";
    public readonly VAULT_ROOM_DISPLAY: string = "Vault";
    public readonly ARMORY_ROOM_DISPLAY: string = "Armory";
}

class Sections {
    public readonly SITTING_AREA_ID: string = "SittingArea";
    public readonly VAULT_AREA_ID: string = "Vault";
    public readonly WEAPON_STANDS_ID: string = "WeaponStands";

    public readonly SITTING_AREA_DISPLAY: string = "Sitting Area";
    public readonly VAULT_AREA_DISPLAY: string = "Vault";
    public readonly WEAPON_STANDS_DISPLAY: string = "Weapon Stands";
}

class Features {
    public readonly SITTING_AREA_SKILL_XP_ID: string = "SittingArea:SkillXP";
    public readonly SITTING_AREA_MASTERY_XP_ID: string = "SittingArea:MasteryXP";
    public readonly SITTING_AREA_GLOBAL_DOUBLING_ID: string = "SittingArea:GlobalDoubling";
    public readonly SITTING_AREA_GLOBAL_PRESERVATION_ID: string = "SittingArea:GlobalPreservation";

    public readonly SKILL_XP_DISPLAY: string = "Skill XP";
}

class Items {
    public readonly CONSTRUCTION_PLANKS: string = "construction:planks";
}

class Skills {
    public readonly CRAFTING: string = "crafting";
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