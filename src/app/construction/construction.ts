export class Construction extends Skill<ConstructionSkillData> {
    protected _media: string = 'assets/saw.png';
    public readonly renderQueue: SkillRenderQueue = new ConstructionRenderQueue();

    constructor(namespace: DataNamespace, game: Game) {
        super(namespace, 'Construction', game);

    }
}

export interface ConstructionSkillData extends BaseSkillData {

}

export class ConstructionRenderQueue extends SkillRenderQueue {

}