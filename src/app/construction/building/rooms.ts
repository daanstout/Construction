import { BuildingObject } from "./building-object";
import { IRoomConfig } from "../config/configuration";
import { Section } from "./section";

export class Room extends BuildingObject<IRoomConfig>{
    public constructor(config: IRoomConfig, private readonly sections: Section[]) {
        super(config)
    }
}