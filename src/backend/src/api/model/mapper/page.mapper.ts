import { ImplementStatic } from "../../../helper/decorator/implementStatic";
import { BaseMapper } from "./base.mapper";
import { PageDTO } from "../dto/page.dto";
import { PageEntity } from "../entity/page.entity";

@ImplementStatic<BaseMapper<PageDTO, PageEntity>>()
export class PageMapper implements BaseMapper<PageDTO, PageEntity>{
    public static toDTO(entity: PageEntity): PageDTO {
        if (entity == null)
            return null;

        return new PageDTO(entity);
    }

    public static toEntity(dto: PageDTO): PageEntity {
        throw "not implemented";
    }

    public toDTO(entity: PageEntity): PageDTO {
        return PageMapper.toDTO(entity);
    }

    public toEntity(dto: PageDTO): PageEntity {
        return PageMapper.toEntity(dto);
    }
}