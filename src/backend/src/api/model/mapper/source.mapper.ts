import { ImplementStatic } from "../../../helper/decorator/implementStatic";
import { BaseMapper } from "./base.mapper";
import { SourceDTO } from "../dto/source.dto";
import { SourceEntity } from "../entity/source.entity";

@ImplementStatic<BaseMapper<SourceDTO, SourceEntity>>()
export class SourceMapper implements BaseMapper<SourceDTO, SourceEntity>{
    public static toDTO(entity: SourceEntity): SourceDTO {
        if (entity == null)
            return null;

        return new SourceDTO(entity);
    }

    public static toEntity(dto: SourceDTO): SourceEntity {
        throw "not implemented";
    }

    public toDTO(entity: SourceEntity): SourceDTO {
        return SourceMapper.toDTO(entity);
    }

    public toEntity(dto: SourceDTO): SourceEntity {
        return SourceMapper.toEntity(dto);
    }
}