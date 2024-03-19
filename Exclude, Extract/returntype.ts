//ReturnType<T> get Type of value that is returned by function

let example0: ReturnType<()=>void>;//let example0:void
let example1: ReturnType<()=>void|number>;//let example1:void|number
let example2: ReturnType<<T>()=>T>;//let example0:{}
let example3: ReturnType<any>;//let example3:any
let example4: ReturnType<<T extends U, U extends boolean[]>()=>T>;//let example0:boolean[]
let example5: ReturnType<Function>;//Error
let example6: ReturnType<number>;//Error