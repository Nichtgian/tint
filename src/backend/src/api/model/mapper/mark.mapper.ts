import { ImplementStatic } from "../../../helper/decorator/implementStatic";
import { BaseMapper } from "./base.mapper";
import { MarkDTO } from "../dto/mark.dto";
import { MarkEntity } from "../entity/mark.entity";

@ImplementStatic<BaseMapper<MarkDTO, MarkEntity>>()
export class MarkMapper implements BaseMapper<MarkDTO, MarkEntity>{
    public static toDTO(entity: MarkEntity): MarkDTO {
        if (entity == null)
            return null;

        return new MarkDTO(entity);
    }

    public static toEntity(dto: MarkDTO): MarkEntity {
        throw "not implemented";
    }

    public toDTO(entity: MarkEntity): MarkDTO {
        return MarkMapper.toDTO(entity);
    }

    public toEntity(dto: MarkDTO): MarkEntity {
        return MarkMapper.toEntity(dto);
    }
}