import { ObjectType, Field } from "type-graphql";
import { BaseDTO } from "./base.dto";
import { TutorialEntity } from "../entity/tutorial.entity";
import { PageDTO } from "./page.dto";
import { PageMapper } from "../mapper/page.mapper";

@ObjectType()
export class TutorialDTO extends BaseDTO {
    @Field()
    public title: string;

    @Field()
    public description: string;

    @Field(() => [PageDTO])
    public pages: PageDTO[];

    public constructor(entity: TutorialEntity) {
        super(entity);
        this.title = entity.title;
        this.description = entity.description;
        this.pages = entity.pages.map(x => PageMapper.toDTO(x));
    }
}