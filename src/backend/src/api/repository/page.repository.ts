import { Injectable } from "../../helper/decorator/injection/injectable.decorator";
import { BaseRepository } from "./base.repository";
import { PageEntity } from "../model/entity/page.entity";

@Injectable()
export class PageRepository extends BaseRepository<PageEntity> {

    public constructor() {
        super(PageEntity);
    }

}
