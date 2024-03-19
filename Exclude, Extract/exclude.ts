//Exclude<T,U> shows difference T relative to U

let first: Exclude<number|string, number|boolean>// let first:string
let second: Exclude<number|string, boolean|object>//let second:string|number
let third: Exclude<number|string, number|string>//let third: never
