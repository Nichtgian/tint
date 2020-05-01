import { ImplementStatic } from "../../../helper/decorator/implementStatic";
import { BaseMapper } from "./base.mapper";
import { StepDTO } from "../dto/step.dto";
import { StepEntity } from "../entity/step.entity";

@ImplementStatic<BaseMapper<StepDTO, StepEntity>>()
export class StepMapper implements BaseMapper<StepDTO, StepEntity>{
    public static toDTO(entity: StepEntity): StepDTO {
        if (entity == null)
            return null;

        return new StepDTO(entity);
    }

    public static toEntity(dto: StepDTO): StepEntity {
        throw "not implemented";
    }

    public toDTO(entity: StepEntity): StepDTO {
        return StepMapper.toDTO(entity);
    }

    public toEntity(dto: StepDTO): StepEntity {
        return StepMapper.toEntity(dto);
    }
}