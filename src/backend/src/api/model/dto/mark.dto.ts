import { ObjectType, Field } from "type-graphql";
import { BaseDTO } from "./base.dto";
import { MarkEntity } from "../entity/mark.entity";
import { StepDTO } from "./step.dto";
import { StepMapper } from "../mapper/step.mapper";

@ObjectType()
export class MarkDTO extends BaseDTO {
    @Field()
    public x: number;

    @Field()
    public y: number;

    @Field()
    public width: number;

    @Field()
    public height: number;

    @Field()
    public content: string;

    @Field()
    public markType: string;

    @Field(() => StepDTO)
    public step: StepDTO;

    public constructor(entity: MarkEntity) {
        super(entity);
        this.x = entity.location?.x;
        this.y = entity.location?.y;
        this.width = entity.size?.width;
        this.height = entity.size?.height;
        this.content = entity.content;
        this.markType = entity.markType.toString();
        this.step = StepMapper.toDTO(entity.step);
    }
}