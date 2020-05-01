import { Injectable } from "../../helper/decorator/injection/injectable.decorator";
import { BaseRepository } from "./base.repository";
import { SourceEntity } from "../model/entity/source.entity";

@Injectable()
export class SourceRepository extends BaseRepository<SourceEntity> {

    public constructor() {
        super(SourceEntity);
    }

}
