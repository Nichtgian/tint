import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity } from "../entity/base.entity";

@ObjectType()
export abstract class BaseDTO {
    @Field(() => ID)
    public id: string;

    protected constructor(entity: BaseEntity) {
        this.id = entity.uuid;
    }
} 