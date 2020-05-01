import { Resolver, Query, ClassType } from "type-graphql";
import { BaseDTO } from "../model/dto/base.dto";
import { BaseEntity } from "../model/entity/base.entity";
import { BaseMapper } from "../model/mapper/base.mapper";
import { BaseRepository } from "../repository/base.repository";

/*
export function BaseResolver<TDTO extends BaseDTO>(
    baseType: ClassType,
    base: TDTO[],
) {
    @Resolver(of => baseType, { isAbstract: true })
    abstract class BaseResolverClass<TDTO extends BaseDTO, TEntity extends BaseEntity, TMapper extends BaseMapper<TDTO, TEntity>, TRepository extends BaseRepository<TEntity>> {

        private _suffix: string;
        private _type: TDTO;
        private _mapper: TMapper;
        private _repository: TRepository;

        protected constructor(suffix: string, type: any, mapper: TMapper, repository: TRepository) {
            this._suffix = suffix;
            this._type = type;
            this._mapper = mapper;
            this._repository = repository;
        }

        @Query(returns => TDTO, { name: `getAll${this._suffix}` })
        public async getAll(): Promise<TDTO[]> {
            const entities = await this._repository.getAllAsync();
            return entities.map(x => this._mapper.toDTO(x));
        }
    }

    return BaseResolverClass;
}
*/

export function BaseResolver<TDTO extends BaseDTO, TEntity extends BaseEntity, TMapper extends BaseMapper<TDTO, TEntity>, TRepository extends BaseRepository<TEntity>>(
    DTO: ClassType, suffix: { singular: string, plural: string }, mapper: TMapper, repository: TRepository): any {

    @Resolver(() => DTO, { isAbstract: true })
    abstract class BaseResolverClass {

        protected suffix: { singular: string, plural: string };
        protected mapper: TMapper;
        protected repository: TRepository;

        protected constructor() {
            this.suffix = suffix;
            this.mapper = mapper;
            this.repository = repository;
            console.log(this.suffix.plural);
        }

        @Query(() => [DTO], { name: `getAll${this.suffix.plural}` })
        public async getAll(): Promise<TDTO[]> {
            const entities = await this.repository.getAllAsync();
            return entities.map(x => this.mapper.toDTO(x));
        }
    }

    return BaseResolverClass;
}

/*
@Resolver(() => ClassType, { isAbstract: true })
export abstract class BaseResolver<TDTO extends BaseDTO, TEntity extends BaseEntity, TMapper extends BaseMapper<TDTO, TEntity>, TRepository extends BaseRepository<TEntity>> {

    private _suffix: string;
    private _type: TDTO;
    private _mapper: TMapper;
    private _repository: TRepository;

    protected constructor(suffix: string, type: any, mapper: TMapper, repository: TRepository) {
        this._suffix = suffix;
        this._type = type;
        this._mapper = mapper;
        this._repository = repository;
        console.log(this._suffix);
        console.log(this._type);
        //console.log(this._mapper);
        //console.log(this._repository);
    }

    @Query(() => this._type, { name: `getAll${this._suffix}` })
    public async getAll(): Promise<TDTO[]> {
        const entities = await this._repository.getAllAsync();
        return entities.map(x => this._mapper.toDTO(x));
    }
}*/