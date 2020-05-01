import { Injectable } from "../../helper/decorator/injection/injectable.decorator";
import { BaseRepository } from "./base.repository";
import { TutorialEntity } from "../model/entity/tutorial.entity";

@Injectable()
export class TutorialRepository extends BaseRepository<TutorialEntity> {

    public constructor() {
        super(TutorialEntity);
    }

}
