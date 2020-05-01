import { ImplementStatic } from "../../../helper/decorator/implementStatic";
import { BaseMapper } from "./base.mapper";
import { TutorialDTO } from "../dto/tutorial.dto";
import { TutorialEntity } from "../entity/tutorial.entity";

@ImplementStatic<BaseMapper<TutorialDTO, TutorialEntity>>()
export class TutorialMapper implements BaseMapper<TutorialDTO, TutorialEntity>{
    public static toDTO(entity: TutorialEntity): TutorialDTO {
        if (entity == null)
            return null;

        return new TutorialDTO(entity);
    }

    public static toEntity(dto: TutorialDTO): TutorialEntity {
        throw "not implemented";
    }

    public toDTO(entity: TutorialEntity): TutorialDTO {
        return TutorialMapper.toDTO(entity);
    }

    public toEntity(dto: TutorialDTO): TutorialEntity {
        return TutorialMapper.toEntity(dto);
    }
}