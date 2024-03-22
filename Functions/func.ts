function tostring(n: number): string{
    return n.toString();
}

let v1: Function=tostring;

//another examples of function declaration
/*
1. let greet2 = function(name: string) {
 return 'hello ' + name
}
2. let greet3 = (name: string) => {
 return 'hello ' + name
}
3. let greet5 = new Function('name', 'return "hello " + name')
*/
