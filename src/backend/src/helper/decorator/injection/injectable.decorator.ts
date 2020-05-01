type GenericClassDecorator<T> = (target: T) => void;

export interface Type<T> {
    new(...args: any[]): T;
}

export const Injectable = (): GenericClassDecorator<Type<object>> => {
    return (target: Type<object>) => {};
};