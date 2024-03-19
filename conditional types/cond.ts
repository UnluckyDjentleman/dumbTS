type Txd<T>=T extends number?string:boolean

let v00:Txd<5>;//let v0:string
let v01:Txd<'lol'>;//let v1:boolean

type Typic<T>=T extends number|string?void:object
let v000:Typic<5>;//let v0:void
let v001:Typic<'lol'>;//let v1:void
let v002:Typic<false>;//let v1:object

//nested conditionals
type Typoi<T>=T extends number?"Blue Pill":T extends string?"Red Pill":"Violet dust"
let v0000:Typoi<5>;//let v0:"Blue Pill"
let v0001:Typoi<'lol'>;//let v1:"Red Pill"
let v0002:Typoi<false>;//let v1::"Violet Dust"

//xdxdxdxd
type Twhoa<T,U>=T extends U?"Jotaro":"Dio"
let v00000:Twhoa<number, any>;//let v0:"Jotaro"
let v00001:Twhoa<number, string>;//let v1:"Dio"

//also
type ParamType<T>=T extends (p: infer U)=>void?U:undefined;
function f0(param:number):void{}
function f1(param:string):void{}
function f2():void{}
function f3(p0:number, p1:string):void{}
function f4(param:number[]):void{}

let var0:ParamType<typeof f0>;//let var0:number
let var1:ParamType<typeof f1>;//let var0:string
let var2:ParamType<typeof f2>;//let var0:{}
let var3:ParamType<typeof f3>;//let var0:undefined
let var4:ParamType<typeof f4>;//let var0:number[]