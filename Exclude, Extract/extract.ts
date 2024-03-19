//Extract<T,U> found the same between T and U

let vv0: Extract<string|number, string|number>//let vv0:string|number
let vv1: Extract<number|string, number|boolean>//let vv1:number
let vv2: Extract<number|string, boolean|object>//let vv2: never
