import { ObjectType, Field } from "type-graphql";
import { BaseDTO } from "./base.dto";
import { PageEntity } from "../entity/page.entity";
import { TutorialDTO } from "./tutorial.dto";
import { SourceDTO } from "./source.dto";
import { StepDTO } from "./step.dto";
import { TutorialMapper } from "../mapper/tutorial.mapper";
import { SourceMapper } from "../mapper/source.mapper";
import { StepMapper } from "../mapper/step.mapper";

@ObjectType()
export class PageDTO extends BaseDTO {
    @Field(() => TutorialDTO)
    public tutorial: TutorialDTO;

    @Field(() => SourceDTO)
    public source: SourceDTO;

    @Field(() => [StepDTO])
    public steps: StepDTO[];

    public constructor(entity: PageEntity) {
        super(entity);
        this.tutorial = TutorialMapper.toDTO(entity.tutorial);
        this.source = SourceMapper.toDTO(entity.source);
        this.steps = entity.steps.map(x => StepMapper.toDTO(x));
    }
}