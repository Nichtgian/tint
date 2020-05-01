import { ObjectType, Field } from "type-graphql";
import { BaseDTO } from "./base.dto";
import { SourceEntity } from "../entity/source.entity";
import { PageDTO } from "./page.dto";
import { PageMapper } from "../mapper/page.mapper";

@ObjectType()
export class SourceDTO extends BaseDTO {
    @Field()
    public fileName: string;

    @Field()
    public fileType: string;

    @Field(() => [PageDTO])
    public pages: PageDTO[];

    public constructor(entity: SourceEntity) {
        super(entity);
        this.fileName = entity.fileName;
        this.fileType = entity.fileType.toString();
        this.pages = entity.pages.map(x => PageMapper.toDTO(x));
    }
}