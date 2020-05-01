export function ImplementStatic<T>() {
    return <U extends T>(constructor: U) => {
        return constructor;
    };
}