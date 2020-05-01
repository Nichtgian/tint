import { Injectable } from "../../helper/decorator/injection/injectable.decorator";
import { BaseRepository } from "./base.repository";
import { StepEntity } from "../model/entity/step.entity";

@Injectable()
export class StepRepository extends BaseRepository<StepEntity> {

    public constructor() {
        super(StepEntity);
    }

}
