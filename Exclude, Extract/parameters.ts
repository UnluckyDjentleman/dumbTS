//Parameters<T> get type of parameters tuple of func type
function f<T>(p0:T,p1: number,p2:string,p3?: boolean,p4: object={}){}
type FuncParams=Parameters<typeof f>;
// type FuncParams = [p0: unknown, p1: number, p2: string, p3?: boolean, p4?: object]
//ConstructorParameters<T> get type of parameters tuple of its constructor
class Classic<T>{
    constructor(
        p0:T,
        p1: number,
        p2:string,
        p3?: boolean,
        p4: object={}
    ){}
}

type ClassParams=ConstructorParameters<typeof Classic>;
// type ClassParams = [p0: unknown, p1: number, p2: string, p3?: boolean, p4?: object]