import { Repository, getRepository } from "typeorm";
import { BaseEntity } from "../model/entity/base.entity";

export abstract class BaseRepository<Entity extends BaseEntity> extends Repository<Entity> {

    public repository: Repository<Entity>;

    protected constructor(type: any) {
        super();
        this.repository = getRepository(type);
    }

    public async getAllAsync(): Promise<Entity[]> {
        return this.getByAsync({});
    }

    public async getAllIncludeRelationsAsync(relations: []): Promise<Entity[]> {
        return this.getByIncludeRelationsAsync(relations, {});
    }

    public async getByAsync(filter: {}): Promise<Entity[]> {
        return await this.repository.find(filter);
    }

    public async getByIncludeRelationsAsync(relations: string[], filter: {}): Promise<Entity[]> {
        return await this.repository.find({ where: filter, relations: relations });
    }

    public async getSingleByAsync(filter: {}): Promise<Entity> {
        return await this.getSingleByIncludeRelationsAsync([], filter);
    }

    public async getSingleByIncludeRelationsAsync(relations: string[], filter: {}): Promise<Entity> {
        return await this.repository.findOne({ where: filter, relations: relations });
    }

    public async upsertAsync(entity: Entity): Promise<Entity> {
        const existingEntity = this.getSingleByAsync({ uuid: entity.uuid });

        /*
        if (existingEntity == null)
            await this.manager.insert(entity);
        else
            await this.manager.update(criteria, entity);
        */

        return null;
    }

    public async saveAsync(entity: Entity): Promise<Entity> {
        return await this.repository.manager.save(entity);
    }

    public async deleteAsync(entity: Entity): Promise<Entity> {
        return await this.repository.manager.remove(entity);
    }
}
