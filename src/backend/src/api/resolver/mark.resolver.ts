import { Resolver, Query } from "type-graphql";
import { Injector } from "../../helper/decorator/injection/injector";
import { BaseResolver } from "./base.resolver";
import { MarkDTO } from "../model/dto/mark.dto";
import { MarkEntity } from "../model/entity/mark.entity";
import { MarkRepository } from "../repository/mark.repository";
import { MarkMapper } from "../model/mapper/mark.mapper";

@Resolver(of => MarkDTO)
export class MarkResolver extends BaseResolver<MarkDTO, MarkEntity, MarkMapper, MarkRepository>(
    MarkDTO, { singular: "Mark", plural: "Marks" }, MarkMapper, Injector.resolve<MarkRepository>(MarkRepository)) {

    /*
    @Query(returns => [MarkDTO])
    public async marks() {
        const x = Injector.resolve<MarkRepository>(MarkRepository);
        const y = await x.getAllAsync();
        return y.map(c => MarkMapper.toDTO(c));
    }*/
}