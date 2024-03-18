//Record<K,T> set the field of object dynamically

interface IConfigSignature{
    payload: {
        [key:string]:string
    }
}

//Can be written as

interface IConfigRecord{
    payload: Record<string,string>
}

let configA: IConfigSignature = {
    payload: {
    a: `a`,
    b: `b`
    }
};

let configB: IConfigRecord = {
    payload: {
    a: `a`,
    b: `b`
    }
};

type WwwConfig = Record<"port" | "domain", string>
let wwwConfig: WwwConfig = {
 port: "80",
 domain: "https://domain.com",
 //user:"User" it causes error: Object literal may only specify known properties, and 'user' does not exist in type 'WwwConfig'.
};

type WwwConfig1 = Record<"port" & "domain", string>
let wwwConfig1: WwwConfig1 = {
 port: "80",
 domain: "https://domain.com",
 user:"User" 
};//OK