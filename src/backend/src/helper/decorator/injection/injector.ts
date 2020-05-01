import { Type } from "./injectable.decorator";

export class Injector {
    public static resolve<T>(target: Type<any>): T {
        const tokens = Reflect.getMetadata("design:paramtypes", target) || [];
        const injections = tokens.map(token => Injector.resolve<any>(token));
        return new target(...injections);
    }
}